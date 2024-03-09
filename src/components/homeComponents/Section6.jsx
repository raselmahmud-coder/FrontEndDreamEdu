import React from "react";
import { Badge, Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import { stepsToGetAdmission } from "../../utils/fakeData";

const Section6 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <>
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: "linear-gradient(#fffff, #cfcfcf)",
          clipPath: `polygon(0 0,100% 0,100% 100%,0 calc(100% - 5vw))`,
        }}>
        <Container
          maxWidth="xl"
          sx={{
            pb: { xs: 6, sm: 8, md: 16 },
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}>
            <HeadingH2 headingH2Text={"Get Your Admission"} />
          </Box>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}>
            {stepsToGetAdmission.map(({ id, title, description, icon }) => (
              <Grid item xs={12} sm={4} md={3} key={id}>
                <Box
                  sx={{
                    bgcolor: isDarkMode ? "deepGray.main" : "#F9f9ff",
                    color: isDarkMode ? "whiteCustom.main" : "black.main",
                    minHeight: {md:"480px"},
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    border: 2,
                    p: 2,
                    borderRadius: 2,
                    "&:hover": {
                      transition: "all 0.7s",
                      color: isDarkMode ? "redCustom.main" : "whiteCustom.main",
                      backgroundColor: isDarkMode ? "deepGray.main" : "silverPro.main",
                      transform: "scale(1.04)",
                    },
                  }}>
                  <Badge
                    overlap="circular"
                    sx={{
                      borderRadius: "50%",
                      p: 3,
                    }}
                    badgeContent={`Step ${id}`}
                    color="secondary">
                    <Box
                      loading="lazy"
                      component={"img"}
                      src={icon}
                      sx={{
                        width: "120px",
                        height: "120px",
                        border: 2,
                        borderRadius: 4,
                        p: 1,
                      }}
                    />
                  </Badge>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      mt: "32px",
                      mb: "10px",
                    }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "justify",
                      my: "9px",
                    }}>
                    {description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Section6;
