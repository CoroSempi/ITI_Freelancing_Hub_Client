import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenExpiration } from "../../redux/slices/auth";
import { CircularProgress, Stack } from "@mui/material";
import User from "../../components/home/User";
import TopCards from "../../components/home/TopCards";
import Congrats from "../../components/home/Congrats";
import axios from "axios";

import AllJobs from "../../components/home/jobs/AllJobs.jsx";
import AllCertificates from "../../components/home/certificate/AllCertificates.jsx";

export default function Home() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   dispatch(tokenExpiration());
  //   const storedData = localStorage.getItem("studentData");
  //   if (storedData) {
  //     setUserData(JSON.parse(storedData));
  //   }
  // }, [dispatch]);

  useEffect(() => {
    async function getStudentData() {
      try {
        const res = await axios.get(
          "https://iti-freelancing-hub-server.vercel.app/students/data",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("AccessToken")} `,
            },
          }
        );
        setUserData(res.data);
      } catch (error) {
        console.log(error);
        nav("/auth/signIn");
      }
    }
    getStudentData();
  }, []);

  // useEffect(() => {
  //   if (!localStorage.getItem("AccessToken") && auth.token === false) {
  //     nav("/auth/signIn");
  //   }
  // }, [auth.token, nav]);

  if (!userData) return <CircularProgress color="secondary" />;

  return (
    <Stack
      spacing={6}
      sx={{
        margin: { xs: "70px 10px", md: "80px 30px" },
      }}>
      <User name={userData.fullName} avatar={userData.avatar} />
      <TopCards
        jobs={userData.jobs}
        track={userData.trackName}
        certificates={userData.certificates}
      />
      {userData.target ? <Congrats /> : ""}
      <AllJobs />
      <AllCertificates name={userData.fullName} />
    </Stack>
  );
}
