import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import airplane from "../../assets/plane left side.png";
import { useGetUniversitiesQuery } from "../../redux/feature/Universities/universitiesAPI";
import SlidingCard from "../../globalsComponents/SlidingCard";
import ErrorShow from "../../globalsComponents/ErrorShow";
import OurPartnersSkeleton from "../../Skeletons/OurPartnersSkeleton";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { useSelector } from "react-redux";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import bgGradient from "../../assets/backgrounds/wave.svg";
import customStyles from "../../styles/studentFeedback.module.css";

const Section4 = () => {
  const { data: getUniversities, isLoading, error } = useGetUniversitiesQuery();
  const { isDarkMode } = useSelector((state) => state.colorMode);

  // render component conditionally
  let content;
  if (isLoading) {
    content = <OurPartnersSkeleton />;
  } else if (error) {
    content = <ErrorShow />;
  } else if (getUniversities.length == 0) {
    content = <ErrorShow severity="warning" errorData="There is no data" />;
  } else {
    content = (
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2200,
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
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        autoHeight={true}
        style={{
          // zIndex: 0,
          minHeight: "520px",
          padding: "30px 0px",
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation, EffectCoverflow]}
        className="mySwiper">
        {getUniversities?.universitys.map(({ id, name, description, logo }) => {
          return (
            <SwiperSlide
              key={id}
              className={customStyles.studentFeedback}
              style={{
                borderRadius: "5px",
                border:"1px solid #Df0707",
                // maxHeight:"233px"
              }}>
              <Card
                sx={{
                  p: 2,
                  bgcolor: isDarkMode ? "deepGray.main" : "silverPro.main",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.7)",
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Avatar
                    sx={{ width: 150, height: 150 }}
                    alt={name}
                    src={`https://dreameduapiv1.dreameduinfo.com${logo}`}
                  />
                </Box>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <Typography
                      sx={{
                        color: "redCustom.main",
                        p: 1,
                        bgcolor: isDarkMode ? "deepGray.main" : "primary.main",
                        borderRadius: 15,
                      }}
                      gutterBottom
                      variant="h6">
                      {name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "whiteCustom.main",
                      textAlign: "justify",
                    }}>
                    {description.slice(0, 200)}...
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        background: isDarkMode ? "" : `url(${bgGradient})`,
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}>
      <Container maxWidth="xl" sx={{
          pb: { xs: 6, sm: 8, md: 16 },
        }}>
        <SlidingCard
          delay={0}
          animationA={"translateX(0px)"}
          animationB={"translateX(100%)"}>
          <CardMedia
            sx={{
              position: "absolute",
              width: { xs: 120, sm: 200, md: 240 },
              height: { xs: 60, sm: 100, md: 140 },
              mt: { xs: -9, sm: -3, md: -4 },
              overflow: "hidden",
            }}
            image={airplane}
            title="airplane"
          />
        </SlidingCard>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <HeadingH2
            marginBottom={{ xs: 3, sm: 3, md: 3 }}
            headingH2Text={"Top Universities"}
          />
        </Box>
        <Box sx={{ textAlign: "center", mx: "auto" }}>
          <Typography
            variant="h5"
            sx={{
              bgcolor: isDarkMode ? "deepGray.main" : "primary.main",
              color: isDarkMode ? "primary.main" : "redCustom.main",
              fontWeight: "500",
              px: 2,
              py: 1,
              mb: { xs: 3, sm: 4, md: 5 },
              borderRadius: 8,
              display: "inline-block",
            }}>
            We have partnered with a variety of high-quality Universities
          </Typography>
        </Box>
        {content}
      </Container>
    </Box>
  );
};

export default Section4;
