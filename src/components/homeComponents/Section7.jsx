import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import FrequentlyAskQuestion from "./FrequentlyAskQuestion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ForwardIcon from "@mui/icons-material/Forward";

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
          <Typography
            sx={{
              mt: { xs: 6, sm: 8, md: 12 },
              mb: { xs: 4, sm: 6, md: 8 },
              px: { xs: 1, sm: 3, md: 6 },
              py: { xs: 1, sm: 3, md: 4 },
              backgroundColor: isDarkMode ? "deepGray.main" : "primary.main",
              color: isDarkMode ? "whiteCustom.main" : "secondary.main",
              borderColor: isDarkMode ? "accent.main" : "secondary.main",
              borderRadius: "25% 0 25% 0",
              border: 1,
              fontWeight: "bold",
              boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            }}
            variant="h3">
            Frequently asked question
            <HelpOutlineIcon
              sx={{
                fontSize: { xs: "25px", sm: "35px", md: "45px" },
                ml: { xs: 1, sm: 1.5, md: 2 },
              }}
            />
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              my: "32px",
            }}>
            Still do you have any questions to know?
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              my: "32px",
            }}>
            Feel free to ask our experts here.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 34,
            }}>
            <Link to="/free-consultation">
              <Button
                variant="contained"
                sx={{
                  py: 3,
                  px: 5,
                  borderRadius: "50px",
                }}
                size="large">
                Ask your question <ForwardIcon />
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <FrequentlyAskQuestion />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section7;
