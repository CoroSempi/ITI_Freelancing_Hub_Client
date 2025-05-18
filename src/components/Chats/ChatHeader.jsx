import React, { useContext } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { settingsLocalization } from "../../StaticData/Localization";
import LocalizationProvider from "../../context/localizationContext";

export default function ChatHeader({ setChats }) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);

  return (
    <Stack
      sx={{ py: "3px", minWidth: "100%" }}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"start"}>
      <Stack
        m={"10px"}
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        sx={{ display: "flex", cursor: "pointer" }}>
        <img
          style={{ display: lang == "ar" ? "none" : "block" }}
          src="/backArrow.svg"
          alt="back"
        />
        <Typography
          onClick={() => setChats(false)}
          fontWeight={550}
          sx={{
            fontWeight: 550,
            fontSize: lang == "ar" ? 15 : 18,
            fontFamily: lang == "ar" ? "ShamelBold" : "",
            color: "#D7777B",
          }}>
          {settingsLocalization[lang].settingBack}
        </Typography>
      </Stack>

      <Typography
        mx={"10px"}
        fontSize={22}
        fontWeight={550}
        textAlign={"center"}
        sx={{
          fontWeight: 550,
          fontSize: lang == "ar" ? 18 : 20,
          color: theme.palette.primary.main,
          borderBottom: "solid 1px rgba(167, 165, 165, 0.5)",
          p: 2,
          width: "100%",
          mx: "auto",
          fontFamily: lang == "ar" ? "ShamelBold" : "",
        }}
        color={theme.palette.primary.main}>
        {settingsLocalization[lang].title3}
      </Typography>
    </Stack>
  );
}
