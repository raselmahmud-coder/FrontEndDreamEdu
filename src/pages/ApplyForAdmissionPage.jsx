import { Container } from "@mui/material";
import React from "react";
import Checkout from "../components/ApplyForAdmissionComp/Checkout";

const ApplyForAdmissionPage = () => {
  return (
    <Container maxWidth="xl" sx={{
      my:10
    }}>
      <Checkout />
    </Container>
  );
};

export default ApplyForAdmissionPage;
