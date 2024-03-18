import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardMedia, Container, Typography } from "@mui/material";
import headerImg from "../../assets/headerImg.svg";
import planImg from "../../assets/Icon/9.svg";
import ellipse2 from "../../assets/Icon/8.svg";
import { Link } from "react-router-dom";
import SlidingCard from "../../globalsComponents/SlidingCard";
import { useSelector } from "react-redux";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import bgGradient from "../../assets/backgrounds/side-wave_background.svg";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Section2() {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <Box
      sx={{
        background: isDarkMode ? "" : `url(${bgGradient})`,
        backgroundSize: "cover",
      }}>
      <Container maxWidth="xl" sx={{ py: { xs: 8, sm: 10, md: 15 } }}>
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
                textAlign: "center",
                px: { xs: 1, sm: 3, md: 4 },
                py: 1,
                mb: { xs: 4, sm: 5, md: 5 },
                mt: { xs: -6, },
                display: { xs: "block", sm: "inline-flex", md: "inline-flex" },
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isDarkMode
                  ? "deepGray.main"
                  : "redCustom.main",
                color: isDarkMode ? "whiteCustom.main" : "whiteCustom.main",
                borderRadius: "8px",
                border: 2,
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              }}
              variant="h6"
              gutterBottom>
              SPECIAL OFFER FOR YOU{" "}
              <CampaignIcon
                sx={{
                  fontSize: { xs: 28, sm: 32, md: 35 },
                }}
              />
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              Your{" "}
              <Typography
                variant="h4"
                component={"span"}
                sx={{
                  color: "success.main",
                  fontWeight: "bold",
                }}>
                successful
              </Typography>{" "}
              journey start with us!
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "justify" }}
              gutterBottom>
              At DreamEdu, we are confident in our ability to guide you towards
              a successful study abroad experience. That's why we offer a Study
              Abroad Guarantee. If you don't secure admission to at least one of
              your top 3 chosen universities after completing our comprehensive
              application package, we will provide you with a full refund of
              your program fees. This guarantee demonstrates our commitment to
              your success and gives you peace of mind as you embark on your
              study abroad journey.
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
                      borderRadius: 15,
                      py: 0.5,
                      px: { xs: 2, sm: 2, md: 2.5 },
                      bgcolor: "redCustom.main",
                      color: "#fff",
                      transition: "all 0.6s ease",
                      "&:hover": {
                        bgcolor: "btnHover.main",
                        transform: "scale(1.2)",
                      },
                    }}
                    variant="contained"
                    size="large">
                    Apply Now{" "}
                    <DoubleArrowIcon
                      sx={{ fontSize: { xs: 11, sm: 15, md: 22 } }}
                    />
                  </Button>
                </HoverNAnimation>
              </Link>
              <Link to={"/blogs"}>
                <HoverNAnimation>
                  <Button
                    sx={{
                      borderRadius: 15,
                      py: 0.5,
                      px: { xs: 2, sm: 2, md: 2.5 },
                      bgcolor: "redCustom.main",
                      color: "#fff",
                      transition: "all 0.6s ease",
                      "&:hover": {
                        bgcolor: "btnHover.main",
                        transform: "scale(1.2)",
                      },
                    }}
                    variant="contained"
                    size="large">
                    Learn More{" "}
                    <ArrowCircleRightIcon
                      sx={{ fontSize: { xs: 11, sm: 15, md: 22 } }}
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
                animationB={"translateX(-110%)"}>
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
                    top:{xs: "45px"}
                  }}
                  component="img"
                  alt="green iguana"
                  image={headerImg}
                />
              </SlidingCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
