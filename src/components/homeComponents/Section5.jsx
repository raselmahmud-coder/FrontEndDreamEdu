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
import { useSelector } from "react-redux";
import ForwardIcon from '@mui/icons-material/Forward';

const Section5 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <>
      <SlidingCard animationA={"translateY(0)"} animationB={"translateY(100%)"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography
            sx={{
              mt: { xs: 6, sm: 8, md: 12 },
              mb: { xs: 4, sm: 6, md: 8 },
              px: { xs: 1, sm: 3, md: 6 },
              py: { xs: 1, sm: 3, md: 4 },
              zIndex: 899,
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isDarkMode ? "deepGray.main" : "primary.main",
              color: isDarkMode ? "whiteCustom.main" : "secondary.main",
              borderColor: isDarkMode ? "accent.main" : "secondary.main",
              borderRadius: "25% 0 25% 0",
              border: 1,
              boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              fontWeight: "bold",
            }}
            variant="h3">
            Core Strength
            <Typography
              component={"span"}
              sx={{
                fontSize: { xs: 25, sx: 30, md: 45 },
              }}>
              💪
            </Typography>
          </Typography>
        </Box>
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
                    <AnimatedNumber value={5076} />+
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
                    <AnimatedNumber value={5126} />+
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
                    <AnimatedNumber value={4586} />+
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
                < ForwardIcon/>
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img
            src={gridImg}
            height="440"
            style={{ borderRadius: "8px" }}
            width={"100%"}
            alt="dream edu group"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Section5;
