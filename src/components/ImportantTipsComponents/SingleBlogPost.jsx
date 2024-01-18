import React from "react";
import RichText from "./RichText";


const SingleBlogPost = (props) => {
  const { bodyContent } = props.blog || {};
  // console.log(bodyContent, "props");

  return (
    <>
      <>
        <RichText content={bodyContent} />
      </>
    </>
  );
};

export default SingleBlogPost;
