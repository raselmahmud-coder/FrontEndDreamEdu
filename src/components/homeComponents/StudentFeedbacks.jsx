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
  Container,
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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";
import bgGradient from "../../assets/backgrounds/page-turner.svg";
import customStyles from "../../styles/studentFeedback.module.css";

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
          background: isDarkMode ? "" : `url(${bgGradient})`,
          backgroundSize: "cover",
        }}>
        <Container maxWidth="xl" sx={{ py: { xs: 8, sm: 10, md: 15 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}>
            <HeadingH2
              marginTop={{ xs: 1, sm: 3, md: -12 }}
              headingH2Text={"Our Student Feedbacks"}
            />
          </Box>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
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
              : feedbacks.feedback.length > 0 &&
                feedbacks.feedback.map((feedback) => (
                  <SwiperSlide
                    key={feedback.id}
                    className={customStyles.studentFeedback}
                    style={{
                      borderRadius: "5px",
                    }}>
                    <Card
                      sx={{
                        backgroundColor: isDarkMode
                          ? "deepGray.main"
                          : "silverPro.main",
                        color: isDarkMode ? "whiteCustom.main" : "black.main",
                        minHeight: { md: "440px" },
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
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
                              sx={{ width: 130, height: 140 }}
                              loading="lazy"
                              alt={feedback.name}
                              src={`https://dreameduapiv1.dreameduinfo.com${feedback.Picture}`}
                            />
                          </StyledBadge>
                          <Box>
                            <Rating
                              sx={{
                                fontSize: {
                                  xs: "25px",
                                  sm: "35px",
                                  md: "35px",
                                },
                              }}
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
                              <Box
                                sx={{
                                  mt: 1,
                                  color: "btnHover.main",
                                  fontSize: {
                                    xs: "13px",
                                    sm: "15px",
                                    md: "20px",
                                  },
                                }}>
                                {labels[feedback.rating]}
                              </Box>
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
                                color: "btnHover.main",
                              }}>
                              {feedback.country}
                            </Typography>
                          </Box>
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
                              {feedback.university}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="subtitle1"
                              sx={{
                                fontWeight: "bold",
                                color: "btnHover.main",
                              }}>
                              {feedback.major}
                            </Typography>
                          </Box>
                          <FormatQuoteIcon
                            sx={{
                              color: "success.main",
                              fontSize: {
                                xs: "25px",
                                sm: "35px",
                                md: "35px",
                              },
                              rotate: "180deg",
                              display: "block",
                              textAlign: "left",
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              textAlign: "justify",
                              bgcolor: "primary.main",
                              p: 1,
                              borderRadius: 3,
                            }}>
                            {feedback.description.substring(0, 200)}...
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
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "end",
                              alignItems: "start",
                            }}>
                            <FormatQuoteIcon
                              sx={{
                                color: "success.main",
                                fontSize: {
                                  xs: "25px",
                                  sm: "35px",
                                  md: "35px",
                                },
                              }}
                            />
                          </Box>
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
                    borderRadius: 15,
                    py: 0.5,
                    px: { xs: 2, sm: 2, md: 2.5 },
                    bgcolor: "redCustom.main",
                    color: "#fff",
                    transition: "all 0.6s ease",
                    "&:hover": {
                      bgcolor: "btnHover.main",
                      transform: "scale(1.2)",
                    },
                  }}
                  variant="contained"
                  size="large">
                  View More{" "}
                  <OpenInNewIcon
                    sx={{ fontSize: { xs: 14, sm: 25, md: 35 } }}
                  />
                </Button>
              </HoverNAnimation>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}
