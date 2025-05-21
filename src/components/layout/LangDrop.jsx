import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ListItemText from "@mui/material/ListItemText";
import LanguageIcon from "@mui/icons-material/Language";
import LocalizationContext from "../../context/localizationContext";
import { useTheme } from "@mui/material";

export default function LangDrop() {
  const { lang, handleToggleLang } = useContext(LocalizationContext);
  const [droplang, setLang] = useState(lang == "en" ? "en" : "ar");
  const theme = useTheme();
  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    handleToggleLang(selectedLang);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}>
      <LanguageIcon htmlColor={theme.palette.primary.sec} />

      <Select
        sx={{ height: "50px", color: theme.palette.primary.sec }}
        id="language-select"
        value={droplang}
        onChange={handleChange}
        displayEmpty
        MenuProps={{ PaperProps: { style: { zIndex: 1301 } } }}>
        <MenuItem value="en">
          <ListItemText primary="English" />
        </MenuItem>
        <MenuItem value="ar">
          <ListItemText primary="العربية" />
        </MenuItem>
      </Select>
    </Box>
  );
}
