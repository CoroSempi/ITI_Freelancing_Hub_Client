import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListSubheader, Stack, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import LocalizationProvider from "../../context/localizationContext";
import ControlledSwitches from "./Switch";
import { settingsLocalization } from "../../StaticData/Localization";

export default function General() {
  const theme = useTheme();
  const { lang, handleToggle, handleToggleLang } =
    useContext(LocalizationProvider);

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
            {localization[lang].subTitle1}
          </ListSubheader>

          <ListItem sx={{ fontWeight: 550 }} disablePadding>
            <Stack
              width="100%"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 1 }}>
              <Typography
                sx={{
                  fontSize: lang == "ar" ? 15 : 18,
                  color: theme.palette.primary.main,
                  fontFamily: lang == "ar" ? "Shamel" : "",
                }}>
                <ControlledSwitches handleToggle={handleToggle} />
                {localization[lang].theme}
              </Typography>

              <Typography
                sx={{
                  fontSize: lang == "ar" ? 15 : 18,
                  color: theme.palette.primary.iti,
                  fontFamily: lang == "ar" ? "ShamelBold" : "",
                  mr: 1,
                }}>
                {theme.palette.mode == "dark"
                  ? lang == "en"
                    ? "Dark"
                    : "مظلم"
                  : lang == "en"
                  ? "Light"
                  : "مشرق"}
              </Typography>
            </Stack>
          </ListItem>

          <ListItem sx={{ fontWeight: 550 }} disablePadding>
            <Stack
              width="100%"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 1 }}>
              <Typography
                sx={{
                  fontSize: lang == "ar" ? 15 : 18,
                  color: theme.palette.primary.main,
                  fontFamily: lang == "ar" ? "Shamel" : "",
                }}>
                <ControlledSwitches
                  handleToggle={handleToggleLang}
                  lang={lang}
                />
                {localization[lang].language}
              </Typography>

              <Typography
                sx={{
                  fontSize: lang == "ar" ? 15 : 18,
                  color: theme.palette.primary.iti,
                  fontFamily: lang == "ar" ? "ShamelBold" : "",
                  mr: 1,
                }}>
                {lang === "en" ? "English" : "العربية"}
              </Typography>
            </Stack>
          </ListItem>
        </List>
      </>
    </div>
  );
}
