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
import { useForm, useWatch } from "react-hook-form";
import DateInput from "../DateInput";
import CostInput from "../CostInput";
import { useState } from "react";
import CountrySelect from "./CountrySelect";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJob, addRemote, updateRemote } from "../../../redux/slices/remote";
import { remoteFormLocalization } from "../../../StaticData/Localization";
import AddedModal from "../addedModal";

export default function Remote({ id }) {
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.remote);
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  const localization = remoteFormLocalization[lang];

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
      jobTitle: "",
      jobDescription: "",
      startDate: "",
      paymentInUSD: "",
      paymentInEGP: "",
      companytName: "",
      companyCountry: "",
      companyContact: "",
      proofOfWork: "",
    },
  });

  useEffect(() => {
    if (id) {
      loadJobData();
    }
  }, [id]);

  async function loadJobData() {
    if (id) {
      const job = await dispatch(getJob(id)).unwrap();

      setValue("jobTitle", job.jobTitle);
      setValue("jobDescription", job.jobDescription);
      setValue("startDate", job.startDate);
      setValue("paymentInUSD", job.paymentInUSD);
      setValue("paymentInEGP", job.paymentInEGP);
      setValue("companytName", job.companytName);
      setValue("companyCountry", job.companyCountry);
      setValue("companyContact", job.companyContact);
      setValue("proofOfWork", job.proofOfWork);
    }
  }

  const handleClose = () => {
    setModal(false);
    nav("/");
  };

  const paymentInUSD = useWatch({
    control,
    name: "paymentInUSD",
  });

  useEffect(() => {
    const usd = parseFloat(paymentInUSD);
    if (!isNaN(usd)) {
      const egp = (usd * 50).toFixed(2);
      setValue("paymentInEGP", egp);
    } else {
      setValue("paymentInEGP", "0.00");
    }
  }, [paymentInUSD, setValue]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await dispatch(
          updateRemote({
            id,
            jobData: {
              ...data,
              paymentInUSD: parseFloat(data.paymentInUSD),
              paymentInEGP: parseFloat(data.paymentInEGP),
            },
          })
        ).unwrap();
        setModal(true);
      } else {
        await dispatch(
          addRemote({
            ...data,
            paymentInUSD: parseFloat(data.paymentInUSD),
            paymentInEGP: parseFloat(data.paymentInEGP),
          })
        ).unwrap();
        setModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack width="100%">
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
              name="jobTitle"
              placeholder={localization.jobTitle.placeholder}
              fullWidth
              required={localization.jobTitle.required}
              desc={localization.jobTitle.desc}
            />
            <TextInput
              register={register}
              name="jobDescription"
              placeholder={localization.jobDescription.placeholder}
              fullWidth
              required={localization.jobDescription.required}
              desc={localization.jobDescription.desc}
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
            </Stack>

            <Stack direction={"row"} sx={{ gap: { xs: 1, md: 3 } }} spacing={1}>
              <CostInput
                register={register}
                name="paymentInUSD"
                placeholder={localization.paymentInUSD.placeholder}
                required={localization.paymentInUSD.required}
                value={paymentInUSD}
                onChange={(e) => setValue("paymentInUSD", e.target.value)}
              />
              <CostInput
                register={register}
                name="paymentInEGP"
                placeholder={localization.paymentInEGP.placeholder}
                required={localization.paymentInEGP.required}
                value={(parseFloat(paymentInUSD) * 50 || 0).toFixed(2)}
                onChange={() => {}}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, lg: 6 }}>
            <TextInput
              register={register}
              name="companytName"
              placeholder={localization.companyName.placeholder}
              fullWidth
              required={localization.companyName.required}
            />

            <CountrySelect
              placeholder={localization.companyCountry.placeholder}
              register={register}
              name="companyCountry"
              required={localization.companyCountry.required}
              watch={watch}
            />
            <TextInput
              register={register}
              name="companyContact"
              placeholder={localization.companyContact.placeholder}
              fullWidth
              required={localization.companyContact.required}
              desc={localization.companyContact.desc}
            />
            <TextInput
              register={register}
              name="proofOfWork"
              placeholder={localization.proofOfWork.placeholder}
              fullWidth
              required={localization.proofOfWork.required}
              desc={localization.proofOfWork.desc}
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

      <AddedModal open={modal} handleClose={handleClose} id={id} />
    </Stack>
  );
}
