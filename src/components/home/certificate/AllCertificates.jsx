import React, { useContext } from "react";
import SectionTop from "./SectionTop.jsx";
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CertificateCard from "./CertificateCard.jsx";
import LocalizationProvider from "../../../context/localizationContext.jsx";

export default function AllCertificates({ name }) {
  const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";
  const [certificates, setCertificates] = useState(null);
  const theme = useTheme();

  const { lang } = useContext(LocalizationProvider);

  async function getCertificates(token) {
    try {
      const response = await axios.get(baseUrl + "certificate", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("AccessToken");
    async function fetchJobs() {
      if (token) {
        const data = await getCertificates(token);
        setCertificates(data);
      }
    }

    fetchJobs();
  }, []);

  if (!certificates)
    return (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ minHeight: "100px" }}>
        <CircularProgress color={"secondary"} />;
      </Stack>
    );

  return (
    <Stack sx={{ direction: lang === "ar" ? "rtl" : "ltr" }} spacing={2}>
      <SectionTop />
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "start",
          gap: { xs: 2, sm: 2.5 },
        }}>
        {certificates.length ? (
          certificates.map((certificate) => (
            <CertificateCard
              name={name}
              key={certificate._id}
              certificate={certificate}
            />
          ))
        ) : certificates.length === 0 ? (
          <Box
            sx={{
              minHeight: { xs: "180px", md: "250px" },
              direction: lang === "ar" ? "rtl" : "ltr",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
              gap: 1,
            }}>
            <Typography
              fontFamily={lang == "ar" ? "Shamel" : ""}
              variant="body1"
              color={theme.palette.primary.sec}>
              {lang === "en" ? "No Certificates Yet" : "لا يوجد شهادات بعد"}
            </Typography>
            <Typography
              fontFamily={lang == "ar" ? "Shamel" : ""}
              variant="body2"
              color={theme.palette.primary.sec}>
              {lang == "en"
                ? "Let's Add New Certificate !"
                : "يمكنك اضافة شهاداتك الأن !"}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Stack>
  );
}
