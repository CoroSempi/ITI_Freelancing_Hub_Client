import React, { useContext } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import LocalizationContext from "../../context/localizationContext";

export default function CostInput({
  register,
  name,
  placeholder,
  required,
  desc,
  value,
  onChange,
}) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationContext);

  return (
    <Stack
      sx={{
        width: { xs: "48%", md: "40%" },
        position: "relative",
      }}>
      <Stack
        sx={{ gap: lang == "ar" ? 1 : 0 }}
        alignItems={"center"}
        direction={"row"}
        spacing={1}>
        <Typography
          fontWeight={550}
          fontFamily={lang == "ar" ? "ShamelBold" : ""}
          fontSize={{
            xs: lang == "ar" ? "12px" : "14px",
            sm: lang == "ar" ? "14px" : "18px",
          }}
          color={theme.palette.primary.main}>
          {placeholder}{" "}
        </Typography>
        <Typography
          sx={{
            fontFamily: lang == "ar" ? "Shamel" : "" ,
            display: { xs: "none", md: "block" },
            fontSize: "13px",
            fontWeight: 500,
            color: theme.palette.primary.sec,
          }}>
          ({required})
        </Typography>
      </Stack>

      <input
        onChange={onChange}
        value={value}
        min={0}
        disabled={required === "Auto Generated"}
        {...register(name, { required: "Cost is required" })}
        type="number"
        placeholder={placeholder}
        style={{
          direction: "ltr",
          margin: "5px 0px",
          fontSize: "17px",
          background: "none",
          border: "2px solid rgba(191,39,45,0.3)",
          borderRadius: "15px",
          color: theme.palette.primary.main,
          width: "100%",
          padding: "18px",
          boxSizing: "border-box",
        }}
      />
      <img
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        height={placeholder.includes("USD") ? 20 : 13}
        src={placeholder.includes("USD") ? "/usd.svg" : "/egp.svg"}
        alt=""
      />
      <Typography sx={{ fontSize: "15px", color: theme.palette.primary.sec }}>
        <span>
          {desc}
          <span style={{ opacity: 0 }}>*</span>
        </span>
      </Typography>
    </Stack>
  );
}
