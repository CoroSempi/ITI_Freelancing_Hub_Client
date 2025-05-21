import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalizationProvider from "../../../context/localizationContext";
import { useContext } from "react";
export default function ApprochSelect({
  register,
  name,
  placeholder,
  required,
  desc,
}) {
  const theme = useTheme();

  const { lang } = useContext(LocalizationProvider);

  const Approch = ["online", "offline", "both"];

  return (
    <Stack sx={{ marginBottom: "30px", position: "relative" }}>
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

      <select
        {...register(name, { required: "Approch is required" })}
        style={{
          direction: "ltr",
          backgroundColor: theme.palette.primary.iti,
          margin: "5px 0px",
          fontSize: lang == "ar" ? "12px" : "17px",
          border: "none",
          borderRadius: "15px",
          color: "white",
          width: "100%",
          padding: "20px 20px",
          boxSizing: "border-box",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          fontFamily: lang == "ar" ? "ShamelBold" : "",
        }}>
        <option disabled selected value="">
          {lang == "en" ? "Select a Approch" : "اختر نوع التدريس"}
        </option>
        {Approch.map((platform, index) => (
          <option
            key={index}
            value={platform}
            style={{
              color: "#000",
              backgroundColor: "#fff",
              fontFamily: "Poppins",
              fontSize: "15px",
            }}>
            {platform}
          </option>
        ))}
      </select>

      <ArrowDropDownIcon
        sx={{
          color: "white",
          fontSize: "35px",
          position: "absolute",
          right: "10px",
          top: "62%",
          transform: "translateY(-50%)",
        }}
      />
      <Typography sx={{ fontSize: "15px", color: theme.palette.primary.sec }}>
        <span>{desc}</span>
      </Typography>
    </Stack>
  );
}
