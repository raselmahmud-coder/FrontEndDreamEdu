import { Container } from "@mui/material";
import React from "react";
import Checkout from "../components/ApplyForAdmissionComp/Checkout";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";

const ApplyForAdmissionPage = () => {
  return (
    <>
      <DynamicPageTitle pageTitle="Apply Admission Page" />
      <Container
        maxWidth="xl"
        sx={{
          my: 10,
        }}>
        <Checkout />
      </Container>
    </>
  );
};

export default ApplyForAdmissionPage;
