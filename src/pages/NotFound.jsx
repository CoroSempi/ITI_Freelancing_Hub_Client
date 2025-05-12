import React from "react";
import Container from "@mui/material/Container";
import { Button, Stack, useTheme } from "@mui/material";
import { useNavigate } from "react-router";

export default function NotFound() {
  const theme = useTheme();
  let navigate = useNavigate();

  return (
    <div>
      <Container
        sx={{
          backgroundColor: theme.palette.background.default,
          minHeight: "96VH",
          minWidth: "100%",
          boxSizing: "border-box",
        }}>
        <Stack
          spacing={5}
          sx={{
            height: "90vh",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img
            style={{ minWidth: "350px", width: "60%", maxHeight: "70%" }}
            src="/404.svg"
            alt="eff"
          />
          <Button
            onClick={() => {
              navigate("/");
            }}
            sx={{ backgroundColor: "#BF272D" }}
            variant="contained">
            Back to Home
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
