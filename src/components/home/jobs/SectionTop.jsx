import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export default function SectionTop() {
  const theme = useTheme();
  return (
    <Box
      sx={{
     
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
      }}>
      <Stack
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
          fontSize={{ xs: "20px", sm: "25px" }}
          fontWeight={550}
          color={theme.palette.primary.main}>
          Freelancing Jobs
        </Typography>
      </Stack>
      <button
        style={{
          border: "0.5px solid #44B40D",
          padding: "10px 20px",
          borderRadius: "20px",
          backgroundColor: "rgba(68, 180, 13, 0.2)",
          color: "#44B40D",
          cursor: "pointer",
          fontWeight: "bold",
        }}>
        Add New Job
      </button>
    </Box>
  );
}
