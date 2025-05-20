import React, { useContext } from "react";
import {
  Button,
  Grid,
  Stack,
  Typography,
  useTheme,
  CircularProgress,
} from "@mui/material";
import TextInput from "../../components/auth/TextInput";
import { useForm } from "react-hook-form";
import Error from "../../components/auth/Error";
import { forgetPasswordLocalization } from "../../StaticData/Localization";
import LocalizationContext from "../../context/localizationContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import TopSlogan from "../../components/auth/TopSlogan";

export default function ForgetPassword() {
  const theme = useTheme();
  const nav = useNavigate();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const { lang } = useContext(LocalizationContext);
  const localization = forgetPasswordLocalization;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  const email = watch("email");

  
  const onSubmit = async (data) => {
    setloading(true);
    const response = await axios
      .post(
        "https://iti-freelancing-hub-server.vercel.app/students/forgetPassword",
        data
      )
      .then((res) => {
        setloading(false);
        return res;
      })
      .catch((err) => {
        setloading(false);
        return err;
      });
    if (response.status == 200) {
      nav(`/auth/verifyCode/${email}`);
    } else {
      console.log(response.response);
      setError(response.response.data.message);
    }
  };

  return (
    <Grid
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        height: "100vh",
      }}
      size={{ xs: 12, lg: 5 }}>
      <TopSlogan
        text={localization[lang].subtitle}
        color={theme.palette.primary.sec}
        lang={lang}
      />
      <Typography
        fontSize={{
          sm: lang === "ar" ? "20px" : "40px",
        }}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
        fontWeight={550}
        fontFamily={lang === "ar" ? "ShamelBold" : ""}
        variant={lang === "ar" ? "h5" : "h4"}
        color={theme.palette.primary.main}>
        {localization[lang].title}
      </Typography>

      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          register={register}
          icon={"/email.svg"}
          placeholder={localization[lang].fields.email.label}
        />
        <Typography
          fontSize={{
            xs: lang === "ar" ? "11px" : "13px",
            sm: "16px",
          }}
          sx={{
            width: "90%",
            maxWidth: "450px",
            direction: lang === "en" ? "ltr" : "rtl",
          }}
          fontFamily={lang === "ar" ? "Shamel" : ""}
          color={theme.palette.primary.sec}>
          {localization[lang].notice}
        </Typography>

        {error && (
          <Typography
            fontFamily={lang === "ar" ? "Shamel" : ""}
            variant={lang === "ar" ? "subtitle2" : "body1"}
            color="error"
            fontSize={{ xs: "11px", sm: "14px" }}>
            {lang == "ar" ? "البريد الألكتروني غير صحيح" : error}
          </Typography>
        )}

        <Stack
          sx={{
            width: "90%",
            maxWidth: "450px",
            direction: lang === "en" ? "ltr" : "rtl",
          }}
          spacing={1}>
          <Error errors={errors.email} />
        </Stack>

        <Button
          disabled={
            Object.keys(errors).length > 0 || email.length === 0 || loading
          }
          sx={{
            fontSize: { xs: "12px", sm: "15px" },
            borderRadius: "15px",
            color: "#F6F6F6",
            backgroundColor: theme.palette.background.button,
            width: "90%",
            maxWidth: "450px",
            padding: "15px",
            fontFamily: lang === "ar" ? "ShamelBold" : "",
            fontWeight: "bold",
          }}
          type="submit"
          variant="contained">
          {loading ? (
            <CircularProgress size={22} sx={{ color: "#F6F6F6" }} />
          ) : (
            localization[lang].button
          )}
        </Button>
      </form>

      <Typography
        fontSize={{ xs: "12px", sm: "16px" }}
        fontFamily={lang === "ar" ? "Shamel" : ""}
        sx={{
          width: "90%",
          maxWidth: "450px",
          direction: lang === "en" ? "ltr" : "rtl",
        }}>
        <a href="./signIn">{localization[lang].signIn}</a>
      </Typography>

      <Typography
        position={"fixed"}
        bottom="20px"
        fontWeight={"600"}
        fontSize={{ xs: "14px", lg: "15px" }}
        color="#D7777B">
        © 2025 ITI Freelancing Hub. All rights reserved.
      </Typography>
    </Grid>
  );
}
