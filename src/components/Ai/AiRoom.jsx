import { useTheme } from "@emotion/react";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocalizationProvider from "../../context/localizationContext";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { sendMessagetoAI } from "../../redux/slices/ai";
import ReactMarkdown from "react-markdown";

export default function AiRoom() {
  const dispatch = useDispatch();
  const ai = useSelector((state) => state.ai);
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (ai.chatRoom.length === 0) {
      dispatch(
        sendMessagetoAI(
          "start your response with wellcome to iti freelancing hub the give me some ips in frelancing and ask me if thre any thing you can help my with"
        )
      );
    }
  }, []);

  const sendMessagee = (e) => {
    dispatch(sendMessagetoAI(message));
    setMessage("");
  };

  return (
    <Stack spacing={2}>
      <Stack
        spacing={2}
        sx={{
          height: "70vh",
          overflowY: "auto",

          px: 2,
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}>
        {ai.chatRoom.length === 0 ? (
          <Stack
            sx={{
              height: "80vh",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Typography
              sx={{
                color: theme.palette.primary.sec,
                fontFamily: lang == "ar" ? "Shamel" : "",
              }}
              textAlign={"center"}
              variant="body1"
              color="initial">
              {lang === "ar"
                ? "... كيف يمكنني مساعدتك"
                : "How Can I Help You ?"}
            </Typography>
          </Stack>
        ) : (
          ai.chatRoom.slice(1).map((chat, index) => (
            <Stack
              key={index}
              alignItems={chat.received ? "flex-end" : "flex-start"}
              spacing={1}
              width={"100%"}>
              <Box
                sx={{
                  backgroundColor: chat.received
                    ? theme.palette.primary.sec
                    : theme.palette.primary.iti,
                  padding: "15px",
                  borderRadius: "15px",
                  width: { xs: "85%", sm: "80%" },
                }}>
                <Typography
                  sx={{ width: "100%", textAlign: "left" }}
                  variant="body1"
                  color="white">
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => <span {...props} />,
                      strong: ({ node, ...props }) => (
                        <Typography
                          component="strong"
                          fontWeight="bold"
                          display="inline"
                          {...props}
                        />
                      ),
                      em: ({ node, ...props }) => (
                        <Typography
                          component="em"
                          fontStyle="italic"
                          display="inline"
                          {...props}
                        />
                      ),
                    }}>
                    {chat.content}
                  </ReactMarkdown>
                </Typography>
              </Box>
              <Typography
                sx={{
                  width: "100%",
                  textAlign:
                    lang === "en"
                      ? chat.received
                        ? "right"
                        : "left"
                      : chat.received
                      ? "left"
                      : "right",
                }}
                fontSize={13}
                color={theme.palette.primary.sec}>
                {new Date(chat.timestamp).toLocaleString()}
              </Typography>
            </Stack>
          ))
        )}
      </Stack>
      <Stack
        sx={{
          direction: lang === "ar" ? "rtl" : "ltr",
          px: 2,
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={lang === "ar" ? "اكتب رسالة" : "Write a message"}
          style={{
            direction: lang === "ar" ? "rtl" : "ltr",
            fontSize: "15px",
            background: "none",
            border: "0.1px solid #A7A5A5",
            borderRadius: "15px",
            color: theme.palette.primary.main,
            flex: 1,
            padding: "20px",
          }}
        />
        <button
          disabled={message === ""}
          onClick={sendMessagee}
          style={{
            height: "50px",
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#BF272D",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
          }}>
          <img src="/message.svg" alt="" />
        </button>
      </Stack>
    </Stack>
  );
}
