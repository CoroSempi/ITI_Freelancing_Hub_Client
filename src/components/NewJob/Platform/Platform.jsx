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
import PlatFormSelect from "./PlatFormSelect";
import CountrySelect from "./CountrySelect";
import StudentSelect from "./StudentSelect";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlatform,
  getJob,
  updatePlatform,
} from "../../../redux/slices/platform";
import AddedModal from "../addedModal";

export default function Platform({ id }) {
  const { lang } = useContext(LocalizationProvider);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { platform, loading } = useSelector((state) => state.platform);
  const [modal, setModal] = useState(false);
  const nav = useNavigate();
  const [shares, setShares] = useState([]);

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
      studentProfile: "",
      clientName: "",
      clientCountry: "",
      platform: "",
      clientProfile: "",
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
      setValue("endDate", job.endDate);
      setValue("costInUSD", job.costInUSD);
      setValue("costInEGP", job.costInEGP);
      setValue("studentProfile", job.studentProfile);
      setValue("clientName", job.clientName);
      setValue("clientCountry", job.clientCountry);
      setValue("platform", job.platform);
      setValue("clientProfile", job.clientProfile);
      setValue("proofOfWork", job.proofOfWork);
      setShares(job.teamMembers);
    }
  }

  console.log(platform);
  const handleClose = () => {
    setModal(false);
    nav("/");
  };

  console.log(platform);

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
          updatePlatform({
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
          addPlatform({
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
          {lang === "en"
            ? "Freelancing job on platform"
            : "عمل على منصة عمل حر"}
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
              placeholder="Job Title"
              fullWidth
              required="Required"
              desc="Ensure that the title clearly describes the Job."
            />
            <TextInput
              register={register}
              name="jobDescription"
              placeholder="Job Description"
              fullWidth
              required="Required"
              desc={"Ensure that the description clearly describes the Job."}
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

            <Stack direction={"row"} sx={{ gap: { xs: 1, md: 3 } }} spacing={1}>
              <CostInput
                register={register}
                name="costInUSD"
                placeholder="Cost in USD"
                required="Required"
                value={costInUSD}
                onChange={(e) => setValue("costInUSD", e.target.value)}
              />
              <CostInput
                register={register}
                name="costInEGP"
                placeholder="Cost in EGP"
                required="Auto Generated"
                value={(parseFloat(costInUSD) * 50 || 0).toFixed(2)}
                onChange={() => {}}
              />
            </Stack>

            <StudentSelect
              placeholder={"Team members"}
              required={"optional"}
              total={costInUSD - 5}
              shares={shares}
              setShares={setShares}
              id={id}
            />
          </Grid>

          <Grid item size={{ xs: 12, lg: 6 }}>
            <PlatFormSelect
              placeholder="Platform"
              register={register}
              name="platform"
              required="Required"
            />

            <TextInput
              register={register}
              name="studentProfile"
              placeholder="Your Profile on The Platform"
              fullWidth
              required="Required"
              desc="Provide the link to your profile on the chosen platform."
            />

            <TextInput
              register={register}
              name="clientName"
              placeholder="Client Name"
              fullWidth
              required="Required"
            />

            <CountrySelect
              placeholder="Client Country"
              register={register}
              name="clientCountry"
              required="Required"
              watch={watch}
            />

            <TextInput
              register={register}
              name="clientProfile"
              placeholder="Client Profile  on The Platform"
              fullWidth
              required="Required"
              desc="Ensure to put the link to the client's profile on the chosen platform."
            />
            <TextInput
              register={register}
              name="proofOfWork"
              placeholder="Proof of Work"
              fullWidth
              required="Required"
              desc="Prepare a PDF document that includes screenshots of chats between you and the client, samples of the work completed, and proof of payment or invoices. Once you've compiled everything into a single PDF, upload it to Google Drive, copy the link, and paste it in here. Make sure the link is set to 'Anyone with the link can view' so that admin can access it."
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
