import React, { useMemo } from "react";
import { Stack } from "@mui/material";
import TopCard from "./TopCard";

export default function TopCards({ jobs, track, certificates }) {
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
      }}>
      <TopCard name="Track" value={track} />
      <TopCard name="Total Jobs" value={jobs?.length || 0} />
      <TopCard
        name="Completed and Approved Jobs"
        value={completedJobs.length}
      />
      <TopCard
        name="Total Profit Earned (USD)"
        value={`$${profit.toFixed(2)}`}
      />
      <TopCard
        name="Total Profit Earned (EGP)"
        value={`EGP ${(profit * 50).toFixed(2)}`}
      />

      <TopCard name="Uploaded Certificates" value={certificates?.length || 0} />
    </Stack>
  );
}
