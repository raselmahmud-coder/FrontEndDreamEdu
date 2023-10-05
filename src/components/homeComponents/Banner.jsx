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
import img1 from "../../assets/001.jpg";
import img2 from "../../assets/002.jpg";
import img3 from "../../assets/003.jpg";
import img4 from "../../assets/004.jpg";
import { Typography } from "@mui/material";

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
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        <SwiperSlide style={{ position: "relative" }}>
          <img src={img1} alt="" />
          <Typography variant="h4" style={{ position: "absolute", right: "100px" }}>
            Study Smart, Go Global
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <Typography variant="h4" style={{ position: "absolute", right: "40px" }}>
            Your Pathway to Overseas Education
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <Typography variant="h4" style={{ position: "absolute", left: "40px" }}>
          Chart Your Course to Success
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <Typography variant="h4" style={{ position: "absolute", right: "40px" }}>
          Seize Opportunities Worldwide
          </Typography>
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
