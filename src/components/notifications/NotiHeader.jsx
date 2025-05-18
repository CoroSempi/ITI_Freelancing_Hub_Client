import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocalizationProvider from "../../context/localizationContext";
import { settingsLocalization } from "../../StaticData/Localization";

export default function NotiHeader() {
  const nav = useNavigate();
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);

  return (
    <Stack
      sx={{ py: "5px" }}
      direction={"column"}
      justifyContent={"center"}
      alignItems={lang == "ar" ? "end" : "start"}
      gap={3}>
      <Stack
        mx={"10px"}
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}>
        <img src="/backArrow.svg" alt="back" />
        <Typography
          fontFamily={lang == "ar" ? "ShamelBold" : ""}
          onClick={() => nav("/")}
          fontWeight={550}
          color="#D7777B">
          {settingsLocalization[lang].back}
        </Typography>
      </Stack>
      <Typography
        mx={"10px"}
        fontSize={lang == "ar" ? 20 : 22}
        fontWeight={550}
        fontFamily={lang == "ar" ? "ShamelBold" : ""}
        color={theme.palette.primary.main}>
        {settingsLocalization[lang].notifications}
      </Typography>
    </Stack>
  );
}
