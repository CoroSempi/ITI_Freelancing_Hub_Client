import React, { useContext, useState } from "react";
import "./App.css";
import { Box, Stack, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./StaticData/themes";
import { Outlet, useLocation } from "react-router";
import Header from "./components/layout/Header";
import LocalizationProvider from "./context/localizationContext";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Footer from "./components/layout/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem("selectedLang");
    if (stored) {
      return stored;
    } else {
      return "en";
    }
  });
  const handleToggle = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  const handleToggleLang = (selectedLang) => {
    console.log(selectedLang);
    setLang(selectedLang);
    localStorage.setItem("selectedLang", selectedLang);
  };

  const location = useLocation();

  return (
    <Provider store={store}>
      <LocalizationProvider value={{ lang, handleToggleLang, handleToggle }}>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <Box
            className="mainBox"
            sx={{ backgroundColor: "background.default" }}>
            {!location.pathname.includes("auth") &&
              !location.pathname.includes("notFound") && (
                <Header handleToggle={handleToggle} darkMode={darkMode} />
              )}

            <Stack
              sx={{
                marginTop: "-20px",
                minHeight: "100vh",
                overflow: "auto",
              }}>
              <Outlet />
            </Stack>

            {!location.pathname.includes("auth") &&
              !location.pathname.includes("notFound") && (
                <Footer handleToggle={handleToggle} darkMode={darkMode} />
              )}
          </Box>
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
