import { Box, useTheme, Typography } from "@mui/material";
import React from "react";
import LocalizationProvider from "../../context/localizationContext";
import { useContext } from "react";

export default function TopCard({ name, value }) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);

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
          fontFamily={lang == "ar" ? "ShamelBold" : ""}
          sx={{ opacity: 0.6 }}
          fontWeight={550}
          fontSize={lang == "ar" ? 14 : 17}
          color={theme.palette.primary.main}>
          {name}
        </Typography>
      )}

      <Typography sx={{ opacity: 0.6 }} fontWeight={550} color="#D7777B">
        {value || 0}
      </Typography>
    </Box>
  );
}
