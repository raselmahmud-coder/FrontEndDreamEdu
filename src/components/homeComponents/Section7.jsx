import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import FrequentlyAskQuestion from "./FrequentlyAskQuestion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ForwardIcon from "@mui/icons-material/Forward";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";

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
          <HeadingH2 headingH2Text={"Mostly Asked Query"} headingH2Icon={HelpOutlineIcon}/>
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
