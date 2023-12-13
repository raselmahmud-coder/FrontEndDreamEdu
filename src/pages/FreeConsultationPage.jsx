import { Container } from "@mui/material";
import React from "react";
import ContactUs from "../components/FreeConsultantComponent/ContactUs";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";

const FreeConsultationPage = () => {
  return (
    <>
      <DynamicPageTitle pageTitle="Free Consultation Page" />
      <Container
        maxWidth="xl"
        sx={{
          pt: 9,
        }}>
        <ContactUs />
      </Container>
    </>
  );
};

export default FreeConsultationPage;
