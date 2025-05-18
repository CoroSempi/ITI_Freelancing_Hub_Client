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
import { changeAvatar, StudentData } from "../../redux/slices/profile";
import EditHeader from "../../components/editProfile/EditHeader";
import LocalizationProvider from "../../context/localizationContext";
import { settingsLocalization } from "../../StaticData/Localization";

export default function EditProfile({ setEditProfile, editProfile }) {
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile);
  const studentData = profile.studentData;

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [feedback, setFeedback] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    dispatch(StudentData());
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (selectedImage) URL.revokeObjectURL(selectedImage);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImageFile(file);
    }
  };

  useEffect(() => {
    return () => {
      if (selectedImage) URL.revokeObjectURL(selectedImage);
    };
  }, [selectedImage]);

  const handleSubmit = async () => {
    try {
      await dispatch(changeAvatar(imageFile)).unwrap();
      await dispatch(StudentData()).unwrap();
      setImageFile(null);
      setSelectedImage(null);
      setFeedback({
        open: true,
        en: "Avatar updated successfully",
        ar: "تم تحديث الصورة بنجاح",
        severity: "success",
      });
    } catch (err) {
      setFeedback({
        open: true,
        en: "Failed to update avatar",
        ar: "فشل في تحديث الصورة",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setFeedback({ ...feedback, open: false });
  };

  return (
    <>
      <Stack
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          display: editProfile ? "flex" : "none",
          margin: { xs: "70px 0px", md: "30px 0px" },
          width: { xs: "100%", md: "80vw" },
          minWidth: { xs: "100%", md: "400px" },
          maxWidth: { xs: "100%", md: "400px" },
          direction: lang === "ar" ? "rtl" : "ltr",
        }}
        role="presentation">
        <EditHeader setEditProfile={setEditProfile} />

        <Box position="relative">
          <img
            style={{ borderRadius: "50%", margin: "auto", objectFit: "cover" }}
            src={selectedImage || studentData?.avatar || "/avatar.svg"}
            height="300px"
            width="300px"
            alt="Student Avatar"
          />

          <Box
            position="absolute"
            bottom={30}
            right={30}
            sx={{
              cursor: "pointer",
              padding: 1,
              backgroundColor: "#D7777B",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: `4px solid ${theme.palette.background.default}`,
            }}>
            <label htmlFor="avatar-upload" style={{ cursor: "pointer" }}>
              <input
                id="avatar-upload"
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <img height="24px" src="pen.svg" alt="Edit Avatar" />
            </label>
          </Box>
        </Box>

        <Typography
          fontSize="14px"
          fontFamily={lang === "ar" ? "Shamel" : ""}
          sx={{
            color: theme.palette.primary.sec,
            width: "90%",
            maxWidth: "450px",
            direction: lang === "en" ? "ltr" : "rtl",
          }}>
          {settingsLocalization[lang].editProfileDesc}
        </Typography>

        <Button
          onClick={handleSubmit}
          disabled={!selectedImage || !imageFile || profile.loading}
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
          {profile.loading ? (
            <CircularProgress size={22} sx={{ color: "#F6F6F6" }} />
          ) : (
            settingsLocalization[lang].submit
          )}
        </Button>
      </Stack>

      <Snackbar
        open={feedback.open}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={feedback.severity}
          sx={{ width: "100%", fontFamily: lang === "ar" ? "ShamelBold" : "" }}>
          {feedback[lang]}
        </Alert>
      </Snackbar>
    </>
  );
}
