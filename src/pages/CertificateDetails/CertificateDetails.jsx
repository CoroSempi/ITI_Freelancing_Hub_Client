import React, { useEffect, useState } from "react";
import { Box, Button, Chip, Stack, Typography, CircularProgress } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTheme, useMediaQuery } from "@mui/material";
import { useParams } from "react-router-dom";
import DeleteModal from "../../components/ModalDelete/ModalDelete";
import axios from "axios";

const baseUrl = "https://iti-freelancing-hub-server.vercel.app/students/certificate/";

function CertificateDetails() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [certificate, setCertificate] = useState(null);
  const { id } = useParams();
  const [open, setOpen] = useState(false);

///fetching
  async function getCertificate(token, certificateId) {
    try {
      const res = await axios.get(`${baseUrl}${certificateId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("AccessToken");

    async function fetchCertificate() {
      if (token && id) {
        const data = await getCertificate(token, id);
        setCertificate(data);
      }
    }

    fetchCertificate();
  }, [id]);

////Modal
  function handleOpenDeleteModal() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
/////loader
  if (!certificate) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100px", marginTop: "200px" }}
      >
        <CircularProgress color={theme.palette.primary.iti} />
      </Stack>
    );
  }

  return (
    <Box
      sx={{
        margin: { xs: "70px 10px", md: "90px 30px" },
        width: { xs: "90%", md: "60%" },
         padding: isMobile ? "20px" : "",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ color: theme.palette.primary.main }}
      >
        <Typography
          fontWeight={600}
          sx={{
            fontFamily: "Poppins",
            fontSize: isMobile ? "18px" : "25px",
          }}
        >
          {certificate.Company + "'s Certificate"}
        </Typography>
        <Chip
          label={certificate.verified ? "Completed" : "Pending"}
          size="small"
          sx={{
            bgcolor: certificate.verified ? "#E8F5E9" : "#E6E6E6",
            color: certificate.verified ? "#2E7D32" : "#A7A5A5",
          }}
        />
      </Stack>

      <Typography
        sx={{
          color: "#D7777B",
          fontFamily: "Poppins",
          fontSize: "15px",
          fontWeight: 600,
          mt: 1,
          cursor: "pointer",
        }}
      >
        {certificate.certificateTitle}
      </Typography>

      <Typography
        sx={{
          width: isMobile ? "100%" : "60%",
          color: "#A7A5A5",
          fontFamily: "Poppins",
          fontSize: "15px",
          fontWeight: 500,
          letterSpacing: "0.3px",
          mt: 2,
        }}
      >
        {certificate.certificateDescription}
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={4} mt={3}>
        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthIcon sx={{ color: theme.palette.primary.iti }} />
          <Typography sx={{color: theme.palette.primary.sec }}>
            <Box component="span"sx={{color: theme.palette.primary.main }} fontWeight={"bold"}>
              Start:
            </Box>{" "}
            {certificate.startDate}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthIcon sx={{ color: theme.palette.primary.iti }} />
          <Typography sx={{color: theme.palette.primary.sec }}>
            <Box component="span"  fontWeight={"bold"} sx={{color: theme.palette.primary.main }} >
               
              Completion:
            </Box>{" "}
            {certificate.endDate}
          </Typography>
        </Stack>
      </Stack>

      <Box mt={3}>
        <Typography
          fontWeight={600}
          sx={{
            color: theme.palette.primary.main ,
            fontFamily: "Poppins",
            fontSize: "15px",
   
            alignSelf: "stretch",
          }}
        >
          Comments
        </Typography>
        <Typography
          sx={{
            color: "#A7A5A5",
            fontFamily: "Poppins",
            fontSize: "12px",
          
            fontWeight: 500,
            letterSpacing: "0.24px",
            alignSelf: "stretch",
          }}
        >
          {certificate.comments || "No Comments Yet"}
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={2}
        sx={{
          my: 2,
          width: "100%",
          marginLeft: isMobile ? "10px" : "",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleOpenDeleteModal}
          fullWidth
          sx={{
            height: "40px",
            borderRadius: "15px",
            color: "#BF272D",
            border: "1px solid #BF272D",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 600,
            maxWidth: { sm: "200px" },
          }}
        >
          Delete
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: theme.palette.primary.main ,
            height: "40px",
            borderRadius: "15px",
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            maxWidth: { sm: "200px" },
            '&:hover': {
      backgroundColor: theme.palette.primary.sec, 
    }
          }}
        >
          Edit
        </Button>
      </Stack>
      {/* Use the DeleteModal with certificateId prop */}
      <DeleteModal 
        open={open} 
        handleClose={handleClose} 
        certificateId={id} 
      />
    </Box>
  );
}

export default CertificateDetails;