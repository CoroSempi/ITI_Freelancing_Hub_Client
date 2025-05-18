import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListSubheader, Stack, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import LocalizationProvider from "../../context/localizationContext";

import { settingsLocalization } from "../../StaticData/Localization";

export default function Account({ setEditProfile, setResetPassword }) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationProvider);

  const localization = settingsLocalization;

  return (
    <div>
      <>
        <List>
          <ListSubheader
            sx={{
              backgroundColor: "inherit",
              fontWeight: 550,
              color: theme.palette.primary.sec,
              fontSize: lang == "ar" ? 15 : "18px",
              fontFamily: lang == "ar" ? "ShamelBold" : "",
            }}>
            {localization[lang].subTitle2}
          </ListSubheader>

          <ListItem
            onClick={() => {
              setEditProfile(true);
            }}
            sx={{ p: 2, gap: 1, cursor: "pointer" }}
            disablePadding>
            <img height={25} src="profile.svg" alt="" />
            <Typography
              sx={{
                fontWeight: 550,
                fontSize: lang == "ar" ? 15 : 18,
                color: theme.palette.primary.main,
                fontFamily: lang == "ar" ? "Shamel" : "",
              }}>
              {localization[lang].editMyProfile}
            </Typography>
          </ListItem>
          <ListItem
            onClick={() => {
              setResetPassword(true);
            }}
            sx={{ p: 2, gap: 1, cursor: "pointer" }}
            disablePadding>
            <img height={25} src="keyRed.svg" alt="" />
            <Typography
              sx={{
                fontWeight: 550,
                fontSize: lang == "ar" ? 15 : 18,
                color: theme.palette.primary.main,
                fontFamily: lang == "ar" ? "Shamel" : "",
              }}>
              {localization[lang].changePassword}
            </Typography>
          </ListItem>
        </List>
      </>
    </div>
  );
}
