import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  useTheme,
} from "@mui/material";
import LocalizationContext from "../../context/localizationContext";
import { addedModalLocalization } from "../../StaticData/Localization";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddedModal({ open, handleClose, id, cer }) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationContext);
  const localization = addedModalLocalization[lang];

  return (
    <Dialog
      open={open}
      slots={{ transition: Transition }}
      keepMounted
      onClose={handleClose}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.background.default,
          borderRadius: "20px",
          color: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
          maxWidth: "400px",
          padding: "10px 0px",
        },
      }}>
      <DialogTitle
        sx={{
          fontFamily: lang === "ar" ? "ShamelBold" : "",
          color: theme.palette.primary.main,
          fontSize: { xs: "20px", sm: "25px" },
          fontWeight: 550,
        }}>
        {id ? localization.updatedTitle : localization.addedTitle}
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}>
        <DialogContentText
          width={"100%"}
          textAlign={"center"}
          fontFamily={lang === "ar" ? "Shamel" : ""}
          color={theme.palette.primary.sec}
          id="alert-dialog-slide-description">
          {id ? localization.updatedMessage : localization.addedMessage}
        </DialogContentText>
        <img src="/done.svg" alt="done" />
      </DialogContent>

      <DialogActions sx={{ width: "95%" }}>
        <Button
          onClick={handleClose}
          sx={{
            fontSize: { xs: "12px", sm: "15px" },
            borderRadius: "15px",
            color: "#F6F6F6",
            backgroundColor: theme.palette.background.button,
            minWidth: "100%",
            padding: "15px",
            fontFamily: lang === "ar" ? "ShamelBold" : "",
            fontWeight: "bold",
            boxShadow: "none",
          }}
          variant="contained">
          {localization.home}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
