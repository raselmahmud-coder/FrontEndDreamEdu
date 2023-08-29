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

const SingleBlogPost = ({img, category, author, title, description}) => {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="350"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
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
            Education
          </Typography>
          <Typography
            sx={{
              bgcolor: "primary.main",
              p: 1,
              borderRadius: "15px",
            }}>
            Author Name
          </Typography>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Study Bachelor's or Master's in China
          </Typography>
          <Typography gutterBottom variant="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odio
            saepe iste esse excepturi, dolore nam! Nulla ducimus rem facilis qui
            consequatur, et, voluptates facere unde quod itaque beatae aut,
            cupiditate rerum quis. Obcaecati aliquid corrupti eum sed. Eaque,
            cupiditate error ratione nostrum aperiam veritatis beatae magnam ut
            id totam?
          </Typography>
          <br />
          <Typography gutterBottom variant="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odio
            saepe iste esse excepturi, dolore nam! Nulla ducimus rem facilis qui
            consequatur, et, voluptates facere unde quod itaque beatae aut,
            cupiditate rerum quis. Obcaecati aliquid corrupti eum sed. Eaque,
            cupiditate error ratione nostrum aperiam veritatis beatae magnam ut
            id totam?
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
