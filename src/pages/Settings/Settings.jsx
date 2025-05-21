import React, { useContext, useEffect } from "react";
import LocalizationProvider from "../../context/localizationContext";
import General from "../../components/settings/General";
import { Box, Divider } from "@mui/material";
import SettHeader from "../../components/settings/SettHeader";
import Account from "../../components/settings/Account";
import Support from "../../components/settings/Support";
import EditProfile from "../editProfile/EditProfile";
import { useState } from "react";
import Chats from "../Chats/Chats";
import ResetPassword from "../ResetPassword/ResetPassword";

export default function Settings() {
  const { lang } = useContext(LocalizationProvider);
  const [editProfile, setEditProfile] = useState(false);
  const [chats, setChats] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  useEffect(() => {
    setEditProfile(false);
    setChats(false);
  }, []);

  return (
    <>
      <Box
        sx={{
          display: editProfile || chats || resetPassword ? "none" : "block",
          margin: { xs: "70px 0px", md: "30px 0px" },
          width: { xs: "100%", md: "80vw" },
          minWidth: { xs: "100%", md: "400px" },
          maxWidth: { xs: "100%", md: "400px" },
          direction: lang === "ar" && "rtl",
        }}
        role="presentation">
        <SettHeader />
        <General />
        <Divider />
        <Account
          setEditProfile={setEditProfile}
          setResetPassword={setResetPassword}
        />
        <Divider />
        <Support setChats={setChats} />
      </Box>
      <EditProfile setEditProfile={setEditProfile} editProfile={editProfile} />
      <Chats setChats={setChats} chats={chats} />
      <ResetPassword
        setResetPassword={setResetPassword}
        resetPassword={resetPassword}
      />
    </>
  );
}
