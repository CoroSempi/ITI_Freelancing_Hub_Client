import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import LangDrop from "../../components/layout/LangDrop";

export default function Auth() {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        display: "flex",
        minHeight: "90vh",
        position: "relative",
        my: "10px",
        overflow: "hidden",
        maxHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",

          display: { xs: "none", sm: "block" },
        }}>
        <img src="/logo.svg" alt="" />
      </Box>

      <Box
        sx={{ zIndex: 20, position: "absolute", top: "20px", right: "10px" }}>
        <LangDrop />
      </Box>
      <Grid
        sx={{
          display: { xs: "none", lg: "flex" },
          justifyContent: "end",

          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.2)"
              : "transparent",
        }}
        size={7}>
        <Box
          sx={{
            maxWidth: "100%",
            height: { xs: "100%", xl: "95%" },
          }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src="/auth.svg"
            alt=""
          />
        </Box>
      </Grid>

      <Outlet />
    </Grid>
  );
}
