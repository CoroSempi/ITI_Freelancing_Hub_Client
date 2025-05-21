import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListSubheader, Stack, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import LocalizationProvider from "../../context/localizationContext";
import { settingsLocalization } from "../../StaticData/Localization";

export default function Support({ setChats }) {
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
            {localization[lang].subTitle3}
          </ListSubheader>

          <ListItem
            onClick={() => {
              setChats(true);
            }}
            sx={{ p: 2, gap: 1, cursor: "pointer" }}
            disablePadding>
            <img height={25} src="chat.svg" alt="" />
            <Typography
              sx={{
                fontWeight: 550,
                fontSize: lang == "ar" ? 15 : 18,
                color: theme.palette.primary.main,
                fontFamily: lang == "ar" ? "Shamel" : "",
              }}>
              {localization[lang].chat}
            </Typography>
          </ListItem>
          <ListItem
            onClick={() => {
              alert("coming soon");
            }}
            sx={{ p: 2, gap: 1 }}
            disablePadding>
            <img height={25} src="about.svg" alt="" />
            <Typography
              sx={{
                fontWeight: 550,
                fontSize: lang == "ar" ? 15 : 18,
                color: theme.palette.primary.main,
                fontFamily: lang == "ar" ? "Shamel" : "",
              }}>
              {localization[lang].about}
            </Typography>
          </ListItem>
        </List>
      </>
    </div>
  );
}
