import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./globalsComponents/NavBar/ResponsiveAppBar";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./globalsComponents/footer/Footer";
import LazyLoading from "./globalsComponents/LazyLoading";
import { useSelector } from "react-redux";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import EventSinglePage from "./components/EventsComponents/EventSinglePage";
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const NotFoundPage = lazy(() => import("./globalsComponents/NotFoundPage"));
const ImportantTipsPage = lazy(() => import("./pages/BlogsPage"));
const SuccessStoryPage = lazy(() => import("./pages/SuccessStoryPage"));
const SingleBlogPostPage = lazy(() => import("./pages/SingleBlogPostPage"));
const ApplyForAdmissionPage = lazy(() =>
  import("./pages/ApplyForAdmissionPage"),
);
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));

const App = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "rgb(208 208 208)", //type of silver
      },
      silverPro: {
        main: "#C0C0C0", //type of silver Pro
      },
      accent: {
        main: "#EEEEEE", //type of Gallery silver
      },
      secondary: {
        main: "#9E0105",
      },
      redCustom: {
        main: "#Df0707",
      },
      success: {
        main: "#5cb85c",
      },
      black: {
        main: "#000",
      },
      whiteCustom: {
        main: "#fff",
      },
      deepGray: {
        main: "#272727",
      },
      btnHover: {
        main: "#0A7CFF", //type of blue
      },
      linkHover: {
        main: "#0000EE", //type of blue dip
      },
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      h2: {
        "@media (max-width: 400px)": {
          fontSize: 22,
        },
      },
      h3: {
        "@media (max-width: 400px)": {
          fontSize: 19,
        },
      },
      h4: {
        "@media (max-width: 400px)": {
          fontSize: 18,
        },
      },
      h5: {
        "@media (max-width: 400px)": {
          fontSize: 16,
        },
      },
      h6: {
        "@media (max-width: 400px)": {
          fontSize: 14,
        },
      },
      subtitle1: {
        "@media (max-width: 400px)": {
          fontSize: 12,
        },
      },
      body1: {
        "@media (max-width: 400px)": {
          fontSize: 11,
        },
      },
      body2: {
        "@media (max-width: 400px)": {
          fontSize: 8,
        },
      },
    },
  });
  const responsiveTheme = responsiveFontSizes(darkTheme);
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
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blogs" element={<ImportantTipsPage />} />
              <Route path="/blogs/:id" element={<SingleBlogPostPage />} />
              <Route
                path="/blogs/category/:categoryId"
                element={<ImportantTipsPage />}
              />
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
