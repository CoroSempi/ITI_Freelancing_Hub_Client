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
import StudentSelect from "./StudentSelect";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDirect, getJob, updateDirect } from "../../../redux/slices/direct";
import { directFormLocalization } from "../../../StaticData/Localization";
import AddedModal from "../addedModal";
import ContactSelect from "./ContactSelect";

export default function Direct({ id }) {
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.direct);
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  const [shares, setShares] = useState([]);
  const localization = directFormLocalization[lang];

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
      endDate: "",
      costInUSD: "",
      costInEGP: "",
      teamMembers: [],
      clientName: "",
      clientCountry: "",
      platform: "",
      clientContact: "",
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

      console.log(job);
      setValue("jobTitle", job.jobTitle);
      setValue("jobDescription", job.jobDescription);
      setValue("startDate", job.startDate);
      setValue("endDate", job.endDate);
      setValue("costInUSD", job.costInUSD);
      setValue("costInEGP", job.costInEGP);

      setValue("clientName", job.clientName);
      setValue("clientCountry", job.clientCountry);
      setValue("platform", job.platform);
      setValue("clientContact", job.clientContact);
      setValue("proofOfWork", job.proofOfWork);
      setShares(job.teamMembers);
    }
  }

  const handleClose = () => {
    setModal(false);
    nav("/");
  };

  const costInUSD = useWatch({
    control,
    name: "costInUSD",
  });

  console.log(costInUSD);

  useEffect(() => {
    console.log(shares);
    setValue("teamMembers", shares, { shouldValidate: true });
  }, [shares, setValue]);

  useEffect(() => {
    const usd = parseFloat(costInUSD);
    if (!isNaN(usd)) {
      const egp = (usd * 50).toFixed(2);
      setValue("costInEGP", egp);
    } else {
      setValue("costInEGP", "0.00");
    }
  }, [costInUSD, setValue]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await dispatch(
          updateDirect({
            id,
            jobData: {
              ...data,
              costInUSD: parseFloat(data.costInUSD),
              costInEGP: parseFloat(data.costInEGP),
            },
          })
        ).unwrap();
        setModal(true);
      } else {
        await dispatch(
          addDirect({
            ...data,
            costInUSD: parseFloat(data.costInUSD),
            costInEGP: parseFloat(data.costInEGP),
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
        alignItems="center"
      >
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
          color={theme.palette.primary.main}
        >
          {localization.title}
        </Typography>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", px: { xs: 0, md: 2 } }}
        >
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
              spacing={1}
            >
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

            <Stack direction={"row"} sx={{ gap: { xs: 1, md: 3 } }} spacing={1}>
              <CostInput
                register={register}
                name="costInUSD"
                placeholder={localization.costInUSD.placeholder}
                required={localization.costInUSD.required}
                value={costInUSD}
                onChange={(e) => setValue("costInUSD", e.target.value)}
              />
              <CostInput
                register={register}
                name="costInEGP"
                placeholder={localization.costInEGP.placeholder}
                required={localization.costInEGP.required}
                value={(parseFloat(costInUSD) * 50 || 0).toFixed(2)}
                onChange={() => {}}
              />
            </Stack>

            <StudentSelect
              placeholder={localization.teamMembers.placeholder}
              required={localization.teamMembers.required}
              total={costInUSD - 5}
              shares={shares}
              setShares={setShares}
              id={id}
            />
          </Grid>

          <Grid item size={{ xs: 12, lg: 6 }}>
            <ContactSelect
              placeholder={localization.platform.placeholder}
              register={register}
              name="platform"
              required={localization.platform.required}
            />

            <TextInput
              register={register}
              name="clientName"
              placeholder={localization.clientName.placeholder}
              fullWidth
              required={localization.clientName.required}
            />

            <CountrySelect
              placeholder={localization.clientCountry.placeholder}
              register={register}
              name="clientCountry"
              required={localization.clientCountry.required}
              watch={watch}
            />

            <TextInput
              register={register}
              name="clientContact"
              placeholder={localization.clientContact.placeholder}
              fullWidth
              required={localization.clientContact.required}
              desc={localization.clientContact.desc}
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
          }}
        >
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
            }}
          >
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
            }}
          >
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
