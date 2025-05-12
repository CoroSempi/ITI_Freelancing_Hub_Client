import React from "react";
import { Stack, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

import NavDrop from "./NavDrop";
import { useContext } from "react";
import LocalizationProvider from "../../context/localizationContext";
import { headerLocalization } from "../../StaticData/Localization";

export default function NavBar() {
  const theme = useTheme();
  const location = useLocation();
  const { lang } = useContext(LocalizationProvider);
  let home = location.pathname.split(" ").includes("/");

  return (
    <>
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          // width: "30%",
          minWidth: lang == "en" ? "350px" : "400px",
          maxWidth: lang == "en" ? "350px" : "400px",
          fontSize: "17px",
          display: { xs: "none", md: "flex" },
          direction: lang === "ar" && "rtl",
        }}
        direction="row"
        justifyContent="space-between"
        color={theme.palette.primary.main}>
        <a
          style={{
            color: home ? theme.palette.primary.iti : "inherit",
            fontFamily: lang == "ar" ? "ShamelBold" : "",
            fontSize: lang == "ar" ? "15px" : "",
          }}
          href="/">
          {headerLocalization[lang].home}
        </a>
        <div>
          <NavDrop />
        </div>
        <a
          style={{
            color: home ? "inherit" : theme.palette.primary.iti,
            fontFamily: lang == "ar" ? "ShamelBold" : "",
            fontSize: lang == "ar" ? "15px" : "",
          }}
          href="/learnMore">
          {headerLocalization[lang].about2}
        </a>
      </Stack>
    </>
  );
}
