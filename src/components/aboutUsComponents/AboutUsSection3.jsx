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
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import HeadingH4 from "../../globalsComponents/Headings/HeadingH4";

const AboutUsSection3 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  return (
    <>
      <HeadingH2
        headingH2Text={"Why Choose Us"}
        headingH2Icon={PsychologyAltIcon}
      />

      <Grid
        container
        sx={{ my: 9 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {whyChooseUsData.map((item) => (
          <Grid item xs={12} sm={4} md={4} key={item.title}>
            <Card sx={{ py: 2, height: 400, borderRadius:3, bgcolor:"#0077b5" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                {React.createElement(item.icon, {
                  sx: {
                    border: "2px solid #25D366",
                    borderRadius: "25px",
                    p:1,
                    fontSize: "4rem",
                    color: isDarkMode ? "primary.main" : "tertiaryRed.main",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "deepGray.main",
                    },
                  },
                })}
                <HeadingH4 HeadingH4Text={item.title} />
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
