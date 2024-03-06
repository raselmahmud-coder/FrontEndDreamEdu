import React from "react";
import RichText from "./RichText";
import { Typography } from "@mui/material";

const SingleBlogPost = (props) => {
  const { postTitle, bodyContent } = props.blog || {};
  // console.log(props, "props");

  return (
    <>
      <>
        <Typography variant="h3" sx={{ mt: 4,mb:2 }}>
          {postTitle}
        </Typography>
        <RichText content={bodyContent} />
      </>
    </>
  );
};

export default SingleBlogPost;
