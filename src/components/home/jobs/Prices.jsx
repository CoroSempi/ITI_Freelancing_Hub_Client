import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Prices({ usd }) {
  const theme = useTheme();
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
      spacing={1}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        spacing={1}>
        <img height={20} src="/usd.svg" alt="" />
        <Typography
          fontWeight={550}
          fontSize={{ xs: 12, sm: 15 }}
          color={theme.palette.primary.main}>
          {usd}
        </Typography>
      </Stack>

      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        spacing={1}>
        <img height={12} src="/egp.svg" alt="" />
        <Typography
          fontWeight={550}
          fontSize={{ xs: 12, sm: 15 }}
          color={theme.palette.primary.main}>
          {usd * 50}
        </Typography>
      </Stack>
    </Stack>
  );
}
