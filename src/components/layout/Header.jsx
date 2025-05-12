import "./layout.css";
import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import NavBar from "./NavBar";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import NavDrawer from "./NavDrawer";
import LocalizationProvider from "../../context/localizationContext";
import { useContext } from "react";
export default function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { lang } = useContext(LocalizationProvider);
  const handleSignOut = () => {
    dispatch(signOut());
    nav("/auth/signIn");
  };

  const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);

  const navDrawer = (newOpen) => () => {
    setNavDrawerOpen(newOpen);
  };

  return (
    <>
      <Stack
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: { xs: "10px 15px", md: "10px 30px" },
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          position: "fixed",
          top: "0px",
          zIndex: "100",
        }}
        direction="row"
        justifyContent="space-between">
        <img
          width={"180px"}
          src={
            theme.palette.mode === "dark"
              ? "/headerLogoDark.svg"
              : "/headerLogo.svg"
          }
          alt=""
        />
        <NavBar />
        <Box
          onClick={navDrawer(true)}
          sx={{
            display: { xs: "flex", md: "none" },
            fontSize: "40px",
            cursor: "pointer",
          }}>
          <ReorderRoundedIcon
            fontSize="40px"
            htmlColor={theme.palette.primary.iti}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}>
          <button
            style={{
              fontFamily: lang === "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "15px" : "",
            }}
            onClick={handleSignOut}
            className="signOut">
            {lang === "en" ? "Sign Out" : "تسجيل الخروج"}
          </button>
        </Box>
      </Stack>
      <NavDrawer open={navDrawerOpen} navDrawer={navDrawer} />;
    </>
  );
}
