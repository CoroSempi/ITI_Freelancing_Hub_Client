import { CircularProgress, Stack, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import NotiHeader from "../../components/notifications/NotiHeader";
import NotiItem from "../../components/notifications/NotiItem";

import { useDispatch, useSelector } from "react-redux";

import { getNotifcation } from "../../redux/slices/notifcation";
import LocalizationProvider from "../../context/localizationContext";
import { useContext } from "react";

export default function Notifications({ notiDrawer }) {
  const notifcations = useSelector((state) => state.notifcations);
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();

  useEffect(() => {
    dispatch(getNotifcation());
  }, []);
  const dispatch = useDispatch();
  if (notifcations.loading) {
    return (
      <Stack
        sx={{
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
          minWidth: { xs: "100%", md: "450px" },
        }}>
        <CircularProgress />
      </Stack>
    );
  }

  if (notifcations.error) {
    return (
      <Stack
        sx={{
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {notifcations.error}
      </Stack>
    );
  }

  return (
    <Stack
      spacing={2}
      sx={{
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        margin: { xs: "70px 0px", md: "30px 0px" },
        width: "100%",
        maxWidth: { xs: "100%", md: "450px" },
        minWidth: { xs: "100%", md: "450px" },
      }}>
      <NotiHeader />
      <Stack sx={{ width: "100%" }}>
        {notifcations.notifcation.length ? (
          notifcations.notifcation.map((noti, index) => (
            <NotiItem
              key={noti._id || index}
              noti={noti}
              notiDrawer={notiDrawer}
            />
          ))
        ) : (
          <Stack
            sx={{
              height: "80vh",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Typography
              fontFamily={lang === "ar" ? "ShamelBold" : ""}
              variant="body1"
              color={theme.palette.primary.sec}>
              {lang === "ar" ? "لا يوجد اشعارات" : "No notifications"}
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
