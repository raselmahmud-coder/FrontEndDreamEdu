import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShareIcon from "@mui/icons-material/Share";
import { Facebook, LinkedIn } from "@mui/icons-material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Link } from "react-router-dom";
import {
  useGetBlogByCategoryQuery,
  useGetBlogsQuery,
} from "../../redux/feature/Blogs/BlogsAPI";
import ErrorShow from "../../globalsComponents/ErrorShow";
import PaginationSS from "./PaginationSS";
import { useSelector } from "react-redux";

const actions = [
  { icon: <Facebook />, name: "Facebook" },
  { icon: <LinkedIn />, name: "LinkedIn" },
];
const Tips1 = ({ category }) => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const {
    data: categoryData,
    isError: isErrorCategory,
    isLoading: isLoadingCategory,
  } = useGetBlogByCategoryQuery(
    { category: category },
    { refetchOnMountOrArgChange: true, skip: !category },
  );
  const { data, isError, isLoading } = useGetBlogsQuery();

  let content;
  if (isLoading || isLoadingCategory) {
    content = Array.from(new Array(3)).map((_, index) => (
      <Grid item xs={12} sm={4} md={4} key={index}>
        <Card
          sx={{
            p: 1,
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Skeleton variant="circular">
              <Avatar sx={{ width: 90, height: 90 }} />
            </Skeleton>
          </Box>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Skeleton width="100%" height={50}>
                <Typography gutterBottom variant="h6"></Typography>
              </Skeleton>
            </Box>
            <Skeleton variant="text" width={"100%"} height={30}>
              <Typography variant="body2" color="text.secondary"></Typography>
            </Skeleton>
            <Skeleton variant="text" width={"100%"} height={30}>
              <Typography variant="body2" color="text.secondary"></Typography>
            </Skeleton>
            <Skeleton variant="text" width={"100%"} height={30}>
              <Typography variant="body2" color="text.secondary"></Typography>
            </Skeleton>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Skeleton variant="rectangular" width={200} height={70}>
              <Button variant="contained" size="large"></Button>
            </Skeleton>
          </CardActions>
        </Card>
      </Grid>
    ));
  } else if (isErrorCategory || isError) {
    content = <ErrorShow errorData="Something went wrong" />;
  } else if (categoryData?.blogs.length || data?.blogs.length) {
    content = (categoryData?.blogs || data?.blogs).map(
      ({ id, category, author, blog_pic, title }) => (
        <Grid item xs={12} sm={6} md={4} key={id}>
          <Card>
            <CardMedia
              component="img"
              alt={title}
              height="140"
              image={`https://dreameduapiv1.dreameduinfo.com${blog_pic}`}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                my: 1,
              }}>
              <Typography
                sx={{
                  bgcolor: isDarkMode ? "accent.main" : "primary.main",
                  p: 1,
                  borderRadius: "15px",
                }}>
                Category: {category}
              </Typography>
              <Typography
                sx={{
                  bgcolor: isDarkMode ? "accent.main" : "primary.main",
                  p: 1,
                  borderRadius: "15px",
                }}>
                Author {author}
              </Typography>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {title}
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
              <Link to={`/study-in-china/${id}`}>
                <Button
                  sx={{ color: isDarkMode ? "white.main" : "black.main" }}
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
      ),
    );
  }
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          my: 7,
        }}>
        Important Tips for newbie's
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2, mb: 8 }}>
        {content}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 18,
        }}>
        {/* <PaginationSS /> */}
      </Box>
    </>
  );
};

export default Tips1;
