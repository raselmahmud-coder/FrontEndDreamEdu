import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Rating,
  Skeleton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import styled from "@emotion/styled";
import { useGetFeedbacksQuery } from "../../redux/feature/Studentfeedbak/StudentFeedbackAPI";
import ErrorShow from "../../globalsComponents/ErrorShow";
import { useSelector } from "react-redux";
import feedbacksIcon from "../../assets/Icon/feedback.svg";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const labels = {
  1: "Useless+",
  2: "Poor",
  3: "Okay+",
  4: "Good+",
  5: "Excellent+",
};
const SSComp = () => {
  const { data: feedbacks, isLoading, isError } = useGetFeedbacksQuery();
  // render the loading state
  let content;
  if (isLoading) {
    content = (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2 }}>
        {Array.from(new Array(4)).map((_, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card>
              <CardActionArea
                sx={{
                  p: 1,
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    variant="dot">
                    <Skeleton variant="circular">
                      <Avatar
                        sx={{ width: 90, height: 90 }}
                        alt="Remy Sharp"
                        src="https://mui.com/static/images/avatar/1.jpg"
                      />
                    </Skeleton>
                  </StyledBadge>
                  <Box>
                    <Skeleton
                      variant="rounded"
                      width={"100%"}
                      height={30}
                      animation="wave">
                      <Rating
                        name="read-only"
                        readOnly
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Skeleton>
                    <Skeleton
                      sx={{ mt: 2 }}
                      width={"100%"}
                      variant="text"
                      animation="wave"
                      height={25}></Skeleton>
                  </Box>
                </Box>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "20px",
                    }}>
                    <Skeleton
                      variant="text"
                      width="50%"
                      height={20}
                      animation="wave"></Skeleton>
                    <Skeleton
                      variant="text"
                      width="50%"
                      height={20}
                      animation="wave"></Skeleton>
                  </Box>
                  <Skeleton width="100%" height={90} variant="text">
                    <Typography
                      variant="body2"
                      color="text.secondary"></Typography>
                  </Skeleton>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  } else if (isError) {
    content = <ErrorShow errorData={"Something went wrong"} />;
  } else if (!isLoading && !isError && feedbacks.feedback.length) {
    content = (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2 }}>
        {feedbacks.feedback.map((feedback) => (
          <Grid item xs={12} sm={6} md={6} key={feedback.id}>
            <Card>
              <CardActionArea
                sx={{
                  p: 1,
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  
                    <img
                      style={{ width: "50%", height: 390 }}
                      loading="lazy"
                      alt={feedback.name}
                      src={`https://dreameduapiv1.dreameduinfo.com${feedback.Picture}`}
                    />
                  
                  <Box>
                    <Rating
                      name="read-only"
                      readOnly
                      value={feedback.rating}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {feedback.rating && (
                      <Box sx={{ mt: 1 }}>{labels[feedback.rating]}</Box>
                    )}
                  </Box>
                </Box>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Typography gutterBottom variant="subtitle1">
                      {feedback.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      {feedback.country}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {feedback.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}>
        <img
          src={feedbacksIcon}
          style={{
            // width: "245px",
            height: "235px",
          }}
          alt="icon"
        />
        <HeadingH2 headingH2Text={"Our Success Story"} />
      </Box>
      {content}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}></Box>
    </>
  );
};

export default SSComp;
