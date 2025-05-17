import React from "react";
import { Box, Button, Link, Stack, Typography, useTheme } from "@mui/material";
import Prices from "./Prices";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const theme = useTheme();
  // const text =
  //   "Develop a responsive website for a local bakery that showcases its products and allows customers to place orders online. The site should include an online menu, a contact page, and a blog section for updates. The design must re... .";
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.background.card,
        minWidth: { xs: "100%", xl: "32.5%" },
        maxWidth: { xs: "100%", xl: "32.5%" },
        position: "relative",
        pl: 1,
        overflow: "hidden",
      }}
    >
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
        }}
      >
        <Typography
          fontWeight={550}
          fontSize={{ xs: "16px", sm: "20px" }}
          color={theme.palette.primary.main}
        >
          {job.jobData.jobTitle}
        </Typography>
        
        <Typography
          sx={{ opacity: 0.8 }}
          fontWeight={550}
          fontSize={{ xs: "15px", sm: "18px" }}
          color="#D7777B"
        >
          {job.jobData.jobType}
        </Typography>

        <Typography
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            fontSize: { xs: "13px", sm: "16px" },
          }}
          color={theme.palette.primary.sec}
        >
          {job.jobData.jobDescription}
        </Typography>

        {job.jobData.jobType == "Remote monthly job" ? (
          <Typography
            fontWeight={550}
            fontSize={{ xs: "13px", sm: "15px" }}
            color={theme.palette.primary.sec}
          >
            Company : {job.jobData.companytName} - {job.jobData.companyCountry}
          </Typography>
        ) : (
          <Typography
            fontWeight={550}
            fontSize={{ xs: "13px", sm: "15px" }}
            color={theme.palette.primary.sec}
          >
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
          maxWidth={320}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}
          >
            <img height={20} src="/date.svg" alt="" />
            <Typography
              fontSize={{ xs: 12, sm: 15 }}
              color={theme.palette.primary.sec}
            >
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
              spacing={1}
            >
              <img height={20} src="/date.svg" alt="" />
              <Typography
                fontSize={{ xs: 12, sm: 15 }}
                color={theme.palette.primary.sec}
              >
                End : {job.jobData.endDate}
              </Typography>
            </Stack>
          )}
        </Stack>

        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
          minWidth={"100%"}
        >
          <Prices usd={job.jobData.costInUSD || job.jobData.paymentInUSD} />

          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}
          >
            {/* <a href={`/jobDetails/${job.jobData._id}`} color={theme.palette.primary.sec}>
              <Typography
                fontWeight={550}
                sx={{ cursor: "pointer", fontSize: { xs: "12px", sm: "15px" } }}
                color="inherit"
              >
                Read More
              </Typography>
            </a> */}

            <Button
              variant="text"
              onClick={() => navigate(`/jobDetails/${job.jobData._id}`)}
              sx={{ cursor: "pointer", fontSize: { xs: "12px", sm: "15px" } }}
              color={theme.palette.primary.sec}
            >
              Read More
            </Button>

            <Typography
              fontWeight={550}
              sx={{ cursor: "pointer", fontSize: { xs: "12px", sm: "15px" } }}
              color={theme.palette.primary.sec}
            >
              {job.jobData.comments.length} Comments
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
