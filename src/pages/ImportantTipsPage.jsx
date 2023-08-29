import { Container } from "@mui/material";
import React from "react";
import Tips1 from "../components/ImportantTipsComponents/Tips1";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";

const ImportantTipsPage = () => {
  return (
    <>
      <DynamicPageTitle pageTitle="Important Tips Page" />
      <Container maxWidth="xl">
        <Tips1 />
      </Container>
    </>
  );
};

export default ImportantTipsPage;
