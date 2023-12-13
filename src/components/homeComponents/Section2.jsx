import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import headerImg from "../../assets/header-img.png";
import ellipse1 from "../../assets/Ellipse-01.png";
import planImg from "../../assets/plane.png";
import ellipse2 from "../../assets/Ellipse-02.png";
import { Link } from "react-router-dom";
import SlidingCard from "../../globalsComponents/SlidingCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Section2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h6" gutterBottom>
            SPECIAL OFFER FOR YOU <span style={{
              color: "red",
              fontSize: "35px",
              }}>🎉</span>
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Your{" "}
            <span
              style={{
                color: "red",
              }}>
              successful
            </span>{" "}
            journey start with us!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
          DreamEdu offers a comprehensive range of services designed to assist students at every stage of their educational journey
          </Typography>
          <Typography
            component={"div"}
            mt={{
              xs: 5,
              md: 7,
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Link to={"/apply-for-admission"}>
              <Button
                sx={{
                  py: 3,
                  px: 6,
                }}
                variant="contained"
                size="large">
                Apply Now
              </Button>
            </Link>
            <Link to={"/important-tips"}>
              <Button
                sx={{
                  py: 3,
                  px: 6,
                }}
                variant="outlined"
                size="large">
                Learn More
              </Button>
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <SlidingCard
              animationA={"translateX(0)"}
              animationB={"translateX(-200%)"}>
              <CardMedia
                sx={{
                  position: "relative",
                  top: "-65px",
                  left: "375px",
                  maxWidth: "100%",
                  maxHeight: "120px",
                }}
                component="img"
                alt="green iguana"
                image={planImg}
              />
            <CardMedia
              sx={{
                // position: "relative",
                // top: "-65px",
                // left: "375px",
                maxWidth: "100%",
                maxHeight: "160px",
              }}
              component="img"
              alt="Ellipse"
              image={ellipse2}
              />
              </SlidingCard>
              <SlidingCard animationA={"translateY(0)"}
              animationB={"translateY(100%)"}>
            <CardMedia
              sx={{
                maxWidth: "420px",
                right: "0px",
                position: "relative",
                // maxHeight: "220px",
              }}
              component="img"
              alt="green iguana"
              image={headerImg}
              />
              </SlidingCard>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
