import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { serviceOfferData } from "../../utils/fakeData";
import { useSelector } from "react-redux";

export default function Section1() {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  return (
    <>
      <Box sx={{ mb: 8 }} component="section">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography
            gutterBottom
            variant="h2"
            sx={{
              mt: { xs: -2, sm: -6, md: -8 }, 
              mb: { xs: 4, sm: 6, md: 8 }, 
              px: { xs: 1, sm: 3, md: 6 }, 
              py: { xs: 1, sm: 3, md: 4 }, 
              zIndex: 899,
              display: "inline-block",
              backgroundColor: isDarkMode ? "black.main" : "primary.main",
              color: isDarkMode ? "whiteCustom.main" : "secondary.main",
              borderColor: isDarkMode ? "accent.main" : "secondary.main",
              borderRadius: "25% 0 25% 0",
              border: 1,
            }}
            component="h2">
            Go Abroad with DreamEdu
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {serviceOfferData.map(({ title, description, img }) => (
            <Grid
              item
              key={title}
              xs={12}
              sm={6}
              md={4}
              sx={{
                perspective: "1000px",
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-of-type(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                    "& > div:nth-of-type(3)": {
                      transform: "translate3d(45px, 50px, 40px)",
                    },
                  },
                },
              }}>
              <Card
                variant="outlined"
                sx={{
                  minHeight: "368px",
                  backgroundColor: isDarkMode ? "black.main" : "primary.main",
                  borderColor: isDarkMode ? "accent.main" : "secondary.main",
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <img src={img} width={"35%"} alt="" />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ textAlign: "center" }}
                    component="h2">
                    {title}
                  </Typography>
                  <Typography>{description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
