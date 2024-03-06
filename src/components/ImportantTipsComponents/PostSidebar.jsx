import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Skeleton,
  Avatar,
  Button,
  CardActions,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSidebarPosts } from "../../redux/feature/ContentfulLib/contentfulSlice";
import ErrorShow from "../../globalsComponents/ErrorShow";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";
import { Facebook, LinkedIn } from "@mui/icons-material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ShareIcon from "@mui/icons-material/Share";

const actions = [
  { icon: <Facebook />, name: "Facebook" },
  { icon: <LinkedIn />, name: "LinkedIn" },
];
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
      const { slug, postTitle, coverImage, excerpt, categories, author } =
        sidebarPosts.fields || {};
      return (
        <Grid item key={slug}>
          <Card
            sx={{
              border: "1px solid",
              bgcolor: isDarkMode ? "deepGray.main" : "primary.main",
              transition: "all 0.5s",
              "&:hover": {
                transform: "scale(1.03)",
                backgroundColor: "silverPro.main",
              },
            }}>
            <CardMedia
              loading="lazy"
              component="img"
              alt={coverImage.fields.title}
              sx={{ width: "100%", height: "auto" }}
              image={coverImage.fields.file.url}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 2,
              }}>
              <Typography
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate(`/blogs/category/${categories.sys.id}`);
                }}
                variant="subtitle1"
                sx={{
                  bgcolor: isDarkMode ? "accent.main" : "whiteCustom.main",
                  px: { xs: 1, sm: 2, md: 2 },
                  borderRadius: "25px",
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "accent.main",
                    color: "linkHover.main",
                  },
                }}>
                Category: #{categories.fields.categories}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  bgcolor: isDarkMode ? "accent.main" : "whiteCustom.main",
                  px: { xs: 1, sm: 2, md: 2 },
                  borderRadius: "25px",
                }}>
                Author: {author.fields.authorName || "DreamEdu"}
              </Typography>
            </Box>
            <CardContent>
              <Typography
                gutterBottom={true}
                sx={{
                  textAlign: "justify",
                  color: isDarkMode ? "whiteCustom.main" : "black.main",
                }}
                variant="h5"
                align="center">
                {postTitle}
              </Typography>
              <Typography
                sx={{
                  color: isDarkMode ? "whiteCustom.main" : "black.main",
                }}
                gutterBottom={true}
                variant="body2">
                {excerpt.slice(0, 80)}...
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "end",
              }}>
              <SpeedDial
                title="Share the post"
                ariaLabel="SpeedDial"
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
              <Link to={`/blogs/${slug}`}>
                <HoverNAnimation>
                  <Button
                    sx={{
                      bgcolor: isDarkMode ? "accent.main" : "btnHover.main",
                      color: isDarkMode ? "whiteCustom.main" : "black.main",
                      fontSize: { xs: "0.6rem", sm: "1rem", md: "1.1rem" },
                      "&:hover": {
                        transition: "all 0.4s",
                        bgcolor: isDarkMode
                          ? "whiteCustom.main"
                          : "accent.main",
                        color: isDarkMode ? "accent.main" : "whiteCustom.main",
                      },
                    }}
                    size={"medium"}>
                    See More{" "}
                    <DoubleArrowIcon
                      sx={{
                        fontSize: "1.1rem",
                      }}
                    />
                  </Button>
                </HoverNAnimation>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }
  return (
    <>
      <HeadingH2 headingH2Text={"Recent Posts"} variantCustom={"h3"} />
      <Grid
        container
        spacing={5}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ px: { md: 4 } }}>
        {content}
      </Grid>
    </>
  );
};

export default PostSidebar;
