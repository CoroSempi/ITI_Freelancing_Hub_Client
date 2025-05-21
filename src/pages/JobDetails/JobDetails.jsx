import React, { useEffect, useState } from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import DeleteModal from "../../components/ModalDelete/ModalDelete";

function JobDetails() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [job, setJob] = useState(null);
  const nav = useNavigate();
  const { jobId } = useParams();
  const [details, setDetails] = useState(true);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      setDetails(true);
      try {
        const token = localStorage.getItem("AccessToken");
        const res = await axios.get(
          `https://iti-freelancing-hub-server.vercel.app/students/jobs/${jobId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setJob(res.data);
        if (res.data && res.data.jobData && res.data.jobData.jobType) {
          localStorage.setItem("currentJobType", res.data.jobData.jobType);
        }

        setDetails(false);
      } catch (err) {
        console.error("error", err);
      }
    };
    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  if (details) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress color={theme.palette.primary.iti} />
      </Box>
    );
  }

  const jobData = job.jobData;

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
          {jobData.jobTitle}
        </Typography>
        <Chip
          label={jobData.verified ? "Completed" : "Pending"}
          sx={{
            width: "100px",
            fontWeight: "600",
            bgcolor: jobData.verified ? "#E8F5E9" : "#E6E6E6",
            color: jobData.verified ? "#2E7D32" : "#A7A5A5",
          }}
        />
      </Stack>

      <Typography sx={{ color: "#D7777B", fontWeight: 600, mt: 1 }}>
        {jobData.jobType}
      </Typography>

      <Typography
        fontWeight={600}
        sx={{
          fontSize: isMobile ? "18px" : "25px",
          color: theme.palette.primary.main,
          marginTop: "10px",
        }}
      >
        {jobData.studentName}
      </Typography>

      <Typography
        sx={{ color: "#A7A5A5", mt: 2, width: isMobile ? "100%" : "60%" }}
      >
        {jobData.jobDescription}
      </Typography>

      {jobData.branch && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Branch:{" "}
            <Box component="span" fontWeight={400}>
              {jobData.branch}
            </Box>
          </Typography>
        </Box>
      )}

      {jobData.platform && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Platform:{" "}
            <Box component="span" fontWeight={400}>
              {jobData.platform}
            </Box>
          </Typography>
        </Box>
      )}

      {jobData.companytName && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Company:{" "}
            <Box component="span" fontWeight={400}>
              {jobData.companytName}
            </Box>
          </Typography>
        </Box>
      )}

      {jobData.companyCountry && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Country:{" "}
            <Box component="span" fontWeight={400}>
              {jobData.companyCountry}
            </Box>
          </Typography>
        </Box>
      )}

      {jobData.companyContact && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Contact:{" "}
            <Box component="span" fontWeight={400}>
              {jobData.companyContact}
            </Box>
          </Typography>
        </Box>
      )}

      {jobData.proofOfWork && (
        <Box mt={2}>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
          >
            Proof of Work:{" "}
            <Box component="span" fontWeight={400}>
              {jobData.proofOfWork}
            </Box>
          </Typography>
        </Box>
      )}

      <Box mt={2}>
        <Typography sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
          Contributors:{" "}
          <Box component="span" fontWeight={400}>
            {jobData.teamMembers && jobData.teamMembers.length > 0
              ? jobData.teamMembers
                  .map((member) => member.studentName)
                  .join(", ")
              : "No contributors"}
          </Box>
        </Typography>
      </Box>

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
            {jobData.startDate}
          </Typography>
        </Stack>

        {jobData.endDate && (
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarMonthIcon sx={{ color: theme.palette.primary.iti }} />
            <Typography sx={{ color: theme.palette.primary.sec }}>
              <Box
                component="span"
                sx={{ color: theme.palette.primary.main }}
                fontWeight="bold"
              >
                Completion:
              </Box>{" "}
              {jobData.endDate}
            </Typography>
          </Stack>
        )}
      </Stack>

      <Stack direction="row" spacing={4} mt={2} alignItems="center">
        {(jobData.costInUSD || jobData.paymentInUSD) && (
          <Typography
            fontWeight={600}
            sx={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <img src="/usd.svg" alt="USD" style={{ width: "12px" }} />
            <span style={{ color: theme.palette.primary.main }}>
              {jobData.costInUSD || jobData.paymentInUSD}
            </span>
          </Typography>
        )}

        {(jobData.costInEGP || jobData.paymentInEGP) && (
          <Typography
            fontWeight={600}
            sx={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <img src="/egp.svg" alt="EGP" style={{ width: "40px" }} />
            <span style={{ color: theme.palette.primary.main }}>
              {jobData.costInEGP || jobData.paymentInEGP}
            </span>
          </Typography>
        )}
      </Stack>

      <Box mt={3}>
        <Typography fontWeight={600} sx={{ color: theme.palette.primary.main }}>
          Comments
        </Typography>

        {jobData.comments && jobData.comments.length > 0 ? (
          jobData.comments.map((comment) => (
            <Box
              key={comment._id}
              sx={{
                borderRadius: "8px",
                width: "40%",
                backgroundColor: "#f5f5f5",
                padding: "10px",
                mb: 2,
              }}
            >
              <Typography sx={{ fontSize: 12, color: "#888", mb: 1 }}>
                {new Date(comment.date).toLocaleDateString()}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                    Admin
                  </Typography>
                  <Typography sx={{ fontSize: 16 }}>
                    {comment.content}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 20, color: "#888" }}>
                  ❤️{comment.rate}
                </Typography>
              </Box>
            </Box>
          ))
        ) : (
          <Typography sx={{ fontSize: 14, color: "#A7A5A5" }}>
            No comments yet.
          </Typography>
        )}
      </Box>

      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={2}
        sx={{ my: 2, width: "100%" }}
      >
        <Button
          onClick={handleOpenDeleteModal}
          variant="outlined"
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

      <DeleteModal
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        itemId={jobId}
        itemType="job"
      />
    </Box>
  );
}

export default JobDetails;
