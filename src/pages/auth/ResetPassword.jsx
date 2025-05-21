import React, { useContext } from "react";
import {
  Button,
  Grid,
  Stack,
  Typography,
  useTheme,
  CircularProgress,
} from "@mui/material";
import PassInput from "../../components/auth/PassInput";
import { useForm } from "react-hook-form";
import Error from "../../components/auth/Error";
import { resetPassword } from "../../StaticData/Localization";
import LocalizationContext from "../../context/localizationContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import PasswordDialog from "../../components/auth/PasswordDialog";

export default function ResetPassword() {
  const theme = useTheme();
  const nav = useNavigate();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const { lang } = useContext(LocalizationContext);
  const localization = resetPassword;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    nav("/auth/signin");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  const password = watch("password");
  const repeatPassword = watch("repeatPassword");

  const onSubmit = async (data) => {
    setloading(true);

    const response = await axios
      .post(
        "https://iti-freelancing-hub-server.vercel.app/students/resetPassword",
        { newPassword: data.password },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
          },
        }
      )
      .then((res) => {
        setloading(false);
        return res;
      })
      .catch((err) => {
        setloading(false);
        return err;
      });

    if (response.status === 200) {
      setOpen(true);
      setError("");
      localStorage.removeItem("AccessToken");
    } else {
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
      <Stack
        spacing={2}
        sx={{
          display: { xs: "flex", sm: "none" },
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}>
        <img width={"140px"} src="/logo.svg" alt="" />
        <Typography
          fontWeight={550}
          fontFamily={lang === "ar" ? "Shamel" : ""}
          variant={lang === "ar" ? "subtitle2" : "body2"}
          color={theme.palette.primary.sec}>
          {localization[lang].subtitle}
        </Typography>
      </Stack>

      <Typography
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
        fontWeight={550}
        fontFamily={lang === "ar" ? "ShamelBold" : ""}
        fontSize={"30px"}
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
        <PassInput
          name={"password"}
          register={register}
          placeholder={localization[lang].placeholder1}
        />
        <PassInput
          name={"repeatPassword"}
          register={register}
          placeholder={localization[lang].placeholder2}
        />

        <Typography
          fontFamily={lang === "ar" ? "Shamel" : ""}
          fontSize={{ xs: "12px", sm: "16px" }}
          sx={{
            width: "90%",
            maxWidth: "450px",
            direction: lang === "en" ? "ltr" : "rtl",
          }}>
          <a href="/auth/signin">{localization[lang].signIn}</a>
        </Typography>

        {error && (
          <Typography
            variant={lang === "ar" ? "subtitle2" : "body1"}
            color="error"
            fontSize={{ xs: "11px", sm: "14px" }}>
            {error}
          </Typography>
        )}

        <Button
          disabled={
            Object.keys(errors).length > 0 ||
            repeatPassword.length === 0 ||
            password.length === 0 ||
            loading ||
            repeatPassword !== password
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
            localization[lang].submit
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

      <Typography
        position={"fixed"}
        bottom="20px"
        fontWeight={"600"}
        fontSize={{ xs: "12px", lg: "15px" }}
        color="#D7777B">
        © 2025 ITI Freelancing Hub. All rights reserved.
      </Typography>

      <PasswordDialog open={open} handleClose={handleClose} />
    </Grid>
  );
}
