import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/bannerStyle.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../assets/Slider_Design/001 copy.jpg";
import img2 from "../../assets/Slider_Design/002 copy.jpg";
import img3 from "../../assets/Slider_Design/003 copy1.jpg";
import img4 from "../../assets/Slider_Design/004.jpg";
import img5 from "../../assets/Slider_Design/005.jpg";
import { Box } from "@mui/material";

const BannerCarousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        <SwiperSlide style={{ position: "relative" }}>
          <Box
            component="img"
            style={{
              maxWidth: "100%",
              height: "auto",
              padding:"0",
              margin:"0"
            }}
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            style={{
              maxWidth: "100%",
              height: "auto",
              padding:"0",
              margin:"0"
            }}
            src={img2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            style={{
              maxWidth: "100%",
              height: "auto",
              padding:"0",
              margin:"0"
            }}
            src={img3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            style={{
              maxWidth: "100%",
              height: "auto",
              padding:"0",
              margin:"0"
            }}
            src={img4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            style={{
              maxWidth: "100%",
              height: "auto",
              padding:"0",
              margin:"0"
            }}
            src={img5}
            alt=""
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};
export default BannerCarousel;
