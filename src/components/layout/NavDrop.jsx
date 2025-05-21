import React, { useState, useContext } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import LocalizationProvider from "../../context/localizationContext";
import { Typography, useTheme } from "@mui/material";

import { headerLocalization } from "../../StaticData/Localization";

import SettingsDrawer from "../settings/SettingsDrawer";
import { useNavigate } from "react-router-dom";
import AiDrawer from "../Ai/AiDrawer";

export default function NavDrop() {
  const theme = useTheme();
  const nav = useNavigate();
  const { lang } = useContext(LocalizationProvider);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  const settingsDrawer = (newOpen) => () => {
    setSettingsOpen(newOpen);
  };

  const aiDrawer = (newOpen) => () => {
    setAiOpen(newOpen);
  };

  return (
    <>
      <Select
        sx={{
          height: "50px",
          width: "110px",
          color: theme.palette.primary.main,
        }}
        id="language-select"
        value={"Account"}
        displayEmpty
        MenuProps={{
          PaperProps: {
            style: {
              zIndex: 1301,
              border: "",
              direction: lang === "ar" && "rtl",
            },
          },
        }}>
        <MenuItem sx={{ display: "none" }} hidden={true} value="Account">
          <Typography
            sx={{
              marginTop: lang == "ar" ? "5px" : "",
              fontFamily: lang == "ar" ? "Shamel" : "",
              fontSize: lang == "ar" ? "15px" : "",
            }}>
            {headerLocalization[lang].account}
          </Typography>
        </MenuItem>
        <MenuItem></MenuItem>

        <MenuItem onClick={() => nav("/choosejob")}>
          <Typography
            sx={{
              fontFamily: lang == "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "14px" : "",
            }}>
            {headerLocalization[lang].addNewJob}
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => nav("/addCertificate")}>
          <Typography
            sx={{
              fontFamily: lang == "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "14px" : "",
            }}>
            {headerLocalization[lang].certificate}
          </Typography>
        </MenuItem>

        <MenuItem onClick={aiDrawer(true)}>
          <Typography
            sx={{
              fontFamily: lang == "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "14px" : "",
            }}>
            {headerLocalization[lang].ai}
          </Typography>
        </MenuItem>

        <MenuItem onClick={settingsDrawer(true)}>
          <Typography
            sx={{
              fontFamily: lang == "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "14px" : "",
            }}>
            {headerLocalization[lang].settings}
          </Typography>
        </MenuItem>
      </Select>
      <SettingsDrawer open={settingsOpen} settingsDrawer={settingsDrawer} />
      <AiDrawer open={aiOpen} aiDrawer={aiDrawer} />
    </>
  );
}
