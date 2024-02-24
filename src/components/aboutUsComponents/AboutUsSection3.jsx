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
        {whyChooseUsData.map((item, ind) => (
          <Grid item xs={12} sm={4} md={4} key={item.title}>
            <Card
              sx={{
                py: 2,
                height: 400,
                borderRadius: 3,
                bgcolor:
                  (ind === 0 && "#a5bfff") ||
                  (ind === 1 && "#fff0d1") ||
                  (ind === 2 && "#d3fff0"),
                  "&:hover": {
                  transition: "all 0.5s",
                  bgcolor: "deepGray.main",
                },
              }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                {React.createElement(item.icon, {
                  sx: {
                    border: "2px solid #Df0707",
                    borderRadius: "25px",
                    p: 1,
                    fontSize: "5rem",
                    color: isDarkMode ? "primary.main" : "redCustom.main",
                  },
                })}
                <HeadingH4 HeadingH4Text={item.title} />
              </Box>
              <CardContent>
                <Typography variant="body1" color="redCustom.main">
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
                bgcolor: "redCustom.main",
                color: "whiteCustom.main",
                transition: "background-color 0.5s, color 0.5s",
                "&:hover": {
                  backgroundColor: isDarkMode ? "#004808" : "redCustom.main",
                },
              }}>
              <Avatar sx={{ width: 65, height: 65 }} src={item.img} />
              <Box>
                <Typography variant="h3">
                  <AnimatedNumber value={Number(item.quantity)} />
                </Typography>
                <Typography variant="h5">{item.title}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AboutUsSection3;
