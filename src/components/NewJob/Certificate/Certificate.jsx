import {
  Box,
  Grid,
  Stack,
  Typography,
  useTheme,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import LocalizationProvider from "../../../context/localizationContext";
import TextInput from "../TextInput";
import { useForm } from "react-hook-form";
import DateInput from "../DateInput";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AddedModal from "../addedModal";
import ApprochSelect from "./ApprochSelect";
import {
  addCertificate,
  getCertificate,
  updateCertificate,
} from "../../../redux/slices/certificate";

export default function Certificate({ id }) {
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.remote);
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      certificateId: "",
      certificateDescription: "",
      Company: "",
      approach: "",
      startDate: "",
      endDate: "",
      proofOfCertificate: "",
    },
  });

  useEffect(() => {
    if (id) {
      loadCertificateData();
    }
  }, [id]);

  async function loadCertificateData() {
    if (id) {
      const certificate = await dispatch(getCertificate(id)).unwrap();
      console.log(certificate);
      setValue("certificateId", certificate.certificateId);
      setValue("certificateDescription", job.certificateDescription);
      setValue("Company", certificate.Company);
      setValue("approach", certificate.approach);
      setValue("startDate", certificate.startDate);
      setValue("endDate", certificate.endDate);
      setValue("proofOfCertificate", certificate.proofOfCertificate);
    }
  }

  const handleClose = () => {
    setModal(false);
    nav("/");
  };

  const onSubmit = async (data) => {
    try {
      if (id) {
        await dispatch(
          updateCertificate({
            id,
            certificateData: {
              data,
            },
          })
        ).unwrap();
        setModal(true);
      } else {
        await dispatch(
          addCertificate({
            data,
          })
        ).unwrap();
        setModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      sx={{
        margin: { xs: "80px 15px", md: "80px 30px" },

        direction: lang === "ar" ? "rtl" : "ltr",
      }}>
      <Stack
        sx={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        direction="row"
        spacing={1}
        my={3}
        alignItems="center">
        <Box
          sx={{
            width: "8px",
            height: "35px",
            borderRadius: "10px 0px 10px 0px",
            backgroundColor: theme.palette.primary.iti,
          }}
        />
        <Typography
          fontFamily={lang === "ar" ? "ShamelBold" : ""}
          fontSize={lang === "ar" ? "16px" : "20px"}
          fontWeight={550}
          color={theme.palette.primary.main}>
          {lang === "en" ? "Add New Certificate" : "اضافة شهادة جديدة"}
        </Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", px: { xs: 0, md: 2 } }}>
          <Grid item size={{ xs: 12, lg: 6 }}>
            <TextInput
              register={register}
              name="certificateId"
              placeholder="Certificate ID"
              fullWidth
              required="Required"
              desc="Ensure that the Certificate ID is Right."
            />
            <TextInput
              register={register}
              name="certificateDescription"
              placeholder="Certificate Description"
              fullWidth
              required="Required"
              desc={
                "Ensure that the description clearly describes the certificate."
              }
            />

            <Stack
              direction={"row"}
              sx={{ marginBottom: "30px", gap: { xs: 1, md: 3 } }}
              spacing={1}>
              <DateInput
                register={register}
                name="startDate"
                placeholder="Start Date"
                fullWidth
                required="Required"
              />

              <DateInput
                register={register}
                name="endDate"
                placeholder="End Date"
                fullWidth
                required="Required"
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, lg: 6 }}>
            <TextInput
              register={register}
              name="Company"
              placeholder="Company Name"
              fullWidth
              required="Required"
            />

            <ApprochSelect
              register={register}
              name="approach"
              placeholder="Course Approach"
              fullWidth
              required="Required"
            />

            <TextInput
              placeholder="Proof of Certificate"
              register={register}
              name="proofOfCertificate"
              required="Required"
              watch={watch}
              desc={
                "Upload a scanned copy of the certificate or a photo of the certificate, all the materials into a single PDF, upload it to Google Drive, copy the sharing link, and paste it here. Make sure the link is set to “Anyone with the link can view” so the admin team can access and review it."
              }
            />

            <TextInput
              register={register}
              name="proofOfWork"
              placeholder="Proof of Work"
              fullWidth
              required="Required"
            />
          </Grid>
        </Grid>

        <Stack
          justifyContent={"center"}
          direction={{ xs: "column-reverse", sm: "row" }}
          sx={{
            my: 2,
            width: "100%",
            gap: lang === "ar" ? "15px" : theme.spacing(2),
          }}>
          <Button
            onClick={() => nav(-1)}
            variant="outlined"
            fullWidth
            sx={{
              height: "50px",
              fontWeight: 600,
              borderRadius: "15px",
              color: theme.palette.primary.iti,
              border: `1px solid ${theme.palette.primary.iti}`,
              fontFamily: lang === "en" ? "" : "Shamel",
              maxWidth: { sm: "400px" },
            }}>
            Back
          </Button>
          <Button
            disabled={!isValid}
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              height: "50px",
              fontWeight: 600,
              borderRadius: "15px",
              fontFamily: lang === "en" ? "" : "Shamel",
              maxWidth: { sm: "400px" },
            }}>
            {loading ? <CircularProgress size={24} /> : id ? "Update" : "Add"}
          </Button>
        </Stack>
      </form>

      <AddedModal open={modal} handleClose={handleClose} id={id} />
    </Stack>
  );
}
