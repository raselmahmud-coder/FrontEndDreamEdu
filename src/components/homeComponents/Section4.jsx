import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import sichuanLogo from "../../assets/sichuan.png";
import airplane from "../../assets/plane left side.png";
import mountain from "../../assets/mountant.png";

const Section4 = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", textAlign: "center", mt: "42px" }}>
        Top Destination Universities
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", mt: "12px" }}>
        We have quality partners in variety of destinations around the globe.
      </Typography>

      <CardMedia
        sx={{ width: 240, height: 140, mx: "auto", mt: "12px" }}
        image={airplane}
        title="green"
      />

      <img
        width="100%"
        height="100px"
        src={mountain}
        alt={"title"}
        loading="lazy"
      />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(new Array(6)).map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card
              sx={{
                p: 1,
              }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Avatar
                  sx={{ width: 90, height: 90 }}
                  alt="university"
                  src={sichuanLogo}
                />
              </Box>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Typography gutterBottom variant="h6">
                    Sichuan University
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}>
                <Button variant="contained" size="large">
                  See More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section4;
