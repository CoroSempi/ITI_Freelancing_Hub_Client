import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import LocalizationProvider from "../../context/localizationContext";
import General from "./General";

export default function Settings({ open, settingsDrawer }) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);

  const DrawerList = (
    <Box
      sx={{
        width: "80vw",
        maxWidth: "350px",
        direction: lang === "ar" && "rtl",
      }}
      role="presentation">
      <General />
      <Divider />
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={lang == "en" ? "left" : "right"}
        open={open}
        onClose={settingsDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
