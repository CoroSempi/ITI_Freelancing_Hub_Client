import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export default function User({ name, avatar }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "250px",
        gap: "10px",
      }}>
      <Box
        sx={{
          width: { xs: "80px", sm: "100px" },
          height: { xs: "80px", sm: "100px" },
        }}>
        <img
          style={{ borderRadius: "50%" }}
          width={"100%"}
          height={"100%"}
          src={avatar || "/user.svg"}
          alt=""
        />
      </Box>
      <Stack>
        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "15px" },
            fontWeight: 550,
          }}
          color={theme.palette.primary.sec}>
          Welcome Back!
        </Typography>
        <Typography
          fontSize={"22px"}
          fontWeight={550}
          color={theme.palette.primary.main}>
          {name ? name.split(" ")[0] + " " + name.split(" ")[1] : "User"}
        </Typography>
      </Stack>
    </Box>
  );
}
