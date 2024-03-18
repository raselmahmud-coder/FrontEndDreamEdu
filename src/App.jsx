import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./globalsComponents/NavBar/ResponsiveAppBar";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import LazyLoading from "./globalsComponents/LazyLoading";
import { darkTheme } from "./utils/createTheme";
const YouTubeFeeds = lazy(() =>
  import("./components/homeComponents/YouTubeFeeds"),
);
const Footer = lazy(() => import("./globalsComponents/footer/Footer"));

const EventsPage = lazy(() => import("./pages/EventsPage"));
const EventSinglePage = lazy(() =>
  import("./components/EventsComponents/EventSinglePage"),
);
const PhotoGalleryPage = lazy(() => import("./pages/PhotoGalleryPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const NotFoundPage = lazy(() => import("./globalsComponents/NotFoundPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const SuccessStoryPage = lazy(() => import("./pages/SuccessStoryPage"));
const SingleBlogPostPage = lazy(() => import("./pages/SingleBlogPostPage"));
const ApplyForAdmissionPage = lazy(() =>
  import("./pages/ApplyForAdmissionPage"),
);
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));

const App = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);


  const responsiveTheme = responsiveFontSizes(darkTheme(isDarkMode));
  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Suspense fallback={<LazyLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/event/:id" element={<EventSinglePage />} />
            <Route path="/gallery" element={<PhotoGalleryPage />} />
            <Route
              path="/all-videos"
              element={<YouTubeFeeds maxResults={100} />}
            />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<SingleBlogPostPage />} />
            <Route path="/blogs/category/:categoryId" element={<BlogsPage />} />
            <Route path="/success-story" element={<SuccessStoryPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/apply-now" element={<ApplyForAdmissionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
