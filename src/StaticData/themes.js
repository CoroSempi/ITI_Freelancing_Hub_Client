import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e2e2e",
      sec: "#A7A5A5",
      iti: "#BF272D",
    },
    background: {
      default: "#f6f6f6",
      button: "#2E2E2E",
      card: "#FFFFFF",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F6F6F6",
      sec: "#A7A5A5",
      iti: "#BF272D",
    },
    background: {
      default: "#2e2e2e",
      button: "#BF272D",
      card: "#212121",
    },
  },
});
