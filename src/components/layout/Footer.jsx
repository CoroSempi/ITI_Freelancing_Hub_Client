import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Footer() {
  const theme = useTheme();
  return (
    <Stack
      spacing={{ xs: 2, sm: 0 }}
      sx={{
        padding: "20px",
        px: { xs: "10px", lg: "80px" },
        borderTop: "1px solid rgba(167,165,165,0.4)",
      }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"start"}>
        <Box width={{ xs: 50, sm: 100 }}>
          <img width={"100%"} src="/logo.svg" alt="" />
        </Box>

        <Stack spacing={3} sx={{ width: { xs: "80%", sm: "60%" } }}>
          <Typography
            textAlign={{ sm: "center" }}
            fontSize={{ xs: "12px", sm: "17px" }}
            color={theme.palette.primary.sec}>
            The ITI Freelancing Hub is designed specifically for students who
            have secured their own freelancing jobs. This platform allows
            students to upload the details of their jobs for administrative
            approval. Once approved, these opportunities contribute to their
            graduation requirements.
          </Typography>
        </Stack>

        <Stack display={{ xs: "none", sm: "flex" }} spacing={1}>
          <Typography fontSize={"18px"} color={theme.palette.primary.main}>
            Quick Links
          </Typography>
          <Stack>
            <Typography variant="body1" color={theme.palette.primary.sec}>
              Home
            </Typography>

            <Typography variant="body1" color={theme.palette.primary.sec}>
              Chats
            </Typography>

            <Typography variant="body1" color={theme.palette.primary.sec}>
              Settings
            </Typography>
            <Typography variant="body1" color={theme.palette.primary.sec}>
              Log out
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography
        fontSize={{ xs: "12px", sm: "17px" }}
        textAlign={"center"}
        fontWeight={550}
        color={"#D7777B"}>
        © 2025 ITI Freelancing Hub. All rights reserved.
      </Typography>
    </Stack>
  );
}
