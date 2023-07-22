import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./globals/ResponsiveAppBar";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar mode={isDarkMode} onClick={()=>setIsDarkMode(!isDarkMode)}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <main>This app is using the dark mode</main>
      
      </ThemeProvider>
    </>
  );
};

export default App;
