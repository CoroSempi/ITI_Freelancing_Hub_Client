import React, { useContext } from "react";
import SectionTop from "./SectionTop.jsx";
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import RequestCard from "./JobCard.jsx";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import LocalizationProvider from "../../../context/localizationContext.jsx";

export default function AllJobs() {
  const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";
  const [jobs, setJobs] = useState(null);
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();

  async function getJobs(token) {
    try {
      const response = await axios.get(baseUrl + "jobs", {
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
        const data = await getJobs(token);
        setJobs(data);
      }
    }

    fetchJobs();
  }, []);

  if (!jobs)
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

      {jobs.length === 0 ? (
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
            {lang === "en" ? "No Jobs Yet" : "لا يوجد وظائف بعد"}
          </Typography>
          <Typography
            fontFamily={lang == "ar" ? "Shamel" : ""}
            variant="body2"
            color={theme.palette.primary.sec}>
            {lang == "en" ? "Let's Add New Job !" : "يمكنك اضافة اعمالك الأن !"}
          </Typography>
        </Box>
      ) : null}

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
        {jobs.map((job) =>
          job.jobData ? <RequestCard key={job.jobData._id} job={job} /> : null
        )}
      </Box>
    </Stack>
  );
}
