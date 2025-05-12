import React from "react";
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";

export default function CertificateCard({ certificate, name }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",

        backgroundColor: theme.palette.background.card,
        minWidth: { xs: "100%", xl: "32.5%" },
        maxWidth: { xs: "100%", xl: "32.5%" },
        position: "relative",
        pl: 1,
        overflow: "hidden",
      }}>
      <img
        style={{
          opacity: certificate.verified
            ? 0.5
            : theme.palette.mode === "dark"
            ? 0.5
            : 1,
          position: "absolute",
          zindex: -1,
          bottom: "0px",
          left: "0px",
          height: "65%",
        }}
        src={certificate.verified ? "/doneCer.svg" : "pendCer.svg"}
        alt=""
      />

      <img
        style={{
          opacity: 0.6,
          position: "absolute",
          zindex: -1,
          top: "0px",
          left: "0px",
          height: "25%",
        }}
        src={certificate.verified ? "/green.svg" : "grey.svg"}
        alt=""
      />

      <Stack
        spacing={1}
        sx={{
          padding: 2,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Typography
          fontWeight={550}
          fontSize={{ xs: "16px", sm: "20px" }}
          color={theme.palette.primary.main}>
          {certificate.Company + "'s Certificate"}
        </Typography>
        <Typography
          sx={{ opacity: 0.8 }}
          fontWeight={550}
          fontSize={{ xs: "15px", sm: "18px" }}
          color="#D7777B">
          {name}
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
          color={theme.palette.primary.sec}>
          {certificate.certificateDescription}
        </Typography>

        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
          spacing={1}
          minWidth={"60%"}>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}>
            <img height={20} src="/date.svg" alt="" />
            <Typography
              fontSize={{ xs: 12, sm: 15 }}
              color={theme.palette.primary.sec}>
              {certificate.startDate}
            </Typography>
          </Stack>

          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}>
            <img height={20} src="/date.svg" alt="" />
            <Typography
              fontSize={{ xs: 12, sm: 15 }}
              color={theme.palette.primary.sec}>
              {certificate.endDate}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          justifyContent={"end"}
          alignItems={"center"}
          direction={"row"}
          minWidth={"100%"}>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={"row"}
            spacing={1}>
            <a color={theme.palette.primary.sec}>
              <Typography
                fontWeight={550}
                sx={{ cursor: "pointer", fontSize: { xs: "12px", sm: "15px" } }}
                color="inherit">
                Read More
              </Typography>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
