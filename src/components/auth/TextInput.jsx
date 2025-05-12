import React from "react";
import { InputAdornment, TextField, useTheme } from "@mui/material";
import { errors } from "../../StaticData/Localization";
import LocalizationContext from "../../context/localizationContext";
import { useContext } from "react";

export default function TextInput({ register, icon, placeholder }) {
  const theme = useTheme();

  const { lang } = useContext(LocalizationContext);
  const localization = errors;

  return (
    <TextField
      {...register("email", {
        required: localization[lang].emailRequired,
        pattern: {
          value: /^\S+@\S+$/i,
          message: localization[lang].invalidEmail,
        },
      })}
      variant="standard"
      placeholder={placeholder}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <img style={{ marginRight: "10px" }} height={25} src={icon} />
          </InputAdornment>
        ),
      }}
      sx={{
        fontSize: { xs: "12px", sm: "15px" },
        background: "none",
        border: "0.1px solid #A7A5A5",
        borderRadius: "15px",
        color: theme.palette.primary.main,
        width: "90%",
        maxWidth: "450px",
        padding: { xs: "10px", sm: "15px" },
      }}
    />
  );
}
