import { Container, Button } from "@mui/material";
import React from "react";
import BannerCarousel from "../components/homeComponents/Banner";
import FacebookFeeds from "../components/homeComponents/FacebookFeeds";
import Section1 from "../components/homeComponents/Section1";
import Section2 from "../components/homeComponents/Section2";
import Section3 from "../components/homeComponents/Section3";
import Section4 from "../components/homeComponents/Section4";
import Section5 from "../components/homeComponents/Section5";
import Section6 from "../components/homeComponents/Section6";
import Section7 from "../components/homeComponents/Section7";
import YouTubeFeeds from "../components/homeComponents/YouTubeFeeds";

const HomePage = () => {
  return (
    <>
      <BannerCarousel />
      <Container maxWidth="xl">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <YouTubeFeeds/>
        <FacebookFeeds />
      </Container>
    </>
  );
};

export default HomePage;
