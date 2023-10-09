import React, { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ResponsiveAppBar from "./globalsComponents/ResponsiveAppBar";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./globalsComponents/footer/Footer";
import { useMediaQuery } from "@mui/material";
import LazyLoading from "./globalsComponents/LazyLoading";
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Automatically set dark mode based on OS preference
  useEffect(() => {
    setIsDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });
  const responsiveTheme = responsiveFontSizes(darkTheme);
  const location = useLocation();
  console.log(location.pathname, "hello location")
  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        <ResponsiveAppBar
          mode={isDarkMode}
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
        <Suspense fallback={<LazyLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/important-tips" element={<ImportantTipsPage />} />
            <Route
              path="/important-tips/:id"
              element={<SingleBlogPostPage />}
            />
            <Route path="/important-tips/category/:category" element={<ImportantTipsPage />} />
            <Route path="/success-story" element={<SuccessStoryPage />} />
            <Route
              path="/free-consultation"
              element={<FreeConsultationPage />}
            />
            <Route
              path="/apply-for-admission"
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
