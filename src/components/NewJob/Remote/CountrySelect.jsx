import React, { useEffect, useState } from "react";
import { Stack, Typography, useTheme, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { countries as fetchCountries } from "../../../redux/slices/platform";
import { useContext } from "react";
import LocalizationProvider from "../../../context/localizationContext";

export default function CountrySelect({
  register,
  name,
  placeholder,
  required,
  desc,
  watch,
}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [selectedFlag, setSelectedFlag] = useState("");
  const { lang } = useContext(LocalizationProvider);
  const platform = useSelector((state) => state.platform);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const selectedCountry = watch(name);

  useEffect(() => {
    const country = platform.countries.find((c) => c.name === selectedCountry);
    setSelectedFlag(country?.flag || "");
  }, [selectedCountry, platform.countries]);

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
          }}>
          ({required})
        </span>
      </Typography>

      <Box position="relative">
        <select
          {...register(name, { required: "Job title is required" })}
          style={{
            backgroundColor: theme.palette.primary.iti,
            margin: "5px 0px",
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
            fontSize: lang == "ar" ? "12px" : "17px",
            direction: "ltr",
          }}>
          <option disabled selected value="">
            {lang == "ar" ? "اختر الدولة" : "Select a country"}
          </option>
          {platform.countries.map((country, index) => (
            <option
              key={index}
              value={country.name}
              style={{
                color: "#000",
                backgroundColor: "#fff",
                fontFamily: "Poppins",
                fontSize: "15px",
              }}>
              {country.name}
            </option>
          ))}
        </select>

        <ArrowDropDownIcon
          sx={{
            color: "white",
            fontSize: "35px",
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        />

        {selectedFlag && (
          <img
            style={{
              border: "1px solid white",
              color: "white",
              fontSize: "35px",
              position: "absolute",
              left: "100px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
            src={selectedFlag}
            alt="flag"
            width={24}
            height={16}
          />
        )}
      </Box>

      <Typography sx={{ fontSize: "15px", color: theme.palette.primary.sec }}>
        <span>{desc}</span>
      </Typography>
    </Stack>
  );
}
