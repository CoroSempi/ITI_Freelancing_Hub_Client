import {
  Button,
  Modal,
  Card,
  Typography,
  Box,
  useTheme,
  CircularProgress,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import LocalizationContext from "../../context/localizationContext";
import { deleteModalLocalization } from "../../StaticData/Localization";

function DeleteModal({ open, handleClose, itemId, itemType, certificateId }) {
  const theme = useTheme();
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const { lang } = useContext(LocalizationContext);
  const localization = deleteModalLocalization[lang];

  const id = itemId || certificateId;
  const type = itemType || (certificateId ? "certificate" : "job");

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const token = localStorage.getItem("AccessToken");
      let endpoint = "";

      if (type === "certificate") {
        endpoint = `https://iti-freelancing-hub-server.vercel.app/students/certificate/${id}`;
      } else if (type === "job") {
        const jobType = localStorage.getItem("currentJobType") || "";

        if (jobType.toLowerCase().includes("direct")) {
          endpoint = `https://iti-freelancing-hub-server.vercel.app/students/directJob/${id}`;
        } 
        else if (jobType.toLowerCase().includes("platform")) {
          endpoint = `https://iti-freelancing-hub-server.vercel.app/students/platformJob/${id}`;
        } 
        else if (jobType.toLowerCase().includes("remote")) {
          endpoint = `https://iti-freelancing-hub-server.vercel.app/students/remoteJob/${id}`;
        }
      }

      if (!endpoint) {
        console.error("Unknown item type or job type, cannot determine delete endpoint");
        setIsDeleting(false);
        return;
      }

      await axios.delete(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      handleClose();
      navigate("/");
      setIsDeleting(false);
    } catch (error) {
      console.error("Error deleting ", error);
      setIsDeleting(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          borderRadius: 4,
          width: "90%",
          maxWidth: 500,
          p: 4,
          boxShadow: 3,
          bgcolor: "background.paper",
          mx: "auto",
          my: "20vh",
          direction: lang === "ar" ? "rtl" : "ltr",
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: theme.palette.primary.main,
            fontSize: "25px",
            fontWeight: 700,
            fontFamily: lang === "en" ? "" : "ShamelBold",
          }}
        >
          {localization.title}
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{
            color: "#A7A5A5",
            fontSize: "18px",
            mb: 1,
            fontFamily: lang === "en" ? "" : "Shamel",
          }}
        >
          {localization.message.replace("{item}", localization[type])}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ErrorOutlineIcon sx={{ fontSize: 120, color: "#d32f2f" }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            fontWeight: 600,
            fontFamily: "Poppins",
            flexDirection: lang === "ar" ? "row-reverse" : "row",
          }}
        >
          <Button
            onClick={handleClose}
            variant="outlined"
            fullWidth
            disabled={isDeleting}
            sx={{
              py: 1.5,
              borderRadius: "15px",
              color: "#BF272D",
              border: "1px solid #BF272D",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 600,
              maxWidth: { sm: "200px" },
            }}
          >
            {localization.cancel}
          </Button>

          <Button
            variant="contained"
            fullWidth
            onClick={handleDelete}
            disabled={isDeleting}
            sx={{
              py: 1.5,
              fontWeight: 600,
              fontFamily: "Poppins",
              borderRadius: "15px",
              backgroundColor: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme.palette.primary.sec,
              },
              maxWidth: { sm: "200px" },
            }}
          >
            {isDeleting ? <CircularProgress size={24} color="inherit" /> : localization.delete}
          </Button>
        </Box>
      </Card>
    </Modal>
  );
}

export default DeleteModal;
