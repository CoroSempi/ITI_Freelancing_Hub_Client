import React, { use } from "react";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getNotifcation } from "../../redux/slices/notifcation";
import { Badge, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NotiDrawer from "../notifications/NotiDrawer";

export default function NotiCounter({ noti, setNoti }) {
  const dispatch = useDispatch();
  const notifcations = useSelector((state) => state.notifcations);
  const nav = useNavigate();
  useEffect(() => {
    dispatch(getNotifcation());
  }, []);

  return (
    <>
      <Box
        onClick={() => {
          setNoti(true);
        }}
        sx={{
          padding: 1,
          cursor: "pointer",
          display: { xs: "none", md: "block" },
        }}>
        <Badge badgeContent={notifcations.counter || "0"} color={"error"}>
          <img src="noti.svg" alt="" />
        </Badge>
      </Box>
      <Box
        onClick={() => {
          nav("/notifications");
        }}
        sx={{
          padding: 1,
          cursor: "pointer",
          display: { xs: "block", md: "none" },
        }}>
        <Badge badgeContent={notifcations.counter} color={"error"}>
          <img src="noti.svg" alt="" />
        </Badge>
      </Box>
    </>
  );
}
