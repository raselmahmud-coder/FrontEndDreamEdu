import React from "react";
// import required modules
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Badge,
  Typography,
  Rating,
  Box,
  Button,
  Skeleton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import StarIcon from "@mui/icons-material/Star";
import styled from "@emotion/styled";
import { useGetFeedbacksQuery } from "../../redux/feature/Studentfeedbak/StudentFeedbackAPI";
import ErrorShow from "../../globalsComponents/ErrorShow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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
  3: "Ok+",
  4: "Good+",
  5: "Excellent+",
};

export default function StudentFeedbacks() {
  const { data: feedbacks, isLoading, isError } = useGetFeedbacksQuery();
  const { isDarkMode } = useSelector((state) => state.colorMode);

  // render the loading state
  if (isError) {
    return <ErrorShow errorData={"Something went wrong"} />;
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          sx={{
            mt: { xs: 6, sm: 8, md: 12 },
            mb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 1, sm: 3, md: 6 },
            py: { xs: 1, sm: 3, md: 4 },
            zIndex: 899,
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkMode ? "deepGray.main" : "primary.main",
            color: isDarkMode ? "whiteCustom.main" : "secondary.main",
            borderColor: isDarkMode ? "accent.main" : "secondary.main",
            borderRadius: "25% 0 25% 0",
            border: 1,
            fontWeight: "bold",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
          variant="h3">
          Our Student Feedbacks
          <AutoModeIcon
            sx={{
              fontSize: { xs: "45px", sm: "90px", md: "125px" },
              ml: { xs: 2, sm: 3, md: 4 },
            }}
          />
        </Typography>
      </Box>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        autoHeight={true}
        style={{
          zIndex: 0,
          height: "30vh",
          margin: "30px 0px",
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper">
        {isLoading
          ? Array.from(new Array(4)).map((_, index) => (
              <SwiperSlide key={index}>
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
                            value={5}
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
              </SwiperSlide>
            ))
          : feedbacks.feedback.map((feedback) => (
              <SwiperSlide
                key={feedback.id}
                style={{
                  borderRadius: "4px",
                  // maxHeight:"233px"
                }}>
                <Card
                  sx={
                    {
                      // minHeight:"355px"
                    }
                  }>
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
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot">
                        <Avatar
                          sx={{ width: 90, height: 90 }}
                          alt={feedback.name}
                          src={`https://dreameduapiv1.dreameduinfo.com${feedback.Picture}`}
                        />
                      </StyledBadge>
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
                        {feedback.description.slice(0, 100)}...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            ))}
      </Swiper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Link to="/success-story">
          <Button
            sx={{
              py: 3,
              px: 6,
            }}
            variant="contained"
            size="large">
            See More
            <OpenInNewIcon sx={{ fontSize: 25 }} />
          </Button>
        </Link>
      </Box>
    </>
  );
}
