import React from "react";
import { Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./globals/ResponsiveAppBar";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
