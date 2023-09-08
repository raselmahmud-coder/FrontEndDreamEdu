import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import SingleBlogPost from "../components/ImportantTipsComponents/SingleBlogPost";
import PostSidebar from "../components/ImportantTipsComponents/PostSidebar";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";
import { useParams } from "react-router-dom";
import { useGetBlogQuery } from "../redux/feature/Blogs/BlogsAPI";
import ErrorShow from "../globalsComponents/ErrorShow";

const SingleBlogPostPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBlogQuery(
    { id: id },
    { refetchOnMountOrArgChange: true, skip: !id },
  );
  let content;
  if (isLoading) {
    content = (
      <Card>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={350}
          animation="wave">
          <CardMedia
            component="img"
            alt="green iguana"
            width="100%"
            height="350"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
        </Skeleton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            my: 1,
          }}>
          <Skeleton variant="rounded">
            <Typography
              sx={{
                bgcolor: "primary.main",
                p: 1,
                borderRadius: "15px",
              }}>
              Education
            </Typography>
          </Skeleton>
          <Skeleton variant="rounded">
            <Typography
              sx={{
                bgcolor: "primary.main",
                p: 1,
                borderRadius: "15px",
              }}>
              Education
            </Typography>
          </Skeleton>
        </Box>
        <CardContent>
          <Skeleton variant="rectangular">
            <Typography gutterBottom variant="h5">
              Study Bachelor's or Master's in China
            </Typography>
          </Skeleton>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <br />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "start",
          }}></CardActions>
      </Card>
    );
  } else if (!isLoading && isError) {
    content = (
      <ErrorShow errorData="Something went wrong while retrieve blog" />
    );
  } else if (!isLoading && data?.blog?.id) {
    content = <SingleBlogPost blog={data.blog} />;
  }
  return (
    <>
      <DynamicPageTitle
        pageTitle={data?.blog?.id ? `${data.blog.title}` : "Blog Details Page"}
      />
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ p: 2, mb: 8 }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={8}
            sx={{
              mt: 5,
            }}>
            {content}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PostSidebar />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SingleBlogPostPage;
