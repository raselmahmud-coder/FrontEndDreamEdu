import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import axios from "axios"; // Import axios for token refresh

const FacebookPosts = () => {
  const [postsUrl, setPostsUrl] = useState([]);
  const [accessToken, setAccessToken] = useState(
    "EAAY0zPZC0HxoBOwN3stXZBxE1mIo5xfWuiZCuusCXscqsuE6nHlslbpSZAL4CFOENCDp4s0ncZC15ZCLvZAvwJ1GyGIg9D9ryTaUsKZCZBwuDrijn8uWcPABYhtbjG8GvYUZBgTq4rCn69WbEEAWLe12TR6lDYGfj64nWAPjPwao6TKrrP1TZCrUNOpNcdAbZC2lxOnfRnFbZB4fVJab46SkP8LZBFdlS77QgZD"
  ); // Initial access token

  useEffect(() => {
    const pageId = "1012236045619075"; // Replace with the ID of the Facebook page
    fetchPosts(pageId);
  }, []);

  const fetchPosts = async (pageId) => {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v17.0/${pageId}/posts?fields=permalink_url&limit=3&access_token=${accessToken}`
      );
      setPostsUrl(response.data.data);
    } catch (error) {
      console.error("Error fetching Facebook posts:", error);
      if (error.response && error.response.status === 400) {
        console.log("try to refresh it");
        // Token is invalid, try to refresh it
        refreshToken();
      }
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${YOUR_APP_ID}&client_secret=${YOUR_APP_SECRET}&fb_exchange_token=${accessToken}`
      );
        
       /*  await axios.post("/refresh-token", {
        shortLivedToken: accessToken,
      }); */

      const newToken = response.data.newToken;
      setAccessToken(newToken);

      // Retry fetching posts with the new token
      const pageId = "1012236045619075"; // Replace with the ID of the Facebook page
      fetchPosts(pageId);
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

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
        }}
      >
        {postsUrl &&
          postsUrl.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <iframe
                src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                  post.permalink_url
                )}&show_text=false`}
                style={{
                  width: "100%",
                  height: "215px",
                }}
                data-lazy
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default FacebookPosts;
