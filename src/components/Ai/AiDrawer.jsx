import Drawer from "@mui/material/Drawer";

import { useContext } from "react";
import LocalizationProvider from "../../context/localizationContext";

import AI from "../../pages/Ai/AI";

export default function AiDrawer({ open, aiDrawer }) {
  const { lang } = useContext(LocalizationProvider);

  return (
    <div>
      <Drawer
        anchor={lang == "en" ? "left" : "right"}
        open={open}
        onClose={aiDrawer(false)}>
        <AI />
      </Drawer>
    </div>
  );
}
