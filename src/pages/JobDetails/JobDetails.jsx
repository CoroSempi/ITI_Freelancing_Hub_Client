import React, { useEffect, useState } from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import useMediaQuery from "@mui/material/useMediaQuery";
import DeleteModal from "../../components/ModalDelete/ModalDelete";

function JobDetails() {
  const theme = useTheme();
  const nav = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [job, setJob] = useState(null);
  const { jobId } = useParams();
  const [details, setDetails] = useState(true);

  // Delete modal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  //fetching
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
  ////modal
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
        }}>
        <CircularProgress color={theme.palette.primary.iti} />
      </Box>
    );
  }

  const jobData = job.jobData;
  const canEdit = job.canEdit;

  return (
    <Box
      sx={{
        margin: { xs: "70px 10px", md: "90px 30px" },
        width: { xs: "90%", md: "60%" },
        padding: isMobile ? "20px" : "",
      }}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ color: theme.palette.primary.main }}>
        <Typography
          fontWeight={600}
          sx={{
            fontFamily: "Poppins",
            fontSize: isMobile ? "18px" : "25px",
          }}>
          {jobData.jobTitle}
        </Typography>
        <Chip
          label={jobData.verified ? "Completed" : "Pending"}
          size="small"
          sx={{
            bgcolor: jobData.verified ? "#E8F5E9" : "#E6E6E6",
            color: jobData.verified ? "#2E7D32" : "#A7A5A5",
          }}
        />
      </Stack>

      <Typography
        sx={{
          color: "#D7777B",
          fontFamily: "Poppins",
          fontSize: "15px",
          fontWeight: 600,
          width: "327px",
          mt: 1,
          cursor: "pointer",
        }}>
        {jobData.jobType}
      </Typography>

      <Typography
        sx={{
          color: "#A7A5A5",
          fontFamily: "Poppins",
          fontSize: "15px",
          fontWeight: 500,
          letterSpacing: "0.3px",
          width: { xs: "100%", lg: "80%" },
          mt: 2,
        }}>
        {jobData.jobDescription}
      </Typography>

      <Box mt={2}>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.3px",
            alignSelf: "stretch",
          }}>
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
              sx={{ color: theme.palette.primary.main }}
              component="span"
              // color="#A7A5A5"
              fontWeight={"bold"}
              fontSize={16}>
              Start :
            </Box>{" "}
            {jobData.startDate}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthIcon sx={{ color: theme.palette.primary.iti }} />
          <Typography sx={{ color: theme.palette.primary.sec }}>
            <Box
              sx={{ color: theme.palette.primary.main }}
              component="span"
              fontWeight={"bold"}
              fontSize={16}>
              Completion :
            </Box>{" "}
            {jobData.endDate || "pending"}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={4} mt={2} alignItems="center">
        {(jobData.costInUSD || jobData.paymentInUSD) && (
          <Typography
            fontWeight={600}
            sx={{
              fontFamily: "REM",
              fontSize: "16px",
              letterSpacing: "0.32px",
            }}>
            <Box component="span" sx={{ color: "#44B40D" }}>
              $
            </Box>{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              {jobData.costInUSD || jobData.paymentInUSD}
            </Box>
          </Typography>
        )}

        {(jobData.costInEGP || jobData.paymentInEGP) && (
          <Typography
            fontWeight={600}
            sx={{
              fontFamily: "REM",
              fontSize: "16px",
              letterSpacing: "0.32px",
            }}>
            <Box component="span" sx={{ color: "#44B40D" }}>
              EGP
            </Box>{" "}
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              {jobData.costInEGP || jobData.paymentInEGP}
            </Box>
          </Typography>
        )}
      </Stack>
      {/* <Box mt={3}>
        <Typography
          fontWeight={600}
          sx={{
            color: theme.palette.primary.main,
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: 600,
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
        {jobData.comments && jobData.comments.length > 0
            ? jobData.comments.map((myComment, index) => (
                <Box key={index} sx={{ mt: 1 }}>
                  {myComment} 
                </Box>
              ))
            : "No Comments Yet"}
        </Typography>
      </Box> */}

      <Stack
        display={canEdit ? "flex" : "none"}
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={2}
        sx={{
          my: 2,
          width: "100%",
          marginLeft: isMobile ? "10px" : "",
        }}>
        <Button
          onClick={handleOpenDeleteModal}
          variant="outlined"
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
          }}>
          Delete
        </Button>

        <Button
          variant="contained"
          fullWidth
          onClick={() =>
            nav(
              `/editJob/${
                jobData.jobType.includes("platform")
                  ? "platform"
                  : jobData.jobType.includes("direct")
                  ? "direct"
                  : "remote"
              }/${jobId}`
            )
          }
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: "40px",
            borderRadius: "15px",
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            maxWidth: { sm: "200px" },
            "&:hover": {
              backgroundColor: theme.palette.primary.sec,
            },
          }}>
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
