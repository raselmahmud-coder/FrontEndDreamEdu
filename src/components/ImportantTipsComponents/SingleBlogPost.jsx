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
import { Facebook, LinkedIn, Twitter, CopyAll } from "@mui/icons-material";

const actions = [
  { icon: <Facebook />, name: "Facebook" },
  { icon: <LinkedIn />, name: "LinkedIn" },
  { icon: <Twitter />, name: "Twitter" },
  { icon: <CopyAll />, name: "Copy URL" },
];

const SingleBlogPost = (props) => {
  const { blog_pic, category, author, title, description } = props.blog || {};
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          height="350"
          image={`https://dreameduinfo.com${blog_pic}`}
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
              bgcolor: "primary.main",
              p: 1,
              borderRadius: "15px",
            }}>
            Category: {category}
          </Typography>
          <Typography
            sx={{
              bgcolor: "primary.main",
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
        </CardActions>
      </Card>
    </>
  );
};

export default SingleBlogPost;
