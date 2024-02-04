import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function Review() {
  const { step1, step2, step3 } = useSelector((state) => state.admission);
  const allProfileData = [step1, step2, step3];
  console.log(allProfileData, "review data");
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Profile summary
      </Typography>
      <Grid container spacing={8}>
      {allProfileData.map((object, index) =>
          Object.entries(object)
            .filter(([key, value]) => value) // Filter out keys with falsy values
            .map(([key, value]) => (
              <Grid item xs={12} md={6} key={`${key}-${index}`} sx={{ py: 0.2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Typography
                    sx={{ textTransform: 'capitalize' }}
                    variant="body1">
                    {key.toString()}
                  </Typography>
                </Box>
              </Grid>
            ))
        )}
      </Grid>
    </React.Fragment>
  );
}
