import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  Divider,
  ListItemText,
  Skeleton,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useGetBlogsQuery } from "../../redux/feature/Blogs/BlogsAPI";
import { useNavigate } from "react-router-dom";

const PostSidebar = () => {
  const {
    data: latestBlogs,
    isError: blogError,
    isLoading: blogLoading,
  } = useGetBlogsQuery();
const navigate = useNavigate();
  // render the loading state
  let content;
  if (blogLoading) {
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
  } else if (!blogLoading && blogError) {
    content = <ErrorShow errorData="Something went wrong" />;
  } else {
    content = latestBlogs?.blogs.map(({ id, blog_pic, title }) => (
      <Box
        key={id}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}>
        <Grid item xs={4} sm={6} md={4}>
          <CardMedia
            component="img"
            alt={title}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
            }}
            image={`https://dreameduinfo.com${blog_pic}`}
          />
        </Grid>
        <Grid item xs={8} sm={6} md={8}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography variant="h6">{title}</Typography>
          </CardContent>
        </Grid>
      </Box>
    ));
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
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          my: 3,
        }}>
        Categories
      </Typography>
      <List component="div" aria-label="category name">
        {latestBlogs?.blogs.length &&
          latestBlogs?.blogs.map(({ id, category }) => (
            <Box key={id}>
              <ListItem sx={{
                cursor: "pointer"
              }} onClick={()=> navigate(`/important-tips/category/Education`)}>
                <ListItemText primary={category} />
                <Typography variant="h5">({id})</Typography>
              </ListItem>
              <Divider />
            </Box>
          ))}
        {blogLoading &&
          Array.from({ length: 3 }).map((_, i) => (
            <>
              <ListItem button key={i}>
                <Skeleton variant="text" animation="wave">
                  <ListItemText primary={`Inbox`} />
                </Skeleton>
                <Skeleton variant="text" animation="wave">
                  <Typography variant="h5">total length</Typography>
                </Skeleton>
              </ListItem>
              <Divider />
            </>
          ))}
      </List>
    </>
  );
};

export default PostSidebar;
