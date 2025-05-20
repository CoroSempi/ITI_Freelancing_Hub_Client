import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function ContactSelect({
  register,
  name,
  placeholder,
  required,
  desc,
}) {
  const theme = useTheme();

  const Contacts = [
    "LinkedIn",
    "WhatsApp",
    "Email",
    "In-person Meeting",
    "Friend or Family Referral",
    "ITI Community",
    "University/College Network",
    "Facebook Groups",
    "Telegram Groups",
    "Freelancing Events or Meetups",
    "Online Forums (e.g. Reddit, Quora)",
    "Previous Clients",
    "Others",
  ];

  return (
    <Stack sx={{ marginBottom: "30px", position: "relative" }}>
      <Typography
        fontWeight={550}
        fontSize={{ xs: "14px", sm: "18px" }}
        color={theme.palette.primary.main}>
        {placeholder}{" "}
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: theme.palette.primary.sec,
          }}>
          ({required})
        </span>
      </Typography>

      <select
        {...register(name, { required: "Platform is required" })}
        style={{
          backgroundColor: theme.palette.primary.iti,
          margin: "5px 0px",
          fontSize: "17px",
          border: "none",
          borderRadius: "15px",
          color: "white",
          width: "100%",
          padding: "20px 20px",
          boxSizing: "border-box",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
        }}>
        <option disabled selected value="">
          Select a platform
        </option>
        {Contacts.map((platform, index) => (
          <option
            key={index}
            value={platform}
            style={{
              color: "#000",
              backgroundColor: "#fff",
              maxHeight: "200px",
              overflowY: "auto",
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
