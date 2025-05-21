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
import LocalizationProvider from "../../context/localizationContext";
import { useContext } from "react";

const baseUrl =
  "https://iti-freelancing-hub-server.vercel.app/students/certificate/";

function CertificateDetails() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const nav = useNavigate();
  const [certificate, setCertificate] = useState(null);
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const { lang } = useContext(LocalizationProvider);

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
        sx={{ minHeight: "100px", marginTop: "200px" }}>
        <CircularProgress color={theme.palette.primary.iti} />
      </Stack>
    );
  }

  return (
    <Box
      sx={{
        margin: { xs: "60px 0px", md: "70px 0px" },
        width: { xs: "100%", md: "70%" },
        maxWidth: "100vw",
        padding: { xs: "10px", md: "20px" },
      }}>
      <Button
        variant="text"
        onClick={() => nav("/")}
        sx={{
          color: "#D7777B",
          fontWeight: "600",
          fontFamily: lang == "ar" ? "ShamelBold" : "",
        }}>
        <ArrowBackIosIcon sx={{ display: lang == "ar" ? "none" : "block" }} />{" "}
        {lang == "en" ? "Back" : "العودة"}
      </Button>
      <Stack direction="row" alignItems="center" spacing={2} marginTop={3}>
        <Typography
          fontWeight={600}
          sx={{
            fontSize: isMobile ? "18px" : "25px",
            color: theme.palette.primary.main,
          }}>
          {certificate.Company + "'s Certificate"}
        </Typography>
        <Chip
          label={certificate.verified ? "Completed" : "Pending"}
          sx={{
            width: "100px",
            fontWeight: "600",
            bgcolor: certificate.verified
              ? "rgba(68,180,13,0.2)"
              : "rgba(168,165,165,0.2)",
            color: certificate.verified ? "rgb(68,180,13)" : "rgb(168,165,165)",
            border: certificate.verified
              ? "0.2px solid rgb(68,180,13)"
              : "0.2px solid rgb(168,165,165)",
          }}
        />
      </Stack>

      <Typography
        fontWeight={600}
        sx={{
          marginTop: "10px",
          fontSize: isMobile ? "18px" : "22px",
          color: theme.palette.primary.iti,
        }}>
        {certificate.studentName}
      </Typography>

      <Typography
        sx={{
          width: isMobile ? "100%" : "60%",
          color: "#A7A5A5",
          mt: 2,
        }}>
        {certificate.certificateDescription}
      </Typography>

      {certificate.branch && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
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
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
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
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
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
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
            Proof of Certificate:{" "}
            <Box
              sx={{ color: theme.palette.primary.sec }}
              target="_blank"
              href={certificate.proofOfCertificate}
              component="a"
              fontWeight={400}>
              Certificate Drive Link
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
              fontWeight="bold">
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
              sx={{ color: theme.palette.primary.main }}>
              Completion:
            </Box>{" "}
            {certificate.endDate}
          </Typography>
        </Stack>
      </Stack>

      <Stack
        display={certificate.verified ? "none" : "flex"}
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={2}
        sx={{ my: 2, width: "100%" }}>
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
          }}>
          Delete
        </Button>

        <Button
          onClick={() => nav(`/editCertificate/${id}`)}
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
          }}>
          Edit
        </Button>
      </Stack>

      <DeleteModal open={open} handleClose={handleClose} certificateId={id} />
    </Box>
  );
}

export default CertificateDetails;
