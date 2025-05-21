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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ApprochSelect from "./ApprochSelect";
import {
  addCertificate,
  getCertificate,
  updateCertificate,
} from "../../../redux/slices/certificate";
import { certificateFormLocalization } from "../../../StaticData/Localization";
import AddedCerModal from "./AddedCerModal";

export default function Certificate() {
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.remote);
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  const localization = certificateFormLocalization[lang];
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    // control,
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

      setValue("certificateId", certificate.certificateId);
      setValue("certificateDescription", certificate.certificateDescription);
      setValue("Company", certificate.Company);
      setValue("approach", certificate.approach);

      setValue("startDate", certificate.startDate);
      setValue("endDate", certificate.endDate);
      setValue("proofOfCertificate", certificate.proofOfCertificate);
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
        sx={{
          direction: lang === "ar" ? "rtl" : "ltr",
          gap: lang === "ar" ? 1 : 0,
        }}
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
          {localization.title}
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
              placeholder={localization.certificateId.placeholder}
              fullWidth
              required={localization.certificateId.required}
              desc={localization.certificateId.desc}
            />
            <TextInput
              register={register}
              name="certificateDescription"
              placeholder={localization.certificateDescription.placeholder}
              fullWidth
              required={localization.certificateDescription.required}
              desc={localization.certificateDescription.desc}
            />

            <Stack
              direction={"row"}
              sx={{ marginBottom: "30px", gap: { xs: 1, md: 3 } }}
              spacing={1}>
              <DateInput
                register={register}
                name="startDate"
                placeholder={localization.startDate.placeholder}
                fullWidth
                required={localization.startDate.required}
              />

              <DateInput
                register={register}
                name="endDate"
                placeholder={localization.endDate.placeholder}
                fullWidth
                required={localization.endDate.required}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, lg: 6 }}>
            <TextInput
              register={register}
              name="Company"
              placeholder={localization.company.placeholder}
              fullWidth
              required={localization.company.required}
            />

            <ApprochSelect
              register={register}
              name="approach"
              placeholder={localization.approach.placeholder}
              fullWidth
              required={localization.approach.required}
            />

            <TextInput
              placeholder={localization.proofOfCertificate.placeholder}
              register={register}
              name="proofOfCertificate"
              required={localization.proofOfCertificate.required}
              watch={watch}
              desc={localization.proofOfCertificate.desc}
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
            {localization.buttons.back}
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
            {loading ? (
              <CircularProgress size={24} />
            ) : id ? (
              localization.buttons.update
            ) : (
              localization.buttons.add
            )}
          </Button>
        </Stack>
      </form>

      <AddedCerModal open={modal} handleClose={handleClose} id={id} />
    </Stack>
  );
}
