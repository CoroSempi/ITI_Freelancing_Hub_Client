import React from "react";
import Drawer from "@mui/material/Drawer";
import { useContext } from "react";
import LocalizationProvider from "../../context/localizationContext";

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
