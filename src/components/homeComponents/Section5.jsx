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
import gridImg from "../../assets/student-in-library.png";
import { AvTimer, Diversity3, School } from "@mui/icons-material";

const Section5 = () => {
  return (
    <>
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
                    5+
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
                    576+
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
                borderColor: "#2537ff",
                borderRadius: "20px",
              }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}>
                  <Typography variant="h3" gutterBottom>
                    225+
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
                    125+
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
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img src={gridImg} height="580" width={"100%"} alt="" />
        </Grid>
      </Grid>
    </>
  );
};

export default Section5;
