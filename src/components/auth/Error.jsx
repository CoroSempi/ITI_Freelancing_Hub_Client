import React from "react";
import { Typography, useTheme } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import LocalizationContext from "../../context/localizationContext";
import { useContext } from "react";

export default function Error({ errors }) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationContext);

  return (
    <>
      {errors && errors.message ? (
        <Typography
          fontSize={{ xs: "10px", sm: "14px" }}
          variant={lang == "ar" ? "subtitle2" : "body1"}
          fontFamily={lang == "ar" ? "Shamel" : ""}
          sx={{ display: "flex", alignItems: "center", gap: "2px" }}
          color={theme.palette.primary.iti}>
          <ErrorOutlineIcon />
          {errors.message}
        </Typography>
      ) : (
        ""
      )}
    </>
  );
}
