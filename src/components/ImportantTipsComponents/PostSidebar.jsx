import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PostSidebar = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          my: 3,
        }}>
        Recent Post
      </Typography>
      <Card>
        <Grid
          container
          // spacing={{ xs: 0.5, md: 1 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ p: 2, mb: 8, alignItems:"center" }}>
          <Grid item xs={12} sm={6} md={4}>
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "15px",
              }}
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  mb:1
                }}>
                <Typography
                  sx={{
                    bgcolor: "primary.main",
                    px: 1,
                    py:0.5,
                    borderRadius: "15px",
                  }}>
                  Education
                </Typography>
                <Typography
                  sx={{
                    bgcolor: "primary.main",
                    px: 1,
                    py:0.5,
                    borderRadius: "15px",
                  }}>
                  Author Name
                </Typography>
              </Box>
              <Typography variant="h6">
                Study Bachelor's or Master's in China
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default PostSidebar;
