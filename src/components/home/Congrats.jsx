import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Congrats() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        padding: { xs: 2, sm: 0 },
        gap: 3,
        justifyContent: "center",
        alignItems: { xs: "start", sm: "center" },
        backgroundColor: { xs: theme.palette.background.card, sm: "inherit" },
        borderRadius: "10px",
      }}>
      <img height={60} src="/congrats.svg" alt="" />
      <Typography
        fontSize={{ xs: "13px", sm: "17px" }}
        color={theme.palette.primary.sec}>
        Congratulations on reaching your target! We are incredibly proud of you
        and your hard work! This is a fantastic achievement, and we want you to
        take a moment to celebrate your success. Keep shining and moving
        forward, you’re doing great!
      </Typography>
    </Box>
  );
}
