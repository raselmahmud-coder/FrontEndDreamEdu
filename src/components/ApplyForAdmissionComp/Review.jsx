import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function Review() {
  const { step1, step2, step3 } = useSelector((state) => state.admission);
  const allProfileData = [step1, step2, step3];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Profile summary
      </Typography>
      <Grid container spacing={8}>
        {Object.entries(step1).map(([key, value]) => {
          if (value !== "") {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                key={key.toString()}
                sx={{ py: 0.2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{ textTransform: "capitalize" }}
                    variant="body1">
                    {key.toString()}➡️ {value.toString()}
                  </Typography>
                </Box>
              </Grid>
            );
          }
        })}
        {Object.entries(step2).map(([key, value]) => {
          // Filter properties with non-empty values
          if (Array.isArray(value) && value.length > 0) {
            return (
              <Grid item xs={12} sm={4} md={4} key={key} sx={{ py: 0.2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{ textTransform: "capitalize" }}
                    variant="body1">
                    {key.toString()}
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </Typography>
                </Box>
              </Grid>
            );
          }
        })}
        {Object.entries(step3).map(([key, value]) => {
          if (value !== "") {
            if (/^data:image\/(jpeg|png);base64,/.test(value)) {
              return (
                <Grid item xs={12} sm={4} md={4} key={key} sx={{ py: 0.2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      variant="body1">
                      {key.toString()}➡️
                    </Typography>
                    <Box
                      component={"img"}
                      sx={{
                        width: "100px",
                        height: "80px",
                      }}
                      loading="lazy"
                      src={value}
                      alt={key}
                    />
                  </Box>
                </Grid>
              );
            } else if (/^data:application\/pdf;base64,/.test(value)) {
              return (
                <Grid item xs={12} sm={4} md={4} key={key} sx={{ py: 0.2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      variant="body1">
                      {key.toString()}➡️{" "}
                      <Box
                        referrerPolicy="no-referrer"
                        component={"a"}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer">
                        View PDF
                      </Box>
                    </Typography>
                  </Box>
                </Grid>
              );
            }
          }
        })}
      </Grid>
    </React.Fragment>
  );
}
