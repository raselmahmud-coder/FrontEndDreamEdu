import React from "react";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";
import { Container } from "@mui/material";
import HeadingH2 from "../globalsComponents/Headings/HeadingH2";

const GalleryPage = () => {
  return (
    <>
      <DynamicPageTitle pageTitle="Gallery Page" />
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 12, md: 10 },
        }}>
        <HeadingH2 headingH2Text={"Latest memories"} />
      </Container>
    </>
  );
};

export default GalleryPage;
