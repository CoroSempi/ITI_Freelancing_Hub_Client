import React from "react";
import { Stack, useTheme, Typography } from "@mui/material";
import { errors } from "../../StaticData/Localization";
import LocalizationContext from "../../context/localizationContext";
import { useContext } from "react";

export default function TextInput({
  register,
  name,
  placeholder,
  required,
  desc,
}) {
  const theme = useTheme();

  const { lang } = useContext(LocalizationContext);
  const localization = errors;

  return (
    <Stack sx={{ marginBottom: "30px" }}>
      <Typography
        fontFamily={lang == "ar" ? "ShamelBold" : ""}
        fontWeight={550}
        fontSize={{
          xs: lang == "ar" ? "12px" : "14px",
          sm: lang == "ar" ? "14px" : "18px",
        }}
        color={theme.palette.primary.main}>
        {placeholder}{" "}
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: theme.palette.primary.sec,
          }}>{`(${required})`}</span>
      </Typography>
      <input
        {...register(name, { required: name + "Field is required" })}
        variant="name"
        placeholder={placeholder}
        style={{
          margin: "5px 0px",
          fontSize: "16px",
          background: "none",
          border: "2px solid rgba(191,39,45,0.3)",
          borderRadius: "15px",
          color: theme.palette.primary.main,
          width: "100%",
          padding: "18px",
          boxSizing: "border-box",
        }}
      />
      <Typography
        fontFamily={lang == "ar" ? "Shamel" : ""}
        sx={{
          fontSize: lang == "ar" ? "13px" : "15px",
          color: theme.palette.primary.sec,
        }}>
        {desc}
      </Typography>
    </Stack>
  );
}
