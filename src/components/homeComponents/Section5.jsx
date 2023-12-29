import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import gridImg from "../../assets/front img.jpg";
import { AvTimer, Diversity3, School } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AnimatedNumber from "../../globalsComponents/AnimatedNumber";
import SlidingCard from "../../globalsComponents/SlidingCard";

const Section5 = () => {
  return (
    <>
      <SlidingCard animationA={"translateY(0)"} animationB={"translateY(100%)"}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mt: "132px",
            mb: "40px",
          }}>
          CORE STRENGTH
        </Typography>
      </SlidingCard>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          alignItems: "center",
        }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Card
              variant="outlined"
              sx={{
                borderStyle: "solid",
                borderWidth: "0 0 0 5px",
                borderColor: "#764AF1",
                borderRadius: "20px",
              }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}>
                  <Typography variant="h3" gutterBottom>
                    <AnimatedNumber value={5} />+
                  </Typography>
                  <AutoModeIcon
                    sx={{
                      fontSize: "4rem",
                    }}
                  />
                </Box>
                <Typography variant="h4" gutterBottom>
                  Years of Experience
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                borderStyle: "solid",
                borderWidth: "0 0 0 5px",
                borderColor: "#FFC44E",
                borderRadius: "20px",
              }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}>
                  <Typography variant="h3" gutterBottom>
                    <AnimatedNumber value={576} />+
                  </Typography>
                  <AvTimer
                    sx={{
                      fontSize: "4rem",
                    }}
                  />
                </Box>
                <Typography variant="h4" gutterBottom>
                  Visa Approved
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 5,
            }}>
            <Card
              variant="outlined"
              sx={{
                borderStyle: "solid",
                borderWidth: "0 0 0 5px",
                borderColor: "#e9ecf0",
                borderRadius: "20px",
              }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}>
                  <Typography variant="h3" gutterBottom>
                    <AnimatedNumber value={226} />+
                  </Typography>
                  <Diversity3
                    sx={{
                      fontSize: "4rem",
                    }}
                  />
                </Box>
                <Typography variant="h4" gutterBottom>
                  Get Admission
                </Typography>
              </CardContent>
            </Card>
            <Card
              variant="outlined"
              sx={{
                borderStyle: "solid",
                borderWidth: "0 0 0 5px",
                borderColor: "#3c5b50",
                borderRadius: "20px",
              }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}>
                  <Typography variant="h3" gutterBottom>
                    <AnimatedNumber value={126} />+
                  </Typography>
                  <School
                    sx={{
                      fontSize: "4rem",
                    }}
                  />
                </Box>
                <Typography variant="h4" gutterBottom>
                  Get Scholarship
                </Typography>
              </CardContent>
            </Card>
          </Box>
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
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img src={gridImg} height="440" width={"100%"} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Section5;
