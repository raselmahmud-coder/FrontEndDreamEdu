import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Diversity3 } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AnimatedNumber from "../../globalsComponents/AnimatedNumber";
import SlidingCard from "../../globalsComponents/SlidingCard";
import { useSelector } from "react-redux";
import ForwardIcon from "@mui/icons-material/Forward";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import { coreStrength } from "../../utils/fakeData";
import skillsIcon from "../../assets/Icon/getAdmission.svg";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";

const Section5 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <img
          src={skillsIcon}
          loading="lazy"
          alt="skill"
          style={{
            width: "150px",
            height: "150px",
          }}
        />
        <HeadingH2
          headingH2Text={"DreamEdu's Core Strengths"}
          // headingH2Icon={CreditScoreIcon}
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
          coreStrength.map(({ id, animateNumber, icon, title }) => (
            <Grid item xs={12} sm={6} md={6} key={id}>
              <Card
                variant="outlined"
                sx={{
                  borderStyle: "solid",
                  borderWidth: "0 5px 0 5px",
                  borderColor:
                    (id === 1 && "#004aff") ||
                    (id === 2 && "#ffaa00") ||
                    (id === 3 && "#00784e") ||
                    (id === 4 && "#764AF1"),
                  bgcolor:
                    (id === 1 && "#a5bfff") ||
                    (id === 2 && "#fff0d1") ||
                    (id === 3 && "#d3fff0") ||
                    (id === 4 && "#e8dfff"),
                  borderRadius: "20px",
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
                        width: "200px",
                        height: "200px",
                        // ml:12
                      }}
                      src={icon}
                    />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      my: 4,
                    }}
                    gutterBottom>
                    <AnimatedNumber value={animateNumber} />+ {title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: { xs: 5, sm: 9, md: 14 },
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
                Get Free Consultation
                <ForwardIcon
                  sx={{
                    fontSize: { xs: 14, sm: 25, md: 35 },
                  }}
                />
              </Button>
            </HoverNAnimation>
          </Link>
        </Box>
      </Grid>
    </>
  );
};

export default Section5;
