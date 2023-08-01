import { Grid } from "@mui/material";
import React from "react";

const Section7 = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          alignItems: "center",
        }}>
        <Grid item xs={12} sm={6} md={6}>
          Frequently asked question
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          Frequently asked question
        </Grid>
      </Grid>
    </>
  );
};

export default Section7;
