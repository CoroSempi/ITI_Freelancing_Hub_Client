import { Box, useTheme, Typography } from "@mui/material";
import React from "react";

export default function TopCard({ name, value }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        justifyContent: "space-between",
        alignItems: "start",
        backgroundColor: theme.palette.background.card,
        borderRadius: "10px",
        minWidth: { xs: "100%", xl: "32.5%" },
        maxWidth: { xs: "100%", xl: "32.5%" },
      }}>
      {name == "Track" ? (
        ""
      ) : (
        <Typography
          sx={{ opacity: 0.6 }}
          fontWeight={550}
          color={theme.palette.primary.main}>
          {name || "loading"}
        </Typography>
      )}

      <Typography sx={{ opacity: 0.6 }} fontWeight={550} color="#D7777B">
        {value || "loading"}
      </Typography>
    </Box>
  );
}
