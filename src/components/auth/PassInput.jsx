import React, { useState } from "react";
import { IconButton, InputAdornment, TextField, useTheme } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { errors } from "../../StaticData/Localization";
import LocalizationContext from "../../context/localizationContext";
import { useContext } from "react";

export default function PassInput({ register, placeholder, name }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const theme = useTheme();
  const { lang } = useContext(LocalizationContext);
  const localization = errors;

  return (
    <TextField
      {...register(name, {
        required: localization[lang].passwordRequired,
        minLength: {
          value: 8,
          message: localization[lang].passwordMinLength,
        },
      })}
      type={showPassword ? "text" : "password"}
      variant="standard"
      placeholder={placeholder}
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <img height={35} src="/key.svg" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>
              {showPassword ? (
                <VisibilityOff />
              ) : (
                <Visibility htmlColor={theme.palette.primary.sec} />
              )}
            </IconButton>
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
