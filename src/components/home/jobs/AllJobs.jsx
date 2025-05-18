import React from "react";
import SectionTop from "./SectionTop.jsx";
import { Box, CircularProgress, Stack } from "@mui/material";
import RequestCard from "./JobCard.jsx";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function AllJobs() {
  const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/";
  const [jobs, setJobs] = useState(null);

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
        {jobs.map((job) =>
          job.jobData ? <RequestCard key={job.jobData._id} job={job} /> : null
        )}
      </Box>
    </Stack>
  );
}
