import { Stack, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { seeNotifcation } from "../../redux/slices/notifcation";
import { useNavigate } from "react-router-dom";

export default function NotiItem({ noti, notiDrawer }) {
  const theme = useTheme();
  const match = noti["content"].match(/that your(.*?)has been/i);
  const dispatch = useDispatch();
  const nav = useNavigate();

  if (match && match[1]) {
    const projectName = match[1].trim();
    const highlighted = (
      <span style={{ fontWeight: "bold", color: theme.palette.primary.main }}>
        {projectName}
      </span>
    );

    const before = noti["content"].split("that your")[0] + "that your ";
    const after = noti["content"].split("has been")[1]
      ? " has been" + noti["content"].split("has been")[1]
      : "";

    return (
      <Stack
        onClick={() => {
          dispatch(seeNotifcation(noti._id));
          nav(`/`);
          notiDrawer(false);
        }}
        spacing={1}
        padding={"20px 10px"}
        sx={{
          borderBottom: "1px solid rgba(167,165,165,0.2)",
          backgroundColor: noti.seen ? "" : "rgba(215,119,123,0.1)",
          cursor: "pointer",
        }}>
        <Typography
          fontSize={18}
          fontWeight={550}
          color={theme.palette.primary.main}>
          🎉 Congratulations!
        </Typography>
        <Typography fontSize={13} color={theme.palette.primary.sec}>
          {before}
          {highlighted}
          {after}
        </Typography>
      </Stack>
    );
  }

  return null;
}
