import { Container } from "@mui/material";
import React from "react";
import SSComp from "../components/successStoryComponents/SSComp";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";

const SuccessStoryPage = () => {
  return (
    <>
      <DynamicPageTitle pageTitle="Success Story Page" />
      <Container maxWidth="xl">
        <SSComp />
      </Container>
    </>
  );
};

export default SuccessStoryPage;
