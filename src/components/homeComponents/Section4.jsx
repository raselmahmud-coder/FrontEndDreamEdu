import {
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
import { useGetUniversitiesQuery } from "../../redux/feature/Universities/universitiesAPI";
import { Link } from "react-router-dom";
import SlidingCard from "../../globalsComponents/SlidingCard";
import ErrorShow from "../../globalsComponents/ErrorShow";
import OurPartnersSkeleton from "../../Skeletons/OurPartnersSkeleton";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";

const Section4 = () => {
  const { data: getUniversities, isLoading, error } = useGetUniversitiesQuery();

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
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
        // slidesPerView={1}
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoHeight={true}
        style={{
          zIndex: 0,
          height: "40vh",
          margin: "30px 0px",
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectCoverflow,]}
        className="mySwiper">
        {getUniversities?.universitys.map(({ id, name, description, logo }) => {
          return (
            <Grid item xs={12} sm={4} md={4} key={id}>
              <SwiperSlide key={id} style={{
              borderRadius: "4px",
                // maxHeight:"233px"
              }}>
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
                    <Typography gutterBottom variant="h6">
                      {name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {description.slice(0, 200)}...
                  </Typography>
                </CardContent>
                {/* <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
              }}>
              <Link to={`/university/${id}`}>
                <Button variant="contained" size="large">
                  See More
                </Button>
              </Link>
            </CardActions> */}
                </Card>
                </SwiperSlide>
            </Grid>
          );
        })}
      </Swiper>
    );
  }

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
      <SlidingCard
        animationA={"translateX(0px)"}
        animationB={"translateX(80%)"}>
        <CardMedia
          sx={{
            width: 240,
            height: 140,
            mx: "auto",
            mt: "12px",
            overflow: "hidden",
          }}
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
        {content}
      </Grid>
    </>
  );
};

export default Section4;
