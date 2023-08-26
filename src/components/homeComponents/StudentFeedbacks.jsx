import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import StarIcon from "@mui/icons-material/Star";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
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
} from "@mui/material";
import styled from "@emotion/styled";

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
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
export default function StudentFeedbacks() {
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);
  return (
    <>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", textAlign: "center", mt: "122px" }}>
        Our student feedbacks
      </Typography>

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
        style={{
          zIndex: 0,
          height: "60vh",
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper">
        {Array.from({ length: 6 }).map((_, i) => (
          <SwiperSlide key={i}>
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
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot">
                    <Avatar
                      sx={{ width: 90, height: 90 }}
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
                  </StyledBadge>
                  <Box>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ mt: 1 }}>
                        {labels[hover !== -1 ? hover : value]}
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
                    <Typography gutterBottom variant="h6">
                      McDonald
                    </Typography>
                    <Typography gutterBottom variant="h6">
                      from Italy
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
        <Button
          sx={{
            py: 3,
            px: 6,
          }}
          variant="contained"
          size="large">
          See More
        </Button>
      </Box>
    </>
  );
}
