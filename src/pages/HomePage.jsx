import React from "react";
import { Container } from "@mui/material";
import BannerCarousel from "../components/homeComponents/Banner";
import Section1 from "../components/homeComponents/Section1";
import Section2 from "../components/homeComponents/Section2";
import StudentFeedbacks from "../components/homeComponents/StudentFeedbacks";
import Section4 from "../components/homeComponents/Section4";
import Section5 from "../components/homeComponents/Section5";
import Section6 from "../components/homeComponents/Section6";
import Section7 from "../components/homeComponents/Section7";
import YouTubeFeeds from "../components/homeComponents/YouTubeFeeds";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";
import FbMessenger from "../components/chatingWidgets/FbMessenger";
import DreamEduMethodology from "../components/homeComponents/DreamEduMethodology";

const HomePage = () => {
  return (
    <>
      <DynamicPageTitle pageTitle="Home Page" />
      <Container maxWidth="xl" sx={{
          mt: { xs: 18, md: 14 },
        }}>
      <BannerCarousel />
        <Section1 />
        <DreamEduMethodology/>
        <Section2 />
        <StudentFeedbacks />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <YouTubeFeeds />
      </Container>
      <FbMessenger />
    </>
  );
};

export default HomePage;
