import React, { useContext, useState, useRef } from "react";
import {
  Button,
  Grid,
  Stack,
  Typography,
  useTheme,
  CircularProgress,
  Box,
} from "@mui/material";
import { verifyCodyLocalization } from "../../StaticData/Localization";
import LocalizationContext from "../../context/localizationContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import TopSlogan from "../../components/auth/TopSlogan";

export default function VerifyCode() {
  const theme = useTheme();
  const nav = useNavigate();
  const { lang } = useContext(LocalizationContext);
  const localization = verifyCodyLocalization;
  const { email } = useParams();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [otp, setOtp] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [resend, setResend] = useState("");

  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    if (!value) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (newCode.every((digit) => digit !== "")) {
      const joined = newCode.join("");
      setOtp(joined);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    setloading(true);
    try {
      const response = await axios.post(
        "https://iti-freelancing-hub-server.vercel.app/students/verifyCode",
        { email, code: otp }
      );
      if (response.status === 200) {
        console.log(response);
        localStorage.setItem("AccessToken", response.data.AccessToken);
        nav("/auth/resetPassword");
      }
    } catch (err) {
      setError(lang === "ar" ? "فشل التحقق" : "Verification failed");
      setOtp("");
      setCode(["", "", "", "", "", ""]);
    } finally {
      setloading(false);
    }
  };

  const handleResend = async () => {
    setloading(true);
    try {
      await axios.post(
        "https://iti-freelancing-hub-server.vercel.app/students/forgetPassword",
        { email }
      );
      setError("");
      setResend(
        lang === "ar"
          ? "تم إعادة الإرسال بنجاح"
          : "Code has been resent successfully"
      );
    } catch (err) {
      setError(
        lang === "ar" ? "فشل في إعادة الإرسال" : "Failed to resend code"
      );
    } finally {
      setloading(false);
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
          sm: lang === "ar" ? "20px" : "35px",
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

      {/* 6-digit input fields */}
      <Stack
        sx={{ width: "90%", maxWidth: "450px", boxSizing: "border-box" }}
        direction="row"
        justifyContent="space-around">
        {code.map((digit, index) => (
          <Box
            key={index}
            height={{ xs: "50px", sm: "60px" }}
            width={{ xs: "50px", sm: "60px" }}>
            <input
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(ref) => (inputs.current[index] = ref)} // Assign input refs
              maxLength={1}
              style={{
                color: theme.palette.primary.sec,
                background: "none",
                width: "100%",
                height: "100%",
                textAlign: "center",
                fontSize: "24px",
                border: "1px solid #D7777B",
                borderRadius: "15px",
                outline: "none",
                direction: "ltr",
              }}
            />
          </Box>
        ))}
      </Stack>

      {/* Optional note below input */}
      <Typography
        sx={{
          width: "90%",
          maxWidth: "450px",
          direction: lang === "en" ? "ltr" : "rtl",
        }}
        fontFamily={lang === "ar" ? "Shamel" : ""}
        fontSize={{
          xs: lang === "ar" ? "11px" : "13px",
          sm: "16px",
        }}
        color={theme.palette.primary.sec}>
        {localization[lang].notice}
      </Typography>

      {/* Error display */}
      {error && (
        <Typography
          fontFamily={lang === "ar" ? "Shamel" : ""}
          color="error"
          fontSize="14px">
          {error}
        </Typography>
      )}

      {resend && (
        <Typography
          fontFamily={lang === "ar" ? "Shamel" : ""}
          color="success"
          fontSize="14px">
          {resend}
        </Typography>
      )}

      {/* Submit and Resend Buttons */}
      <Stack spacing={1} sx={{ width: "90%", maxWidth: "450px" }}>
        <Button
          disabled={loading || code.some((digit) => digit === "")}
          onClick={handleSubmit}
          sx={{
            fontSize: { xs: "12px", sm: "15px" },
            borderRadius: "15px",
            color: "#F6F6F6",
            backgroundColor: theme.palette.background.button,
            width: "100%",
            padding: "15px",
            fontFamily: lang === "ar" ? "ShamelBold" : "",
            fontWeight: "bold",
          }}
          variant="contained">
          {loading ? (
            <CircularProgress size={22} sx={{ color: "#F6F6F6" }} />
          ) : (
            localization[lang].submit
          )}
        </Button>

        <Button
          onClick={handleResend}
          sx={{
            fontSize: { xs: "12px", sm: "15px" },
            borderRadius: "15px",
            color: theme.palette.primary.main,
            background: "none",
            width: "100%",
            padding: "15px",
            fontFamily: lang === "ar" ? "ShamelBold" : "",
            fontWeight: "bold",
            boxShadow: "none",
            border: "1px solid #A7A5A5",
          }}
          variant="contained">
          {loading ? (
            <CircularProgress size={22} sx={{ color: "#F6F6F6" }} />
          ) : (
            localization[lang].resend
          )}
        </Button>
      </Stack>

      {/* Back to sign-in link */}
      <Typography
        fontFamily={lang === "ar" ? "Shamel" : ""}
        fontSize={{ xs: "12px", sm: "16px" }}
        sx={{
          width: "90%",
          maxWidth: "450px",
          direction: lang === "en" ? "ltr" : "rtl",
        }}>
        <a href="/auth/signIn">{localization[lang].signIn}</a>
      </Typography>

      {/* Footer */}
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
