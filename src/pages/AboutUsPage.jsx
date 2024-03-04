import * as React from "react";
import { Container } from "@mui/material";
import AboutUsSection1 from "../components/aboutUsComponents/AboutUsSection1";
import AboutUsSection2 from "../components/aboutUsComponents/AboutUsSection2";
import AboutUsSection3 from "../components/aboutUsComponents/AboutUsSection3";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";
import OfficeAddress from "../globalsComponents/footer/OfficeAddress";

export default function AboutUsPage() {
  return (
    <>
      <DynamicPageTitle pageTitle="About Us Page" />
      <Container maxWidth="xl">
        <AboutUsSection1 />
        <AboutUsSection3 />
        <AboutUsSection2 />
        <OfficeAddress/>
      </Container>
    </>
  );
}
