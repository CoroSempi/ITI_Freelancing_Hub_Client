import React, { useMemo, useContext } from "react";
import { Stack } from "@mui/material";
import TopCard from "./TopCard";
import LocalizationContext from "../../context/localizationContext";
import { topCardsLocalization } from "../../StaticData/Localization";

export default function TopCards({ jobs, track, certificates }) {
  const { lang } = useContext(LocalizationContext);
  const localization = topCardsLocalization[lang];

  const completedJobs = useMemo(
    () => (jobs ? jobs.filter((job) => job.verified === true) : []),
    [jobs]
  );

  const profit = useMemo(() => {
    return completedJobs.reduce((sum, job) => sum + (job.costInUSD || 0), 0);
  }, [completedJobs]);

  return (
    <Stack
      sx={{
        flexDirection: "row",
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "start",
        gap: { xs: 1, sm: 1.5 },
        direction: lang === "ar" ? "rtl" : "ltr",
      }}>
      <TopCard value={track} />
      <TopCard name={localization.totalJobs} value={jobs?.length || 0} />
      <TopCard name={localization.completedJobs} value={completedJobs.length} />
      <TopCard name={localization.profitUSD} value={`$${profit.toFixed(2)}`} />
      <TopCard
        name={localization.profitEGP}
        value={`EGP ${(profit * 50).toFixed(2)}`}
      />
      <TopCard
        name={localization.certificates}
        value={certificates?.length || 0}
      />
    </Stack>
  );
}
