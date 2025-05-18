import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  useTheme,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import EditHeader from "../../components/editProfile/EditHeader";
import LocalizationProvider from "../../context/localizationContext";
import { settingsLocalization } from "../../StaticData/Localization";
import ResetHeader from "../../components/resetPassword/ResetHeader";
import { useForm } from "react-hook-form";
import PassInput from "../../components/auth/PassInput";
import { changePassword } from "../../redux/slices/auth";

export default function ResetPassword({ setResetPassword, resetPassword }) {
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();
  const dispatch = useDispatch();

  const [feedback, setFeedback] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
      newPassword: "",
      repeatPassword: "",
    },
  });

  const password = watch("password");
  const newPassword = watch("newPassword");
  const repeatPassword = watch("repeatPassword");

  const onSubmit = async (data) => {
    try {
      await dispatch(
        changePassword({
          currentPassword: data.password,
          newPassword: data.newPassword,
        })
      ).unwrap();

      setFeedback({
        open: true,
        message: settingsLocalization[lang].passwordResetSuccess,
        severity: "success",
      });
    } catch (error) {
      setFeedback({
        open: true,
        message: settingsLocalization[lang].passwordResetError,
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setFeedback((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Stack
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          display: resetPassword ? "flex" : "none",
          margin: { xs: "70px 0px", md: "30px 0px" },
          width: { xs: "100%", md: "80vw" },
          minWidth: { xs: "100%", md: "400px" },
          maxWidth: { xs: "100%", md: "400px" },
          direction: lang === "ar" ? "rtl" : "ltr",
        }}>
        <ResetHeader setResetPassword={setResetPassword} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}>
          <PassInput
            name="password"
            register={register}
            placeholder={settingsLocalization[lang].currentPassword}
          />
          {errors.password && (
            <Typography
              fontFamily={lang == "ar" ? "Shamel" : ""}
              fontSize="12px"
              color="error">
              {errors.password.message}
            </Typography>
          )}

          <PassInput
            name="newPassword"
            register={register}
            placeholder={settingsLocalization[lang].newPassword}
          />
          {errors.newPassword && (
            <Typography
              fontFamily={lang == "ar" ? "Shamel" : ""}
              fontSize="12px"
              color="error">
              {errors.newPassword.message}
            </Typography>
          )}

          <PassInput
            name="repeatPassword"
            register={register}
            placeholder={settingsLocalization[lang].repeatPassword}
          />
          {errors.repeatPassword && (
            <Typography
              fontFamily={lang == "ar" ? "Shamel" : ""}
              fontSize="12px"
              color="error">
              {errors.repeatPassword.message}
            </Typography>
          )}

          <Typography
            fontSize="14px"
            fontFamily={lang === "ar" ? "Shamel" : ""}
            sx={{
              color: theme.palette.primary.sec,
              width: "90%",
              maxWidth: "450px",
              direction: lang === "en" ? "ltr" : "rtl",
            }}>
            {settingsLocalization[lang].resetPasswordDesc}
          </Typography>

          <Button
            type="submit"
            disabled={
              !password ||
              !newPassword ||
              !repeatPassword ||
              newPassword !== repeatPassword
            }
            sx={{
              fontSize: "15px",
              borderRadius: "15px",
              color: "#F6F6F6",
              backgroundColor: theme.palette.background.button,
              width: "90%",
              maxWidth: "450px",
              padding: "15px",
              fontFamily: lang === "ar" ? "ShamelBold" : "",
              fontWeight: "bold",
            }}
            variant="contained">
            {settingsLocalization[lang].submit}
          </Button>
        </form>
      </Stack>

      <Snackbar
        open={feedback.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={feedback.severity}
          sx={{ width: "100%", fontFamily: lang === "ar" ? "ShamelBold" : "" }}>
          {feedback.message}
        </Alert>
      </Snackbar>
    </>
  );
}
