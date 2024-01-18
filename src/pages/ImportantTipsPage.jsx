import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  SpeedDial,
  SpeedDialAction,
  StyledEngineProvider,
  TablePagination,
  Typography,
} from "@mui/material";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";
import { Link, useParams } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import { client } from "../libs/contentful/client";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/feature/ContentfulLib/contentfulSlice";
import { Facebook, LinkedIn } from "@mui/icons-material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ErrorShow from "../globalsComponents/ErrorShow";
import BlogsCardsSkeleton from "../Skeletons/BlogsCardsSkeleton";
const actions = [
  { icon: <Facebook />, name: "Facebook" },
  { icon: <LinkedIn />, name: "LinkedIn" },
];

const ImportantTipsPage = () => {
  const { categoryId } = useParams();
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.contentful);
  useEffect(() => {
    if (categoryId) dispatch(fetchPosts({ categoryId }));
  }, [categoryId]);
  // console.log(categoryId, " hello impo post");
  const [page, setPage] = React.useState(0);
  const [postsPerPage, setPostsPerPage] = React.useState(10);

  useEffect(() => {
    if (!categoryId) {
      dispatch(fetchPosts({ page: page + 1, limit: postsPerPage }));
    }
  }, [postsPerPage, page]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setPostsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // let's render the posts conditionally
  let content;
  if (status === "loading") {
    content = <BlogsCardsSkeleton />;
  } else if (status === "failed") {
    content = <ErrorShow errorData={error} />;
  } else if (posts?.total === 0) {
    content = <ErrorShow severity="warning" errorData={"No post is available."} />;
  } else if (status === "succeeded") {
    content = posts?.items?.map((post) => {
      const { postTitle, coverImage, author, excerpt, slug, categories } =
        post.fields || {};
      return (
        <Grid item xs={12} sm={6} md={4} key={slug}>
          <Card>
            <CardMedia
              component="img"
              alt={coverImage.fields.title}
              height="180"
              image={coverImage.fields.file.url}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 1,
              }}>
              <Typography
                sx={{
                  bgcolor: isDarkMode ? "accent.main" : "primary.main",
                  p: 1,
                  borderRadius: "15px",
                }}>
                Category: {categories.fields.categories}
              </Typography>
              <Typography
                sx={{
                  bgcolor: isDarkMode ? "accent.main" : "primary.main",
                  p: 1,
                  borderRadius: "15px",
                }}>
                Author: {author.fields.authorName || "DreamEdu"}
              </Typography>
            </Box>
            <CardContent>
              <Typography gutterBottom marginY={4} variant="h5" align="center">
                {postTitle}
              </Typography>
              <Typography gutterBottom variant="body1">
                {excerpt.slice(0, 130)}
                <MoreHorizIcon
                  sx={{
                    position: "relative",
                    top: "11px",
                  }}
                />
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}>
              <SpeedDial
                title="Share it"
                ariaLabel="SpeedDial openIcon example"
                direction="right"
                sx={{ position: "relative" }}
                icon={<ShareIcon />}>
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                  />
                ))}
              </SpeedDial>
              <Link to={`/study-in-china/${slug}`}>
                <Button
                  sx={{
                    bgcolor: isDarkMode ? "accent.main" : "primary.main",
                    color: isDarkMode ? "whiteCustom.main" : "black.main",
                    "&:hover": {
                      bgcolor: isDarkMode ? "whiteCustom.main" : "accent.main",
                      color: isDarkMode ? "accent.main" : "whiteCustom.main",
                    },
                  }}
                  size="medium">
                  Learn More{" "}
                  <DoubleArrowIcon
                    sx={{
                      fontSize: "1.1rem",
                    }}
                  />{" "}
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }
  return (
    <>
      <DynamicPageTitle pageTitle="Important Tips Page" />
      <Container
        maxWidth="xl"
        sx={{
          pt: 9,
        }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            my: 7,
          }}>
          Important Posts
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ p: 2, mb: 8 }}>
          {content}
        </Grid>
        <StyledEngineProvider injectFirst>
          <TablePagination
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={postsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </StyledEngineProvider>
      </Container>
    </>
  );
};

export default ImportantTipsPage;
