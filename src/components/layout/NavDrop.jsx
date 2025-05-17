import React, { useState, useContext } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ListItemText from "@mui/material/ListItemText";

import LocalizationProvider from "../../context/localizationContext";
import { Typography, useTheme } from "@mui/material";
import Settings from "../settings/Settings";

import { headerLocalization } from "../../StaticData/Localization";
import { useNavigate } from "react-router-dom";

export default function NavDrop() {
  const nav = useNavigate();
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const settingsDrawer = (newOpen) => () => {
    setSettingsOpen(newOpen);
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
        }}
      >
        <MenuItem sx={{ display: "none" }} hidden={true} value="Account">
          <Typography
            sx={{
              marginTop: lang == "ar" ? "5px" : "",
              fontFamily: lang == "ar" ? "Shamel" : "",
              fontSize: lang == "ar" ? "15px" : "",
            }}
          >
            {headerLocalization[lang].account}
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography
            sx={{
              fontFamily: lang == "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "14px" : "",
            }}
          >
            {headerLocalization[lang].chats}
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography
            sx={{
              fontFamily: lang == "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "14px" : "",
            }}
          >
            {headerLocalization[lang].notification}
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography
            onClick={() => nav("/choosejob")}
            sx={{
              fontFamily: lang == "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "14px" : "",
            }}
          >
            {headerLocalization[lang].addNewJob}
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography
          onClick={() => nav("/newCetificate")}
            sx={{
              fontFamily: lang == "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "14px" : "",
            }}
          >
            {headerLocalization[lang].certificate}
          </Typography>
        </MenuItem>
        <MenuItem onClick={settingsDrawer(true)}>
          <Typography
            sx={{
              fontFamily: lang == "ar" ? "ShamelBold" : "",
              fontSize: lang == "ar" ? "14px" : "",
            }}
          >
            {headerLocalization[lang].settings}
          </Typography>
        </MenuItem>
      </Select>
      <Settings open={settingsOpen} settingsDrawer={settingsDrawer} />
    </>
  );
}
