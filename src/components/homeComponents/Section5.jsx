import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import AnimatedNumber from "../../globalsComponents/AnimatedNumber";
import { useSelector } from "react-redux";
import ForwardIcon from "@mui/icons-material/Forward";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import { coreStrength } from "../../utils/fakeData";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";
import bgGradient from "../../assets/backgrounds/wave1.svg";

const Section5 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          background: isDarkMode ? "" : `url(${bgGradient})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }}>
        <Container
          maxWidth="xl"
          sx={{
            pb: { xs: 1, sm: 0, md: 0 },
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <HeadingH2
              marginTop={{ xs: -12, sm: 3, md: -6 }}
              headingH2Text={"Our Core Strengths"}
            />
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}>
            {coreStrength.length > 0 &&
              coreStrength.map(
                ({ id, animateNumber, icon, title, description }) => (
                  <Grid item xs={12} sm={6} md={6} key={id}>
                    <Card
                      variant="outlined"
                      sx={{
                        minHeight: "360px",
                        borderStyle: "solid",
                        borderWidth: "0 5px 0 5px",
                        borderColor:
                          (id === 1 && "#004aff") ||
                          (id === 2 && "#ffaa00") ||
                          (id === 3 && "#00784e") ||
                          (id === 4 && "#764AF1"),
                        bgcolor: isDarkMode
                          ? "deepGray.main"
                          : "silverPro.main",
                        borderRadius: "20px",
                        "&:hover": {
                          transition: "all 0.4s",
                          transform: "scale(1.05)",
                          bgcolor: "primary.main",
                        },
                      }}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}>
                          <Box
                            component="img"
                            loading="lazy"
                            style={{
                              width: "100px",
                              height: "100px",
                              // ml:12
                            }}
                            src={icon}
                          />
                        </Box>
                        <Typography
                          variant="h4"
                          sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            my: 4,
                            color: isDarkMode
                              ? "whiteCustom.main"
                              : "redCustom.main",
                          }}
                          gutterBottom>
                          <AnimatedNumber value={animateNumber} />+ {title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            px: 7,
                            color: "whiteCustom.main",
                            textAlign: "justify",
                          }}>
                          {description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ),
              )}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: {xs:"center",sm: "end",md:"end"},
              my: { xs: 5, sm: 9, md: 14 },
            }}>
            <Link to="/contact-us">
              <HoverNAnimation isAnimate={true}>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: { xs: 11, sm: 15, md: 22 },
                    borderRadius: 15,
                    py: 2,
                    px: { xs: 2, sm: 3, md: 4 },
                    bgcolor: "btnHover.main",
                    color: "whiteCustom.main",
                    transition: "all 0.6s",
                    "&:hover": {
                      bgcolor: "accent.main",
                    },
                  }}
                  size="large">
                  Get Free Consultation
                  <ForwardIcon
                    sx={{
                      fontSize: { xs: 11, sm: 15, md: 22 },
                    }}
                  />
                </Button>
              </HoverNAnimation>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Section5;
