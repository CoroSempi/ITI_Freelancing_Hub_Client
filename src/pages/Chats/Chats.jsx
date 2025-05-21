import React, { useContext, useEffect, useState } from "react";
import { Button, Stack, useTheme, Typography } from "@mui/material";

import LocalizationProvider from "../../context/localizationContext";
import { settingsLocalization } from "../../StaticData/Localization";
import ChatHeader from "../../components/Chats/ChatHeader";
import ChatRoom from "../../components/Chats/ChatRoom";

export default function Chats({ setChats, chats }) {
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();

  const [chatRoom, setChatRoom] = useState(false);
  useEffect(() => {
    setChatRoom(false);
  }, []);

  return (
    <>
      <Stack
        alignItems="center"
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          display: chats ? "flex" : "none",
          marginTop: { xs: "70px", md: "30px" },
          width: { xs: "100%", md: "80vw" },
          minWidth: { xs: "100%", md: "500px" },
          maxWidth: { xs: "100%", md: "500px" },
          direction: lang === "ar" ? "rtl" : "ltr",
        }}
        role="presentation">
        <ChatHeader setChats={setChats} />

        {/* mainPage */}
        <Stack
          spacing={5}
          sx={{
            display: !chatRoom ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img
            style={{ margin: "auto", marginTop: "50px" }}
            src={"/chats.svg"}
            height="220px"
            width="220px"
          />
          <Stack spacing={2} justifyContent={"center"} alignItems={"center"}>
            <Typography
              fontSize={lang === "ar" ? "15px" : "18px"}
              fontFamily={lang === "ar" ? "ShamelBold" : ""}
              sx={{
                textAlign: "center",
                color: theme.palette.primary.main,
                width: "90%",
                maxWidth: "450px",
                direction: lang === "en" ? "ltr" : "rtl",
                fontWeight: "550",
              }}>
              {settingsLocalization[lang].chatsMainDesc}
            </Typography>

            <Typography
              fontSize="14px"
              fontFamily={lang === "ar" ? "Shamel" : ""}
              sx={{
                textAlign: "center",
                color: theme.palette.primary.sec,
                width: "90%",
                maxWidth: "450px",
                direction: lang === "en" ? "ltr" : "rtl",
              }}>
              {settingsLocalization[lang].chatSecDesc}
            </Typography>
          </Stack>
          <Button
            onClick={() => {
              setChatRoom(true);
            }}
            sx={{
              fontSize: "15px",
              borderRadius: "15px",
              color: "#F6F6F6",
              backgroundColor: theme.palette.background.button,
              width: "90%",
              maxWidth: "450px",
              padding: "15px",
              fontFamily: lang === "ar" ? "ShamelBold" : "",
              fontWeight: "bold",
            }}
            variant="contained">
            {settingsLocalization[lang].getStarted}
          </Button>
        </Stack>
        {/* chatRoom */}
        <Stack sx={{ display: chatRoom ? "flex" : "none", width: "100%" }}>
          <ChatRoom />
        </Stack>
      </Stack>
    </>
  );
}
