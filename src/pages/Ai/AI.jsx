import React, { useContext } from "react";
import LocalizationProvider from "../../context/localizationContext";

import { Stack } from "@mui/material";

import AiHeader from "../../components/Ai/AiHeader";
import AiRoom from "../../components/Ai/AiRoom";

export default function AI() {
  const { lang } = useContext(LocalizationProvider);
  return (
    <>
      <Stack
        justifyContent={"space-between"}
        sx={{
          margin: { xs: "70px 0px", md: "30px 0px" },
          width: { xs: "100%", md: "80vw" },
          minWidth: { xs: "100%", md: "450px" },
          maxWidth: { xs: "100%", md: "450px" },
          direction: lang === "ar" && "rtl",
          minHeight: "90vh",
        }}
        role="presentation">
        <AiHeader />
        <AiRoom />
      </Stack>
    </>
  );
}
