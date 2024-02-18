import React, { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const NotFoundPage = lazy(() => import("./globalsComponents/NotFoundPage"));
const ImportantTipsPage = lazy(() => import("./pages/ImportantTipsPage"));
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
        main: 'rgb(208 208 208)',
      },
      secondary: {
        main: '#9E0105',
      },
      redCustom: {
        main: '#9E0105',
      },
      accent: {
        main: '#004808',
      },
      black: {
        main: '#000',
      },
      whiteCustom: {
        main: '#fff',
      },
      deepGray: {
        main: '#272727',
      },
      linkedin: {
        main: '#0077b5',
      },
    },
  });
  const responsiveTheme = responsiveFontSizes(darkTheme);
  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        <ResponsiveAppBar
        />
        <Suspense fallback={<LazyLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/blogs" element={<ImportantTipsPage />} />
            <Route
              path="/blogs/:id"
              element={<SingleBlogPostPage />}
            />
            <Route path="/blogs/category/:categoryId" element={<ImportantTipsPage />} />
            <Route path="/success-story" element={<SuccessStoryPage />} />
            <Route
              path="/contact-us"
              element={<FreeConsultationPage />}
            />
            <Route
              path="/apply-now"
              element={<ApplyForAdmissionPage />}
            />
            <Route path="/university/:id" element={<UniversityDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
