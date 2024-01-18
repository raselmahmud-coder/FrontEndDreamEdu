import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Skeleton,
  Avatar,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSidebarPosts } from "../../redux/feature/ContentfulLib/contentfulSlice";
import ErrorShow from "../../globalsComponents/ErrorShow";

const PostSidebar = ({ postId }) => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  // console.log(postId, "hello post id");
  const { sidebarPosts, status, error } = useSelector(
    (state) => state.contentful,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSidebarPosts({ limit: 3, currentPostId: postId }));
  }, [postId]);
  const navigate = useNavigate();
  // render the loading state
  let content;
  if (status === "loading") {
    content = Array.from(new Array(3)).map((_, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}>
        <Grid item xs={4} sm={6} md={4}>
          <Skeleton
            animation="wave"
            sx={{
              width: "100%",
              height: "160px",
              borderRadius: "240px",
            }}>
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "15px",
              }}
              src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            />
          </Skeleton>
        </Grid>
        <Grid item xs={8} sm={6} md={8}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
            <Skeleton>
              <Typography variant="h6">
                Study Bachelor's or Master's in China
              </Typography>
            </Skeleton>
          </CardContent>
        </Grid>
      </Box>
    ));
  } else if (status === "failed") {
    content = <ErrorShow errorData={error} />;
  } else if (status === "succeeded") {
    content = sidebarPosts?.map((sidebarPosts) => {
      const { slug, postTitle, coverImage, excerpt, categories } =
        sidebarPosts.fields || {};
      return (
        <Box
          onClick={() => navigate(`/study-in-china/${slug}`)}
          key={slug}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            transition: "background-color 0.9s",
            "&:hover": {
              backgroundColor: isDarkMode ? "#004808" : "#e8e8e8",
              cursor: "pointer",
            },
          }}>
          <Grid item xs={4} sm={6} md={4}>
            <CardMedia
              component="img"
              alt={coverImage.fields.title}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "15px",
              }}
              image={coverImage.fields.file.url}
            />
          </Grid>
          <Grid item xs={8} sm={6} md={8}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}>
              <Typography variant="subtitle1">{postTitle}</Typography>
              <Typography variant="body2">{excerpt}</Typography>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate(`/study-in-china/category/${categories.sys.id}`);
                }}
                sx={{
                  mt: 1,
                  textTransform: "capitalize",
                  bgcolor: isDarkMode ? "accent.main" : "primary.main",
                  color: isDarkMode ? "white" : "black",
                }}
                variant="button">
                Category: #{categories.fields.categories}
              </Button>
            </CardContent>
          </Grid>
        </Box>
      );
    });
  }
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          my: 3,
        }}>
        Recent Post
      </Typography>
      <Card>{content}</Card>
    </>
  );
};

export default PostSidebar;
