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
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AutoModeIcon from "../../assets/Icon/feedback.svg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";
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
  const navigate = useNavigate();
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
          flexDirection: { xs: "column", md: "row" },
        }}>
        <Box
          component="img"
          src={AutoModeIcon}
          sx={{
            // width: "245px",
            height: { xs: "100px", sm: "120px", md: "235px" },
          }}
          alt="icon"
        />
        <HeadingH2
          headingH2Text={"Our Student Feedbacks"}
          // headingH2Icon={AutoModeIcon}
        />
      </Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
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
        // autoHeight={true}
        style={{
          zIndex: 0,
          // height: "40vh",
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
          : feedbacks.feedback.slice(0, 11).map((feedback) => (
              <SwiperSlide
                key={feedback.id}
                style={{
                  borderRadius: "4px",
                  // maxHeight:"433px"
                }}>
                <Card
                  sx={{
                    backgroundColor: "redCustom.main",
                    color: "whiteCustom.main",
                    minHeight: "365px",
                  }}>
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
                          sx={{ width: 90, height: 100 }}
                          loading="lazy"
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
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          sx={{
                            fontWeight: "bold",
                          }}>
                          {feedback.name}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          sx={{
                            fontWeight: "bold",
                          }}>
                          {feedback.country}
                        </Typography>
                      </Box>
                      <Typography variant="body1">
                        <FormatQuoteIcon
                          sx={{
                            fontSize: { xs: "25px", sm: "35px", md: "35px" },
                            rotate: "180deg",
                          }}
                        />
                        {feedback.description.slice(0, 140)}...
                        <Box
                          component={"span"}
                          onClick={() => navigate("/success-story")}
                          sx={{
                            fontWeight: "bold",
                            "&:hover": {
                              transition: "all 0.3s",
                              color: "deepGray.main",
                            },
                          }}>
                          See More
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "start",
                            marginTop: "-20px",
                          }}>
                          <FormatQuoteIcon
                            sx={{
                              fontSize: { xs: "25px", sm: "35px", md: "35px" },
                            }}
                          />
                        </Box>
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
        <Link to={"/success-story"}>
          <HoverNAnimation>
            <Button
              sx={{
                fontSize: { xs: 14, sm: 25, md: 35 },
                borderRadius: 15,
                py: 3,
                px: { xs: 3, sm: 4, md: 5 },
                bgcolor: isDarkMode ? "deepGray.main" : "black.main",
                color: "whiteCustom.main",
                transition: "all 0.6s",
                "&:hover": {
                  bgcolor: "accent.main",
                },
              }}
              variant="contained"
              size="large">
              View More{" "}
              <OpenInNewIcon sx={{ fontSize: { xs: 14, sm: 25, md: 35 } }} />
            </Button>
          </HoverNAnimation>
        </Link>
      </Box>
    </>
  );
}
