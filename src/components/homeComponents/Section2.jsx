import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardMedia, Typography } from "@mui/material";
import headerImg from "../../assets/header-img.png";
import ellipse1 from "../../assets/Ellipse-01.png";
import planImg from "../../assets/plane.png";
import ellipse2 from "../../assets/Ellipse-02.png";
import { Link } from "react-router-dom";
import SlidingCard from "../../globalsComponents/SlidingCard";
import { useSelector } from "react-redux";

export default function Section2() {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            sx={{
              px: { xs: 1, sm: 3, md: 6 },
              py: { xs: 1, sm: 3, md: 4 },
              display: "inline-block",
              backgroundColor: isDarkMode ? "deepGray.main" : "primary.main",
              color: isDarkMode ? "whiteCustom.main" : "secondary.main",
              borderColor: isDarkMode ? "accent.main" : "secondary.main",
              borderRadius: "25% 0 25% 0",
              border: 1,
              boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            }}
            variant="h6"
            gutterBottom>
            SPECIAL OFFER FOR YOU{" "}
            <span
              style={{
                color: "red",
                fontSize: "35px",
              }}>
              🎉
            </span>
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Your{" "}
            <span
              style={{
                color: "red",
              }}>
              successful
            </span>{" "}
            journey start with us!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            At DreamEdu, we are confident in our ability to guide you towards a
            successful study abroad experience. That's why we offer a Study
            Abroad Guarantee. If you don't secure admission to at least one of
            your top 3 chosen universities after completing our comprehensive
            application package, we will provide you with a full refund of your
            program fees. This guarantee demonstrates our commitment to your
            success and gives you peace of mind as you embark on your study
            abroad journey.
          </Typography>
          <Typography
            component={"div"}
            mt={{
              xs: 5,
              md: 7,
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Link to={"/apply-now"}>
              <Button
                sx={{
                  py: 3,
                  px: 6,
                }}
                variant="contained"
                size="large">
                Apply Now
              </Button>
            </Link>
            <Link to={"/study-in-china"}>
              <Button
                sx={{
                  py: 3,
                  px: 6,
                }}
                variant="contained"
                size="large">
                Learn More
              </Button>
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <SlidingCard
              animationA={"translateX(0)"}
              animationB={"translateX(-200%)"}>
              <CardMedia
                sx={{
                  position: "relative",
                  top: "-65px",
                  left: "375px",
                  maxWidth: "100%",
                  maxHeight: "120px",
                }}
                component="img"
                alt="green iguana"
                image={planImg}
              />
              <CardMedia
                sx={{
                  // position: "relative",
                  // top: "-65px",
                  // left: "375px",
                  maxWidth: "100%",
                  maxHeight: "160px",
                }}
                component="img"
                alt="Ellipse"
                image={ellipse2}
              />
            </SlidingCard>
            <SlidingCard
              animationA={"translateY(0)"}
              animationB={"translateY(100%)"}>
              <CardMedia
                sx={{
                  maxWidth: "420px",
                  right: "0px",
                  position: "relative",
                  // maxHeight: "220px",
                }}
                component="img"
                alt="green iguana"
                image={headerImg}
              />
            </SlidingCard>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
