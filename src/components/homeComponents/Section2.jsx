import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardMedia, Typography } from "@mui/material";
import headerImg from "../../assets/headerImg.svg";
import planImg from "../../assets/Icon/9.svg";
import ellipse2 from "../../assets/Icon/8.svg";
import { Link } from "react-router-dom";
import SlidingCard from "../../globalsComponents/SlidingCard";
import { useSelector } from "react-redux";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function Section2() {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <Box sx={{ flexGrow: 1, my: { xs: 8, sm: 10, md: 15 } }}>
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
              mb: { xs: 2, sm: 3, md: 5 },
              display: "inline-block",
              backgroundColor: isDarkMode ? "deepGray.main" : "redCustom.main",
              color: isDarkMode ? "whiteCustom.main" : "whiteCustom.main",
              borderRadius: "25% 0 25% 0",
              border: 2,
              boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            }}
            variant="h6"
            gutterBottom>
            SPECIAL OFFER FOR YOU{" "}
            <span
              style={{
                fontSize: "35px",
              }}>
              🎉
            </span>
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Your{" "}
            <Typography
              variant="h2"
              component={"span"}
              sx={{
                color: "redCustom.main",
                fontWeight: "bold",
              }}>
              successful
            </Typography>{" "}
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
          <Box
            mt={{
              xs: 5,
              sm: 6,
              md: 7,
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Link to={"/apply-now"}>
              <HoverNAnimation isAnimate={true}>
                <Button
                  sx={{
                    fontSize: { xs: 14, sm: 25, md: 35 },
                    borderRadius: 15,
                    py: 3,
                    px: { xs: 3, sm: 4, md: 5 },
                    bgcolor: "redCustom.main",
                    color: "whiteCustom.main",
                    transition: "all 0.6s",
                    "&:hover": {
                      bgcolor: "accent.main",
                    },
                  }}
                  variant="contained"
                  size="large">
                  Apply Now{" "}
                  <DoubleArrowIcon
                    sx={{ fontSize: { xs: 14, sm: 25, md: 35 } }}
                  />
                </Button>
              </HoverNAnimation>
            </Link>
            <Link to={"/blogs"}>
              <HoverNAnimation>
                <Button
                  sx={{
                    fontSize: { xs: 14, sm: 25, md: 35 },
                    borderRadius: 15,
                    py: 3,
                    px: { xs: 3, sm: 4, md: 5 },
                    bgcolor: isDarkMode ? "deepGray.main" : "black.main",
                    color: "whiteCustom.main",
                    transition: "all 0.6s",
                    "&:hover": {
                      bgcolor: "accent.main",
                    },
                  }}
                  variant="contained"
                  size="large">
                  Learn More{" "}
                  <DoubleArrowIcon
                    sx={{ fontSize: { xs: 14, sm: 25, md: 35 } }}
                  />
                </Button>
              </HoverNAnimation>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <SlidingCard
              animationA={"translateX(0)"}
              animationB={"translateX(-200%)"}>
              <CardMedia
                sx={{
                  position: "relative",
                  top: { xs: "-10px", md: "-65px" },
                  left: { xs: "100px", md: "475px" },
                  maxWidth: "150px",
                  maxHeight: "150px",
                }}
                component="img"
                alt="plan"
                image={planImg}
              />
              <CardMedia
                sx={{
                  position: "relative",
                  // top: "-65px",
                  left: { xs: "25px" },
                  maxWidth: "160px",
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
                  maxWidth: "440px",
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
