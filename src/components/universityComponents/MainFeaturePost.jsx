import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const mainFeaturedPost = {
  image: "https://source.unsplash.com/random?wallpapers",
};

function MainFeaturedPost({ university }) {
  const { university: asAliasDetail } = university || {};
  return (
    <>
      <Paper
        sx={{
          position: "relative",
          top: 24,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${mainFeaturedPost.image})`,
          // backgroundBlendMode:"multiply"
        }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.7)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                color: "#fff",
                position: "relative",
                p: { xs: 3, md: 6 },
              }}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom>
                {asAliasDetail.name}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Typography
        sx={{
          p: 1,
          mt: 7,
        }}
        variant="body1">
        {asAliasDetail.description}
      </Typography>
    </>
  );
}

export default MainFeaturedPost;
