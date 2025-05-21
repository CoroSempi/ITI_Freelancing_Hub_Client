import { Box, Typography, useTheme } from "@mui/material";
import LocalizationContext from "../../context/localizationContext";
import { useContext } from "react";
import { congratsLocalization } from "../../StaticData/Localization";

export default function Congrats() {
  const theme = useTheme();
  const { lang } = useContext(LocalizationContext);
  const localization = congratsLocalization[lang];

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
      }}
    >
      <img height={60} src="/congrats.svg" alt="" />
      <Typography
        fontSize={{ xs: "13px", sm: "17px" }}
        fontFamily={lang === "en" ? "" : "Shamel"}
        color={theme.palette.primary.sec}
      >
        {localization.message}
      </Typography>
    </Box>
  );
}
