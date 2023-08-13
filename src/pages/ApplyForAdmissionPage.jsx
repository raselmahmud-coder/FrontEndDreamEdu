import { Container } from "@mui/material";
import React from "react";
import ApplyStepper from "../components/ApplyForAdmissionComp/ApplyStepper";
import Checkout from "../components/ApplyForAdmissionComp/Checkout";

const ApplyForAdmissionPage = () => {
  return (
    <Container maxWidth="xl" sx={{
      my:10
    }}>
      <ApplyStepper />
      <Checkout />
    </Container>
  );
};

export default ApplyForAdmissionPage;
