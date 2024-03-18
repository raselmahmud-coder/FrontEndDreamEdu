import React, { lazy } from "react";
import { Container } from "@mui/material";
import BannerCarousel from "../components/homeComponents/BannerCarousel";
const Section1 = lazy(() => import("../components/homeComponents/Section1"));
const Section2 = lazy(() => import("../components/homeComponents/Section2"));
const StudentFeedbacks = lazy(() =>
  import("../components/homeComponents/StudentFeedbacks"),
);
const Section4 = lazy(() => import("../components/homeComponents/Section4"));
const Section5 = lazy(() => import("../components/homeComponents/Section5"));
const Section6 = lazy(() => import("../components/homeComponents/Section6"));
const Section7 = lazy(() => import("../components/homeComponents/Section7"));
const YouTubeFeeds = lazy(() =>
  import("../components/homeComponents/YouTubeFeeds"),
);
const DynamicPageTitle = lazy(() =>
  import("../globalsComponents/DynamicPageTitle"),
);
const FbMessenger = lazy(() =>
  import("../components/chatingWidgets/FbMessenger"),
);
const DreamEduMethodology = lazy(() =>
  import("../components/homeComponents/DreamEduMethodology"),
);
const OfficeAddress = lazy(() =>
  import("../globalsComponents/footer/OfficeAddress"),
);
const HomePage = () => {
  return (
    <>
      <DynamicPageTitle pageTitle="Home Page" />
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 14, sm: 7, md: 8 },
        }}>
        <BannerCarousel />
      </Container>
      <Section1 />
      <DreamEduMethodology />
      <Section2 />
      <StudentFeedbacks />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <YouTubeFeeds />
      <OfficeAddress />
      <FbMessenger />
    </>
  );
};

export default HomePage;
