import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const BlogsCardsSkeleton = ({totalItem=3, sm = 4, md = 4 }) => {
  return (
    <>
      {Array.from(new Array(totalItem)).map((_, index) => (
        <Grid item xs={12} sm={sm} md={md} key={index}>
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
              <Skeleton variant="circular">
                <Avatar sx={{ width: 90, height: 90 }} />
              </Skeleton>
            </Box>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Skeleton width="100%" height={50}>
                  <Typography gutterBottom variant="h6"></Typography>
                </Skeleton>
              </Box>
              <Skeleton variant="text" width={"100%"} height={30}>
                <Typography variant="body2" color="text.secondary"></Typography>
              </Skeleton>
              <Skeleton variant="text" width={"100%"} height={30}>
                <Typography variant="body2" color="text.secondary"></Typography>
              </Skeleton>
              <Skeleton variant="text" width={"100%"} height={30}>
                <Typography variant="body2" color="text.secondary"></Typography>
              </Skeleton>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
              }}>
              <Skeleton variant="rectangular" width={200} height={70}>
                <Button variant="contained" size="large"></Button>
              </Skeleton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default BlogsCardsSkeleton;
