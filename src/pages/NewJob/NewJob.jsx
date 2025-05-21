import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import LocalizationProvider from "../../context/localizationContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Platform from "../../components/NewJob/Platform/Platform";
import Direct from "../../components/NewJob/Direct/Direct";
import Remote from "../../components/NewJob/Remote/Remote";

export default function NewJob() {
  const { lang } = useContext(LocalizationProvider);
  const { id, type } = useParams();
  const theme = useTheme();

  return (
    <Box
      sx={{
        margin: { xs: "80px 15px", md: "80px 30px" },
        direction: lang === "ar" ? "rtl" : "ltr",
      }}>
      <Typography
        fontSize={lang === "en" ? "25px" : "22px"}
        fontWeight={550}
        sx={{
          fontFamily: lang === "en" ? "" : "ShamelBold",
          color: theme.palette.primary.main,
        }}>
        {lang === "en" ? "Add New Job" : "اضافة عمل جديد"}
      </Typography>

      {type == "platform" && <Platform id={id} />}
      {type == "direct" && <Direct id={id} />}
      {type == "remote" && <Remote id={id} />}
    </Box>
  );
}
