import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FrequentlyAskQuestion from "./FrequentlyAskQuestion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";
import bgGradient from "../../assets/backgrounds/subtle-prism.svg";

const Section7 = () => {
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
            pb: { xs: 6, sm: 8, md: 16 },
          }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              // alignItems: "center",
            }}>
            <Grid item xs={12} sm={6} md={6}>
              <HeadingH2 marginTop={{ xs: 1, md: -6 }} headingH2Text={"Frequently Asked Question"} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: "32px",
                }}>
                Still do you have any questions to know?
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  my: "32px",
                }}>
                Feel free to ask our experts here⬇️
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  my: { xs: 3, sm: 6, md: 9 },
                }}>
                <Link to="/contact-us">
                  <HoverNAnimation isAnimate={true}>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: 15,
                        py: 0.5,
                        px: { xs: 2, sm: 2, md: 2.5 },
                        bgcolor: "btnHover.main",
                        color: "whiteCustom.main",
                        transition: "all 0.6s",
                        "&:hover": {
                          bgcolor: "accent.main",
                        },
                      }}
                      size="large">
                      Ask Your Question
                      <HelpOutlineIcon
                        sx={{
                          fontSize: { xs: 14, sm: 16, md: 18 },
                        }}
                      />
                    </Button>
                  </HoverNAnimation>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FrequentlyAskQuestion />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Section7;
