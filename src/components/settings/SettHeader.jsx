import React, { useContext } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { settingsLocalization } from "../../StaticData/Localization";
import LocalizationProvider from "../../context/localizationContext";

export default function SettHeader() {
  const nav = useNavigate();
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);

  return (
    <Stack
      sx={{ py: "3px" }}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"start"}
      gap={3}>
      <Stack
        m={"10px"}
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}>
        <img
          style={{ display: lang == "ar" ? "none" : "block" }}
          src="/backArrow.svg"
          alt="back"
        />
        <Typography
          onClick={() => nav("/")}
          fontWeight={550}
          sx={{
            fontWeight: 550,
            fontSize: lang == "ar" ? 15 : 18,
            fontFamily: lang == "ar" ? "ShamelBold" : "",
            color: "#D7777B",
          }}>
          {settingsLocalization[lang].back}
        </Typography>
      </Stack>
      <Typography
        mx={"10px"}
        fontSize={22}
        fontWeight={550}
        sx={{
          fontWeight: 550,
          fontSize: lang == "ar" ? 18 : 20,
          color: theme.palette.primary.main,
          fontFamily: lang == "ar" ? "ShamelBold" : "",
        }}
        color={theme.palette.primary.main}>
        {settingsLocalization[lang].title}
      </Typography>
    </Stack>
  );
}
