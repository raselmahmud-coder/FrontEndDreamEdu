import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  SpeedDial,
  SpeedDialAction,
  Typography,
} from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Facebook, LinkedIn, Twitter, CopyAll, WhatsApp } from "@mui/icons-material";
import { useSelector } from "react-redux";

const actions = [
  { icon: <Facebook />, name: "Facebook" },
  { icon: <LinkedIn />, name: "LinkedIn" },
  { icon: <WhatsApp />, name: "WhatsApp" },
  { icon: <CopyAll />, name: "Copy URL" },
];

const SingleBlogPost = (props) => {
  const { blog_pic, category, author, title, description } = props.blog || {};
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          height="350"
          image={`https://dreameduapiv1.dreameduinfo.com${blog_pic}`}
          loading="lazy"
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
            Author:{" "}
            <span
              style={{
                textTransform: "capitalize",
              }}>
              {author}
            </span>
          </Typography>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography gutterBottom variant="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "start",
          }}>
          <SpeedDial
            title="Share it"
            ariaLabel="SpeedDial openIcon"
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
        </CardActions>
      </Card>
    </>
  );
};

export default SingleBlogPost;
