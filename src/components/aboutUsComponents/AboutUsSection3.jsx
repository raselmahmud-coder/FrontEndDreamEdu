import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AnimatedNumber from "../../globalsComponents/AnimatedNumber";
import { totalPortfolioData, whyChooseUsData } from "../../utils/fakeData";
import { useSelector } from "react-redux";

const AboutUsSection3 = () => {
  const {isDarkMode} = useSelector((state) => state.colorMode);
  return (
    <>
      <Typography variant="h1" sx={{ fontWeight: "bold", textAlign: "center" }} gutterBottom>
        Why choose us?
      </Typography>
      <Grid
        container
        sx={{ my: 9 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {whyChooseUsData.map((item) => (
          <Grid item xs={12} sm={4} md={4} key={item.title}>
            <Card sx={{ py: 2, height: 300 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                {React.createElement(item.icon, {
                  sx: {
                    fontSize: "4rem",
                    color: isDarkMode ? "primary.main" : "#000",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  },
                })}
                <Typography variant="h4">{item.title}</Typography>
              </Box>
              <CardContent>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid
        sx={{ my: 9 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {totalPortfolioData.map((item) => (
          <Grid item xs={6} sm={4} md={3} key={item.quantity}>
            <Card
              sx={{
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}>
              <Avatar sx={{ width: 65, height: 65 }} src={item.img} />
              <Box>
                <Typography variant="h3">
                  <AnimatedNumber value={Number(item.quantity)} />
                </Typography>
                <Typography variant="h6">{item.title}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AboutUsSection3;
