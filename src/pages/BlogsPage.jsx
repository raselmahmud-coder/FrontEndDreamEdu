import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/feature/ContentfulLib/contentfulSlice";
import { Facebook, LinkedIn } from "@mui/icons-material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ShareIcon from "@mui/icons-material/Share";
import ErrorShow from "../globalsComponents/ErrorShow";
import BlogsCardsSkeleton from "../Skeletons/BlogsCardsSkeleton";
import blogIcon from "../assets/Icon/blogIcon.png";
import HeadingH2 from "../globalsComponents/Headings/HeadingH2";
import HoverNAnimation from "../globalsComponents/HoverNAnimation/HoverNAnimation";
const actions = [
  { icon: <Facebook />, name: "Facebook" },
  { icon: <LinkedIn />, name: "LinkedIn" },
];

const BlogsPage = () => {
  const { categoryId } = useParams();
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.contentful);
  useEffect(() => {
    if (categoryId) dispatch(fetchPosts({ categoryId }));
  }, [categoryId]);
  // console.log(categoryId, " hello impo post");
  const [page, setPage] = React.useState(0);
  const [postsPerPage, setPostsPerPage] = React.useState(9);

  useEffect(() => {
    if (!categoryId) {
      dispatch(
        fetchPosts({
          page: page + 1,
          limit: postsPerPage,
        }),
      );
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
    content = (
      <ErrorShow severity="warning" errorData={"No post is available."} />
    );
  } else if (status === "succeeded") {
    content = posts?.items?.map((post) => {
      const { postTitle, coverImage, author, excerpt, slug, categories } =
        post.fields || {};
      return (
        <Grid item xs={12} sm={6} md={4} key={slug}>
          <Card
            sx={{
              border:"1px solid",
              bgcolor: isDarkMode ? "deepGray.main" : "primary.main",
              minHeight: { xs: "435px", sm: "570px", md: "570px" },
              "&:hover": {
                transition: "all 0.5s",
                transform: "scale(1.05)",
                backgroundColor: "silverPro.main"
              }
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
                variant="subtitle1"
                sx={{
                  bgcolor: isDarkMode ? "accent.main" : "whiteCustom.main",
                  px: { xs: 1, sm: 2, md: 2 },
                  borderRadius: "25px",
                }}>
                Category: {categories.fields.categories}
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
                {excerpt.slice(0, 100)}...
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
                      fontSize: { xs: "0.7rem", sm: "1rem", md: "1.1rem" },
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
                    />{" "}
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
      <DynamicPageTitle pageTitle="Blogs Page" />
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 12, md: 10 },
        }}>
        <HeadingH2 headingH2Text={"Important Blogs"} headingH2Icon={blogIcon} />
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 7 }}
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
            labelRowsPerPage={"Blogs ➡️"}
            rowsPerPageOptions={[
              { label: "9 Per page", value: 9 },
              { label: "25 Per page", value: 25 },
              { label: "50 Per page", value: 50 },
              { label: "100 Per page", value: 100 },
            ]}
            rowsPerPage={postsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </StyledEngineProvider>
      </Container>
    </>
  );
};

export default BlogsPage;
