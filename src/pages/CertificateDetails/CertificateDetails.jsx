import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteModal from "../../components/ModalDelete/ModalDelete";
import axios from "axios";

const baseUrl =
  "https://iti-freelancing-hub-server.vercel.app/students/certificate/";

function CertificateDetails() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const nav = useNavigate();
  const [certificate, setCertificate] = useState(null);
  const { id } = useParams();
  const [open, setOpen] = useState(false);

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

  function handleOpenDeleteModal() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
        margin: { xs: "80px 30px", md: "90px 30px" },
        width: { xs: "90%", md: "60%" },
      }}
    >
      <Button
        variant="text"
        onClick={() => nav("/")}
        sx={{
          marginTop: isMobile ? "40px" : "-10px",
          color: "#D7777B",
          fontWeight: "600",
        }}
      >
        <ArrowBackIosIcon /> Back
      </Button>
      <Stack direction="row" alignItems="center" spacing={2} marginTop={3}>
        <Typography
          fontWeight={600}
          sx={{
            fontSize: isMobile ? "18px" : "25px",
            color: theme.palette.primary.main,
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
        fontWeight={600}
        sx={{
          marginTop: "10px",
          fontSize: isMobile ? "18px" : "22px",
          color: theme.palette.primary.iti,
        }}
      >
        {certificate.studentName}
      </Typography>

      <Typography
        sx={{
          width: isMobile ? "100%" : "60%",
          color: "#A7A5A5",
          mt: 2,
        }}
      >
        {certificate.certificateDescription}
      </Typography>

      {certificate.branch && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Branch:{" "}
            <Box component="span" fontWeight={400}>
              {certificate.branch}
            </Box>
          </Typography>
        </Box>
      )}

      {certificate.Company && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Company:{" "}
            <Box component="span" fontWeight={400}>
              {certificate.Company}
            </Box>
          </Typography>
        </Box>
      )}

      {certificate.approach && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Approach:{" "}
            <Box component="span" fontWeight={400}>
              {certificate.approach}
            </Box>
          </Typography>
        </Box>
      )}

      {certificate.proofOfCertificate && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Proof of Certificate:{" "}
            <Box component="span" fontWeight={400}>
              {certificate.proofOfCertificate}
            </Box>
          </Typography>
        </Box>
      )}

      <Stack direction={{ xs: "column", sm: "row" }} spacing={4} mt={3}>
        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthIcon sx={{ color: theme.palette.primary.iti }} />
          <Typography sx={{ color: theme.palette.primary.sec }}>
            <Box
              component="span"
              sx={{ color: theme.palette.primary.main }}
              fontWeight="bold"
            >
              Start:
            </Box>{" "}
            {certificate.startDate}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthIcon sx={{ color: theme.palette.primary.iti }} />
          <Typography sx={{ color: theme.palette.primary.sec }}>
            <Box
              component="span"
              fontWeight="bold"
              sx={{ color: theme.palette.primary.main }}
            >
              Completion:
            </Box>{" "}
            {certificate.endDate}
          </Typography>
        </Stack>
      </Stack>

      <Box mt={3}>
        <Typography fontWeight={600} sx={{ color: theme.palette.primary.main }}>
          Comments
        </Typography>
        <Typography sx={{ color: "#A7A5A5", fontSize: "12px" }}>
          {certificate.comments || "No Comments Yet"}
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={2}
        sx={{ my: 2, width: "100%" }}
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
            backgroundColor: theme.palette.primary.main,
            height: "40px",
            borderRadius: "15px",
            fontWeight: 600,
            maxWidth: { sm: "200px" },
            "&:hover": {
              backgroundColor: theme.palette.primary.sec,
            },
          }}
        >
          Edit
        </Button>
      </Stack>

      <DeleteModal open={open} handleClose={handleClose} certificateId={id} />
    </Box>
  );
}

export default CertificateDetails;
