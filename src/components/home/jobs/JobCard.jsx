import React from "react";
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import Prices from "./Prices";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const theme = useTheme();
  const nav = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.background.card,
        minWidth: { xs: "100%", xl: "30%" },
        maxWidth: { xs: "100%", xl: "33%" },
        height: { xs: "250px", sm: "270px" },
        flex: 1,
        position: "relative",
        pl: 1,
        overflow: "hidden",
      }}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        sx={{
          position: "absolute",
          bottom: "15px",
          right: "15px",
        }}
        spacing={1}>
        <Typography
          onClick={() => {
            nav(`/jobDetails/${job.jobData._id}`);
          }}
          fontWeight={550}
          sx={{
            zIndex: 1,
            cursor: "pointer",

            textAlign: "center",
            fontSize: { xs: "12px", sm: "15px" },
          }}
          color={theme.palette.primary.iti}>
          Read More
        </Typography>

        <Typography
          fontWeight={550}
          sx={{ cursor: "pointer", fontSize: { xs: "12px", sm: "15px" } }}
          color={theme.palette.primary.sec}>
          {job.jobData.comments.length} Comments
        </Typography>
      </Stack>

      <img
        style={{
          position: "absolute",
          zindex: -1,
          bottom: "-20px",
          right: "-10px",
          height: "75%",
        }}
        src={job.jobData.verified ? "/doneReq.svg" : "pendReq.svg"}
        alt=""
      />
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { xs: "5px", sm: "8px" },
          backgroundColor: job.jobData.verified
            ? "#44B40D"
            : theme.palette.primary.sec,
        }}
      />

      <Stack
        spacing={1}
        sx={{
          padding: 2,
          width: "100%",
        }}>
        <Typography
          fontWeight={550}
          fontSize={{ xs: "16px", sm: "20px" }}
          color={theme.palette.primary.main}>
          {job.jobData.jobTitle}
        </Typography>
        <Typography
          sx={{ opacity: 0.8 }}
          fontWeight={550}
          fontSize={{ xs: "15px", sm: "18px" }}
          color="#D7777B">
          {job.jobData.jobType}
        </Typography>

        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            fontSize: { xs: "13px", sm: "16px" },
          }}
          color={theme.palette.primary.sec}>
          {job.jobData.jobDescription}
        </Typography>

        {job.jobData.jobType == "Remote monthly job" ? (
          <Typography
            fontWeight={550}
            fontSize={{ xs: "13px", sm: "15px" }}
            color={theme.palette.primary.sec}>
            Company : {job.jobData.companytName} - {job.jobData.companyCountry}
          </Typography>
        ) : (
          <Typography
            fontWeight={550}
            fontSize={{ xs: "13px", sm: "15px" }}
            color={theme.palette.primary.sec}>
            Contributors :{" "}
            {job.jobData.teamMembers.length == 0
              ? "No contributors"
              : job.jobData.teamMembers.map((m) => m.studentName).join(", ")}
          </Typography>
        )}
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
          spacing={1}
          maxWidth={320}>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}>
            <img height={20} src="/date.svg" alt="" />
            <Typography
              fontSize={{ xs: 12, sm: 15 }}
              color={theme.palette.primary.sec}>
              Start : {job.jobData.startDate}
            </Typography>
          </Stack>

          {job.jobData.jobType == "Remote monthly job" ? (
            ""
          ) : (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              direction={"row"}
              spacing={1}>
              <img height={20} src="/date.svg" alt="" />
              <Typography
                fontSize={{ xs: 12, sm: 15 }}
                color={theme.palette.primary.sec}>
                End : {job.jobData.endDate}
              </Typography>
            </Stack>
          )}
        </Stack>

        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
          minWidth={"100%"}>
          <Prices usd={job.jobData.costInUSD || job.jobData.paymentInUSD} />
        </Stack>
      </Stack>
    </Box>
  );
}
