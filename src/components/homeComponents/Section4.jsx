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
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import sichuanLogo from "../../assets/sichuan.png";
import airplane from "../../assets/plane left side.png";
import mountain from "../../assets/mountant.png";
import { useGetUniversitiesQuery } from "../../features/Universities/universitiesAPI";
import YouTubeSkeleton from "../../globals/YouTubeSkeleton";

const Section4 = () => {
  const { data: getUniversities, isLoading, error } = useGetUniversitiesQuery();
  console.log(getUniversities, "from section 4");

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
        {isLoading
          ? Array.from(new Array(3)).map((_, index) => (
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
                      <Typography
                        variant="body2"
                        color="text.secondary"></Typography>
                    </Skeleton>
                    <Skeleton variant="text" width={"100%"} height={30}>
                      <Typography
                        variant="body2"
                        color="text.secondary"></Typography>
                    </Skeleton>
                    <Skeleton variant="text" width={"100%"} height={30}>
                      <Typography
                        variant="body2"
                        color="text.secondary"></Typography>
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
            ))
          : getUniversities?.universitys.map(
              ({ id, name, description, logo }) => (
                <Grid item xs={2} sm={4} md={4} key={id}>
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
                        alt={name}
                        src={logo}
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
                          {name}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {description}
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
              ),
            )}
        <Button
          variant="contained"
          size="large"
          sx={{
            mx: "auto",
            my: "29px",
          }}>
          Load more
        </Button>
      </Grid>
    </>
  );
};

export default Section4;
