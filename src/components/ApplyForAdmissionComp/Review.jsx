import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review() {
  const allProfileData = useSelector((state) => state.admission);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Profile summary
      </Typography>
      <Grid container spacing={8}>
        {Object.entries(allProfileData).map(
          ([key, value]) =>
            value && (
              <Grid item xs={12} md={6} key={key} sx={{ py: 0.2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  {value && (
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      variant="body1">
                      {key}
                    </Typography>
                  )}
                  {value.includes("base64") ? (
                    <img src={value} width={"7%"} alt="Preview" />
                  ) : (
                    <Typography
                      sx={{ textTransform: "capitalize" }}
                      variant="body1">
                      {value}
                    </Typography>
                  )}
                </Box>
              </Grid>
            ),
        )}
      </Grid>
      
    </React.Fragment>
  );
}
