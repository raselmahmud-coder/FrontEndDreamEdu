import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import FrequentlyAskQuestion from "./FrequentlyAskQuestion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ForwardIcon from "@mui/icons-material/Forward";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";

const Section7 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <Box
      sx={{
        my: "80px",
      }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          alignItems: "center",
        }}>
        <Grid item xs={12} sm={6} md={6}>
          <HeadingH2 headingH2Text={"Mostly Asked Query"} />
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
                  size="large">
                  Ask Your Question
                  <HelpOutlineIcon
                    sx={{
                      fontSize: { xs: 14, sm: 25, md: 35 },
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
    </Box>
  );
};

export default Section7;
