import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./globals/ResponsiveAppBar";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });
  const responsiveTheme = responsiveFontSizes(darkTheme);
  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
      <CssBaseline />
      <ResponsiveAppBar mode={isDarkMode} onClick={()=>setIsDarkMode(!isDarkMode)}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
