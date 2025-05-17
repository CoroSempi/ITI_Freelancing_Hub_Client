import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocalizationContext from "../../context/localizationContext";
import { learnMoreLocalization } from "../../StaticData/Localization";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TwoPartContainer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const nav = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const { lang } = useContext(LocalizationContext);

  const localization = learnMoreLocalization;

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <Box sx={{ marginRight: "30px", marginLeft: "30px", height: "100vh" }}>
      {/* <Button
        variant="text"
        onClick={() => nav(-1)}
        sx={{ padding: "30px", color: "#D7777B", fontWeight: "600" }}
      >
        <ArrowBackIosIcon /> {localization[lang].back}
      </Button> */}

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{
          paddingTop: isMobile ? "10px" : "60px",
          paddingLeft: isMobile ? "" : "30px",
          direction: lang === "ar" ? "rtl" : "ltr",
        }}
      >
        <Grid size={{ sm: 12, md: 6 }}>
          <Button
            variant="text"
            onClick={() => nav(-1)}
            sx={{
              marginTop: isMobile ? "40px" : "-10px",
              color: "#D7777B",
              fontWeight: "600",
            }}
          >
            <ArrowBackIosIcon
              sx={{
                transform: lang === "ar" ? "rotate(180deg)" : "none",
              }}
            />{" "}
            {localization[lang].back}
          </Button>

          <div style={{ marginTop: isMobile ? "30px" : "50px" }}>
            <Typography
              fontFamily={lang === "en" ? "" : "ShamelBold"}
              sx={{
                color: "#BF272D",
                fontSize: { xs: "20px", md: "25px" },
                fontWeight: 600,
                letterSpacing: "0.5px",
                mb: 2,
              }}
            >
              {localization[lang].title}
            </Typography>

            <Typography
              fontFamily={lang === "en" ? "" : "Shamel"}
              sx={{
                color: "#A7A5A5",
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 500,
                letterSpacing: "0.4px",
                mb: 4,
              }}
            >
              {localization[lang].subtitle}
            </Typography>
          </div>
          <div>
            <Typography
              fontFamily={lang === "en" ? "" : "ShamelBold"}
              sx={{
                color: "#BF272D",
                fontSize: { xs: "20px", md: "25px" },
                fontWeight: 600,
                letterSpacing: "0.5px",
                mb: 2,
              }}
            >
              {localization[lang].howToUse}
            </Typography>

            <Box
              sx={{
                width: "100%",
                mx: "auto",
                boxShadow: "0px 1px 10px 0px rgba(46, 46, 46, 0.15)",
                borderRadius: "10px",
                background: "#F6F6F6",
                mb: 4,
              }}
            >
              <Box
                sx={{ p: { xs: 3, md: 4 } }}
                backgroundColor={theme.palette.background.card}
              >
                <Typography
                  fontFamily={lang === "en" ? "" : "ShamelBold"}
                  sx={{
                    color: "#BF272D",
                    fontSize: { xs: "18px", md: "20px" },
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {localization[lang].slides[activeSlide].title}
                </Typography>

                <Box
                  component="ul"
                  sx={{ pl: 2, listStyle: "disc" }}
                  fontFamily={lang === "en" ? "" : "Shamel"}
                >
                  {localization[lang].slides[activeSlide].content.map(
                    (item, index) => (
                      <Box
                        component="li"
                        key={index}
                        sx={{
                          color: "#A7A5A5",
                          fontSize: { xs: "16px", md: "18px" },
                          fontWeight: 500,
                          letterSpacing: "0.36px",
                          mb: 1,
                        }}
                      >
                        {item}
                      </Box>
                    )
                  )}
                </Box>
              </Box>

              <Box
                sx={{ display: "flex", justifyContent: "center", pb: 2 }}
                backgroundColor={theme.palette.background.card}
              >
                {localization[lang].slides.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => goToSlide(index)}
                    sx={{
                      width: "10px",
                      height: "10px",
                      mx: 0.5,
                      borderRadius: "50%",
                      bgcolor: activeSlide === index ? "#BF272D" : "#D3D3D3",
                      cursor: "pointer",
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </Box>
            </Box>
          </div>
        </Grid>

        <Grid size={{ sm: 12, md: 6 }}>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "start",
              display: isMobile ? "none" : "flex",
            }}
          >
            <img src="/Group 439.svg" alt="Background shape" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
