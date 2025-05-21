import { useTheme } from "@emotion/react";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocalizationProvider from "../../context/localizationContext";
import { getChat, sendMessage } from "../../redux/slices/chats";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function ChatRoom() {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(getChat());
  }, []);

  const sendMessagee = (e) => {
    dispatch(sendMessage(message));
    setMessage("");
  };

  if (chat.loading)
    return (
      <Stack
        sx={{
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CircularProgress />
      </Stack>
    );

  return (
    <Stack spacing={2}>
      {chat.chatRoom.length === 0 ? (
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
            {lang === "ar" ? "... كيف يمكنني مساعدتك" : "How Can I Help You ?"}
          </Typography>
        </Stack>
      ) : (
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
          {chat.chatRoom.map((chat, index) => (
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
                  width: { xs: "85%", sm: "70%" },
                }}>
                <Typography
                  sx={{ width: "100%", textAlign: "left" }}
                  variant="body1"
                  color="white">
                  {chat.content}
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
          ))}
        </Stack>
      )}

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
