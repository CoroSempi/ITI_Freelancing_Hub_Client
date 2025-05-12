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
import PassInput from "../../components/auth/PassInput";
import { useForm } from "react-hook-form";
import Error from "../../components/auth/Error";
import { signInLocalization } from "../../StaticData/Localization";
import LocalizationContext from "../../context/localizationContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import TopSlogan from "../../components/auth/TopSlogan";

export default function SignIn() {
  const theme = useTheme();
  const nav = useNavigate();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const { lang } = useContext(LocalizationContext);
  const localization = signInLocalization;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const email = watch("email");
  const password = watch("password");

  const onSubmit = async (data) => {
    setloading(true);
    const response = await axios
      .post(
        "https://iti-freelancing-hub-server.vercel.app/students/signin",
        data
      )
      .then((res) => {
        setloading(false);
        return res.data;
      });
    if (response.message) {
      setError(response.message);
    } else {
      localStorage.setItem("AccessToken", response.AccessToken);
      localStorage.setItem("studentData", JSON.stringify(response.studentData));
      nav("/");
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

      <Stack
        sx={{
          textAlign: "center",
          display: {
            xs: "none",
            sm: "flex",
          },
        }}>
        <Typography
          fontFamily={lang === "ar" ? "ShamelBold" : ""}
          fontSize={{
            sm: lang === "ar" ? "30px" : "50px",
          }}
          fontWeight={550}
          color={theme.palette.primary.main}>
          {localization[lang].title}
        </Typography>
        <Typography
          fontFamily={lang === "ar" ? "Shamel" : ""}
          variant={lang === "ar" ? "subtitle2" : "body2"}
          color={theme.palette.primary.sec}>
          {localization[lang].subtitle}
        </Typography>
      </Stack>

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
        <PassInput
          name={"password"}
          register={register}
          placeholder={localization[lang].fields.password.label}
        />

        <Typography
          fontFamily={lang === "ar" ? "Shamel" : ""}
          fontSize={{ xs: "12px", sm: "16px" }}
          sx={{
            width: "90%",
            maxWidth: "450px",
            direction: lang === "en" ? "ltr" : "rtl",
          }}>
          <a href="./forgetPassword">{localization[lang].forget}</a>
        </Typography>

        {error && (
          <Typography
            fontFamily={lang === "ar" ? "Shamel" : ""}
            variant={lang === "ar" ? "subtitle2" : "body1"}
            color="error"
            fontSize={{ xs: "11px", sm: "14px" }}>
            {lang == "ar"
              ? "البريد الألكتروني او كلمة المرور غير صحيحة"
              : error}
          </Typography>
        )}

        <Button
          disabled={
            Object.keys(errors).length > 0 ||
            email.length === 0 ||
            password.length === 0 ||
            loading
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
            localization[lang].title
          )}
        </Button>

        <Stack
          sx={{
            width: "90%",
            maxWidth: "450px",
            direction: lang === "en" ? "ltr" : "rtl",
          }}
          spacing={1}>
          <Error errors={errors.email} />
          <Error errors={errors.password} />
        </Stack>
      </form>

      <Stack
        fontFamily={lang === "ar" ? "Shamel" : ""}
        sx={{
          width: "90%",
          maxWidth: "450px",
          direction: lang === "en" ? "ltr" : "rtl",
        }}
        spacing={2}>
        <Typography
          fontSize={{
            xs: lang === "ar" ? "11px" : "13px",
            sm: "16px",
          }}
          fontFamily={"inherit"}
          color={theme.palette.primary.sec}>
          {localization[lang].notice}
        </Typography>
        <Typography
          fontSize={{
            xs: lang === "ar" ? "11px" : "13px",
            sm: "16px",
          }}
          fontFamily={"inherit"}
          color={theme.palette.primary.sec}>
          {localization[lang].learnMore.text}{" "}
          <a href="/learnMore">{localization[lang].learnMore.linkText}</a>
        </Typography>
      </Stack>

      <Typography
        position={"fixed"}
        bottom="20px"
        fontWeight={"600"}
        fontSize={{ xs: "12px", lg: "15px" }}
        color="#D7777B">
        © 2025 ITI Freelancing Hub. All rights reserved.
      </Typography>
    </Grid>
  );
}
