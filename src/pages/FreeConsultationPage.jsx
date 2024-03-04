import { Container } from "@mui/material";
import React from "react";
import ContactUs from "../components/FreeConsultantComponent/ContactUs";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";
import OfficeAddress from "../globalsComponents/footer/OfficeAddress";

const FreeConsultationPage = () => {
  return (
    <>
      <DynamicPageTitle pageTitle="Free Consultation Page" />
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 12, md: 10 },
        }}>
        <ContactUs />
        <OfficeAddress/>
      </Container>
    </>
  );
};

export default FreeConsultationPage;
