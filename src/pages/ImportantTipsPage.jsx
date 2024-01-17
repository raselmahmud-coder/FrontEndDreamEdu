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
  Typography,
} from "@mui/material";
import Tips1 from "../components/ImportantTipsComponents/Tips1";
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
  const { category } = useParams();
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.contentful);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log(error, "error");
  // let's render the posts conditionally
  let content;
  if (status === "loading") {
    content = <BlogsCardsSkeleton />;
  } else if (status === "failed") {
    content = <ErrorShow error={error} />;
  } else if (status === "succeeded") {
    content = posts.map((post) => {
      const { postTitle, coverImage, author, excerpt, slug } =
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
                Category:
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
              <Typography gutterBottom variant="h5" align="center">
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
      </Container>
    </>
  );
};

export default ImportantTipsPage;
