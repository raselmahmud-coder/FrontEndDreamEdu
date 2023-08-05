import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";


const FacebookPosts = () => {
  const [postsUrl, setPostsUrl] = useState([]);

  useEffect(() => {
    const accessToken =
      "EAAY0zPZC0HxoBOwN3stXZBxE1mIo5xfWuiZCuusCXscqsuE6nHlslbpSZAL4CFOENCDp4s0ncZC15ZCLvZAvwJ1GyGIg9D9ryTaUsKZCZBwuDrijn8uWcPABYhtbjG8GvYUZBgTq4rCn69WbEEAWLe12TR6lDYGfj64nWAPjPwao6TKrrP1TZCrUNOpNcdAbZC2lxOnfRnFbZB4fVJab46SkP8LZBFdlS77QgZD"; // Replace with the generated user access token
    const pageId = "1012236045619075"; // Replace with the ID of the Facebook page
    fetch(
      `https://graph.facebook.com/v17.0/${pageId}/posts?fields=permalink_url&limit=3&access_token=${accessToken}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setPostsUrl(data.data);
      })
      .catch((error) => {
        console.error("Error fetching Facebook posts:", error);
      });
  }, []);
console.log(postsUrl, "postsUrl")
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mt: "132px",
          mb: "40px",
        }}>
        Latest Facebook Posts
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          alignItems: "center",
          my: "80px",
        }}>
        {postsUrl && postsUrl.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <iframe
              src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                post.permalink_url,
              )}&show_text=false`}
              style={{
                width: "100%",
                height: "215px",
              }}
              data-lazy
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FacebookPosts;
