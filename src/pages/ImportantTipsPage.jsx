import { Container } from "@mui/material";
import React from "react";
import Tips1 from "../components/ImportantTipsComponents/Tips1";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";
import { useParams } from "react-router-dom";

const ImportantTipsPage = () => {
  const { category } = useParams();

  return (
    <>
      <DynamicPageTitle pageTitle="Important Tips Page" />
      <Container
        maxWidth="xl"
        sx={{
          pt: 9,
        }}>
        <Tips1 category={category} />
      </Container>
    </>
  );
};

export default ImportantTipsPage;
