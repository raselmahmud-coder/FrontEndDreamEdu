import { Container, Button } from "@mui/material";
import React from "react";
import BannerCarousel from "../components/homeComponents/Banner";
import Section1 from "../components/homeComponents/Section1";
import Section2 from "../components/homeComponents/Section2";
import InfiniteZoomAnimation from "../components/homeComponents/Section3";
import Section3 from "../components/homeComponents/Section3";
import Section4 from "../components/homeComponents/Section4";

const HomePage = () => {
  return (
    <>
      <BannerCarousel />
      <Container maxWidth="xl">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Container>
    </>
  );
};

export default HomePage;
