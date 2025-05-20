import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import { useContext } from "react";

import { headerLocalization } from "../../StaticData/Localization";
import LocalizationProvider from "../../context/localizationContext";

import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";

export default function NavDrawer({ open, navDrawer }) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const isArabic = lang === "ar";
  const localization = headerLocalization[lang];

  const handleSignOut = () => {
    dispatch(signOut());
    nav("/auth/signIn");
  };

  const navItems = [
    "home",
    "addNewJob",
    "addNewCertificate",
    "settings",
    "about",
    "signOut",
  ];

  const DrawerList = (
    <Box
      sx={{
        width: "80vw",
        maxWidth: 350,
        direction: isArabic ? "rtl" : "ltr",
      }}
      role="presentation"
      onClick={navDrawer(false)}>
      <List>
        <Stack
          spacing={1}
          sx={{
            mt: 1.5,
            px: 2,
            direction: isArabic ? "rtl" : "ltr",
            height: 100,
          }}>
          <img
            width={250}
            src={
              theme.palette.mode === "dark"
                ? "/headerLogoDark.svg"
                : "/headerLogo.svg"
            }
            alt="App Logo"
          />
          <Typography
            fontSize={{ xs: "14px", sm: "15px" }}
            fontFamily={isArabic ? "Shamel" : "inherit"}
            color={theme.palette.primary.sec}
            variant="body1">
            {localization.subTitle}
          </Typography>
        </Stack>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ my: 1 }}
              onClick={
                item === "settings"
                  ? () => nav("/settings")
                  : item === "signOut"
                  ? () => handleSignOut()
                  : item === "home"
                  ? () => nav("/")
                  : item === "addNewJob"
                  ? () => nav("/choosejob")
                  : item == "addNewCertificate"
                  ? () => nav("/addCertificate")
                  : () => nav(`/${item}`)
              }>
              <Typography fontFamily={isArabic ? "Shamel" : "inherit"}>
                {localization[item]}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor={isArabic ? "right" : "left"}
        open={open}
        onClose={navDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
