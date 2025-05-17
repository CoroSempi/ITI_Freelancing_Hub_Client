import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Stack,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalizationContext from "../../context/localizationContext";
import { chooseJobLocalization } from "../../StaticData/Localization";
import { useTheme } from "@mui/material/styles";


function ChooseJob() {
  const navigate = useNavigate();
  const theme = useTheme(); 
   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { lang } = useContext(LocalizationContext);
  const localization = chooseJobLocalization[lang];

  const [choice, setChoice] = useState("");
  const [jobType, setJobType] = useState("");

  const handleChange = (event) => {
    setJobType(event.target.value);
    setChoice(event.target.value);
  };

  function handleForm() {
    navigate(`/choosejob/${choice}`);
  }

  return (
    <Box
      sx={{
        margin: { xs: "70px 30px", md: "80px 30px" },
        direction: lang === "ar" ? "rtl" : "ltr",
      
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontFamily: lang === "en" ? "" : "ShamelBold",
          color: theme.palette.primary.main,
           marginTop:isMobile?"30px":""
        }}

      >
        {localization.addJob}
      </Typography>

      <Grid sx={{ display: "flex", gap: 1, mt: 3 }}>
        <img src="Rectangle 6.png" alt="" />
        <Typography
          variant="h6"
          fontWeight="bold"
          color="primary"
          gutterBottom
          sx={{ fontFamily: lang === "en" ? "" : "ShamelBold" }}
        >
          {localization.chooseType}
        </Typography>
      </Grid>

      <FormControl component="fieldset" sx={{ my: 2 }}>
        <RadioGroup value={jobType} onChange={handleChange}>
          {localization.types.map((type) => (
            <FormControlLabel
              key={type.id}
              value={type.id}
              control={
                <Radio
                  sx={{
                    color: "#D7777B",
                    "&.Mui-checked": {
                      color: "#D7777B",
                    },
                  }}
                />
              }
              label={
                <Typography
                color="primary"
                  sx={{
                    fontFamily: lang === "en" ? "" : "ShamelBold",
                    // color: "#000",
                  }}
                >
                  {type.label}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
      

  <Stack
  direction={{ xs: "column-reverse", sm: "row" }}
  // spacing={2}
  sx={{
    my: 2,
    width: "100%",
      gap: lang === "ar" ? "15px" : theme.spacing(2)
  }}
>
  <Button
    variant="outlined"
    fullWidth
    sx={{
      height: "40px",
      fontWeight: 600,
      borderRadius: "15px",
      color: theme.palette.primary.iti,
      border: `1px solid ${theme.palette.primary.iti}`,
      fontFamily: lang === "en" ? "" : "Shamel",
      maxWidth: { sm: "200px" }
    }}
  >
    {localization.back}
  </Button>
  <Button
    variant="contained"
    fullWidth
    sx={{
      height: "40px",
      fontWeight: 600,
      borderRadius: "15px",
      fontFamily: lang === "en" ? "" : "Shamel",
      maxWidth: { sm: "200px" }
    }}
    onClick={handleForm}
  >
    {localization.next}
  </Button>
</Stack>

      <Typography
        color="textSecondary"
        sx={{
          mt: 5,
          fontFamily: lang === "en" ? "" : "ShamelBold",
          color: theme.palette.primary.sec,
        }}
      >
        {localization.instructions}
      </Typography>

      <Box sx={{ mt: 4, width: isMobile?"100%":"60%"  }}>
        {localization.types.map((type) => (
          <Typography
            key={type.id}
            variant="body2"
            sx={{
              mb: 4,
              fontFamily: lang === "en" ? "" : "Shamel",
              color: theme.palette.primary.sec,
            }}
          >
            • <strong>{type.label}</strong>: {type.description}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default ChooseJob;
