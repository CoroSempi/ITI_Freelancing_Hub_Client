import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import LocalizationProvider from "../../context/localizationContext";
import General from "./General";
import Settings from "../../pages/Settings/Settings";

export default function SettingsDrawer({ open, settingsDrawer }) {
  const { lang } = useContext(LocalizationProvider);

  return (
    <div>
      <Drawer
        anchor={lang == "en" ? "left" : "right"}
        open={open}
        onClose={settingsDrawer(false)}>
        <Settings />
      </Drawer>
    </div>
  );
}
