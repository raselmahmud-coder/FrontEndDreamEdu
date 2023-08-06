import * as React from "react";
import { Container } from "@mui/material";
import AboutUsSection1 from "../components/aboutUsComponents/AboutUsSection1";
import AboutUsSection2 from "../components/aboutUsComponents/AboutUsSection2";
import AboutUsSection3 from "../components/aboutUsComponents/AboutUsSection3";

export default function AboutUsPage() {
  return (
    <>
      <Container maxWidth="xl">
        <AboutUsSection1 />
        <AboutUsSection2 />
        <AboutUsSection3 />
      </Container>
    </>
  );
}
