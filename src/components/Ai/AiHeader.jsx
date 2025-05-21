import React, { useContext } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalizationProvider from "../../context/localizationContext";

export default function AiHeader() {
  const nav = useNavigate();
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);

  return (
    <Stack
      sx={{
        p: 2,
        borderBottom: "solid 1px rgba(167, 165, 165, 0.5)",
      }}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"start"}
      gap={3}>
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
        {lang == "ar" ? "تحدث مع الذكاء الاصطناعي" : "Talking to our Ai"}
      </Typography>
    </Stack>
  );
}
