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
import Settings from "../settings/SettingsDrawer";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/slices/auth";
import { useDispatch } from "react-redux";
import Notifications from "../../pages/Notifications/Notifications";

export default function NotiDrawer({ open, notiDrawer }) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);
  const nav = useNavigate();

  const isArabic = lang === "ar";

  return (
    <>
      <Drawer
        sx={{ width: "80vw", maxWidth: 350, minWidth: 350 }}
        anchor={isArabic ? "right" : "left"}
        open={open}
        onClose={() => notiDrawer(false)}>
        <Notifications notiDrawer={notiDrawer} />
      </Drawer>
    </>
  );
}
