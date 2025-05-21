import { Box, Stack, Typography, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocalizationContext from "../../../context/localizationContext";

export default function SectionTop() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { lang } = useContext(LocalizationContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        direction: lang === "ar" ? "rtl" : "ltr",
      }}>
      <Stack
        sx={{ gap: lang === "ar" ? 1 : 0 }}
        direction={"row"}
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}>
        <div
          style={{
            width: "8px",
            height: "40px",
            borderRadius: "10px 0px 10px 0px",
            backgroundColor: theme.palette.primary.iti,
            color: theme.palette.primary.iti,
          }}>
          .
        </div>
        <Typography
          fontFamily={lang === "en" ? "" : "ShamelBold"}
          fontSize={{
            xs: lang === "ar" ? "16px" : "20px",
            sm: lang === "ar" ? "18px" : "25px",
          }}
          fontWeight={550}
          color={theme.palette.primary.main}>
          {lang === "en" ? "Freelancing Jobs" : "مشاريع العمل الحر"}
        </Typography>
      </Stack>
      <button
        onClick={() => navigate("/choosejob")}
        style={{
          border: "0.5px solid #44B40D",
          padding: "10px 20px",
          borderRadius: "20px",
          backgroundColor: "rgba(68, 180, 13, 0.2)",
          color: "#44B40D",
          cursor: "pointer",
          fontWeight: "bold",
          fontFamily: lang === "en" ? "" : "ShamelBold",
          fontSize: lang === "ar" ? "10px" : "14px",
        }}>
        {lang === "en" ? "Add New Job" : "إضافة مشروع جديدة"}
      </button>
    </Box>
  );
}
