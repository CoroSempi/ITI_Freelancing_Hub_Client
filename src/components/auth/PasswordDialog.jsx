import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { passwordDialog } from "../../StaticData/Localization";
import LocalizationContext from "../../context/localizationContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PasswordDialog({ open, handleClose }) {
  const theme = useTheme();
  const { lang } = useContext(LocalizationContext);
  const localization = passwordDialog;

  return (
    <>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
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
          {localization[lang].title}
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
            {localization[lang].context}
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
            type="submit"
            variant="contained">
            {localization[lang].submit}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
