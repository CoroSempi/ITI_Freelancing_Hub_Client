import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CircularProgress, Stack } from "@mui/material";
import User from "../../components/Home/User";
import TopCards from "../../components/Home/TopCards";
import Congrats from "../../components/Home/Congrats";
import AllJobs from "../../components/Home/jobs/AllJobs.jsx";
import AllCertificates from "../../components/Home/certificate/AllCertificates.jsx";
import NotiCounter from "../../components/Home/notiCounter.jsx";
import NotiDrawer from "../../components/notifications/NotiDrawer.jsx";
import { StudentData } from "../../redux/slices/profile.js";

export default function Home() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [noti, setNoti] = useState(false);

  useEffect(() => {
    dispatch(StudentData())
      .unwrap()
      .catch(() => {
        nav("/auth/signIn");
      });
  }, [dispatch, profile.avatarState]);

  if (!profile.studentData || profile.loading) {
    return (
      <Stack
        sx={{ height: "80vh" }}
        justifyContent="center"
        alignItems="center">
        <CircularProgress color="secondary" />
      </Stack>
    );
  }

  return (
    <Stack
      spacing={6}
      sx={{
        margin: { xs: "70px 10px", md: "80px 30px" },
      }}>
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}>
        <User
          name={profile.studentData.fullName}
          avatar={profile.studentData.avatar}
        />
        <NotiCounter noti={noti} setNoti={setNoti} />
      </Stack>
      <TopCards
        jobs={profile.studentData.jobs}
        track={profile.studentData.trackName}
        certificates={profile.studentData.certificates}
      />
      {profile.studentData.target ? <Congrats /> : ""}
      <AllJobs />
      <AllCertificates name={profile.studentData.fullName} />
      <NotiDrawer open={noti} notiDrawer={setNoti} />
    </Stack>
  );
}
