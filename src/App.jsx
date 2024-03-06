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
import { AlertProvider } from "./hooks/useAlert";
import GalleryPage from "./pages/GalleryPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const NotFoundPage = lazy(() => import("./globalsComponents/NotFoundPage"));
const ImportantTipsPage = lazy(() => import("./pages/BlogsPage"));
const SuccessStoryPage = lazy(() => import("./pages/SuccessStoryPage"));
const SingleBlogPostPage = lazy(() => import("./pages/SingleBlogPostPage"));
const ApplyForAdmissionPage = lazy(() =>
  import("./pages/ApplyForAdmissionPage"),
);
const FreeConsultationPage = lazy(() => import("./pages/FreeConsultationPage"));
const UniversityDetailPage = lazy(() =>
  import("./pages/detailsPages/UniversityDetailPage"),
);

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
      secondary: {
        main: "#9E0105",//type of deep silver
      },
      redCustom: {
        main: "#Df0707",
      },
      accent: {
        main: "#787878",
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
        <AlertProvider>
          <Suspense fallback={<LazyLoading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blogs" element={<ImportantTipsPage />} />
              <Route path="/blogs/:id" element={<SingleBlogPostPage />} />
              <Route
                path="/blogs/category/:categoryId"
                element={<ImportantTipsPage />}
              />
              <Route path="/success-story" element={<SuccessStoryPage />} />
              <Route path="/contact-us" element={<FreeConsultationPage />} />
              <Route path="/apply-now" element={<ApplyForAdmissionPage />} />
              <Route
                path="/university/:id"
                element={<UniversityDetailPage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </AlertProvider>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
