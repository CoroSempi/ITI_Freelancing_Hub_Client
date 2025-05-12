import { Stack, Typography } from "@mui/material";
import React from "react";

export default function TopSlogan({ color, text, lang }) {
  return (
    <Stack
      spacing={1}
      sx={{
        display: { xs: "flex", sm: "none" },
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}>
      <img width={"140px"} src="/logo.svg" alt="" />
      <Typography
        fontWeight={550}
        fontFamily={lang === "ar" ? "Shamel" : ""}
        variant={lang === "ar" ? "subtitle2" : "body2"}
        color={color}>
        {text}
      </Typography>
    </Stack>
  );
}
