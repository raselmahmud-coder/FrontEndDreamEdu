import * as React from "react";
import { Container } from "@mui/material";
import AboutUsSection1 from "../components/aboutUsComponents/AboutUsSection1";
import AboutUsSection2 from "../components/aboutUsComponents/AboutUsSection2";

export default function AboutUs() {
  return (
    <>
      <Container maxWidth="xl">
        <AboutUsSection1 />
        <AboutUsSection2/>
      </Container>
    </>
  );
}
