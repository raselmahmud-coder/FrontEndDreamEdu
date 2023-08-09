import React from "react";
import { Container, Grid } from "@mui/material";
import SingleBlogPost from "../components/ImportantTipsComponents/SingleBlogPost";
import PostSidebar from "../components/ImportantTipsComponents/PostSidebar";

const SingleBlogPostPage = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2, mb: 8 }}>
        <Grid item xs={12} sm={6} md={8}>
          <SingleBlogPost />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PostSidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleBlogPostPage;
