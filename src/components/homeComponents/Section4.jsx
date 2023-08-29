import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import airplane from "../../assets/plane left side.png";
import mountain from "../../assets/mountant.png";
import { useGetUniversitiesQuery } from "../../features/Universities/universitiesAPI";
import { Link } from "react-router-dom";
import SlidingCard from "../../globalsComponents/SlidingCard";

const Section4 = () => {
  const { data: getUniversities, isLoading, error } = useGetUniversitiesQuery();
  const handleSeeMore = (id) => {
    console.log(id, "from section 4");
  };
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
      <SlidingCard>
      <CardMedia
        sx={{ width: 240, height: 140, mx: "auto", mt: "12px" }}
        image={airplane}
        title="green"
        />
        </SlidingCard>
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
        {isLoading &&
          Array.from(new Array(3)).map((_, index) => (
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
          ))}
        {error ? (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            There is something went wrong —{" "}
            <strong>please try again later!</strong>
          </Alert>
        ) : (
          getUniversities?.universitys.map(
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
                      {description.slice(0, 100)}...
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}>
                    <Link to={`/university/${id}`}>
                      <Button
                        variant="contained"
                        size="large"
                       >
                        See More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ),
          )
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
