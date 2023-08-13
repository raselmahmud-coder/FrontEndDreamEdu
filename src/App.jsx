import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./globals/ResponsiveAppBar";
import HomePage from "./pages/HomePage";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./globals/Footer";
import { useMediaQuery } from "@mui/material";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./globals/NotFoundPage";
import ImportantTipsPage from "./pages/ImportantTipsPage";
import SuccessStoryPage from "./pages/SuccessStoryPage";
import SingleBlogPostPage from "./pages/SingleBlogPostPage";
import ApplyForAdmissionPage from "./pages/ApplyForAdmissionPage";
import FreeConsultationPage from "./pages/FreeConsultationPage";
import LoginPage from "./pages/LoginPage";

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

  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline />
        <ResponsiveAppBar
          mode={isDarkMode}
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/important-tips" element={<ImportantTipsPage />} />
          <Route path="/important-tips/:id" element={<SingleBlogPostPage />} />
          <Route path="/success-story" element={<SuccessStoryPage />} />
          <Route path="/free-consultation" element={<FreeConsultationPage />} />
          <Route path="/apply-for-admission" element={<ApplyForAdmissionPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Private route start */}
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          {/* Private route end */}
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
