import React from "react";
import SectionTop from "./SectionTop.jsx";
import { Box, CircularProgress, Stack } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CertificateCard from "./CertificateCard.jsx";

export default function AllCertificates({ name }) {
  const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";
  const [certificates, setCertificates] = useState(null);

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
    <Stack spacing={2}>
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
        {certificates.map((certificate) => (
          <CertificateCard
            name={name}
            key={certificate._id}
            certificate={certificate}
          />
        ))}
      </Box>
    </Stack>
  );
}
