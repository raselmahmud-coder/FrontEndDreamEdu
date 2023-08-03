import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";


const FacebookPosts = () => {
  const [postsUrl, setPostsUrl] = useState([]);

  useEffect(() => {
    const accessToken =
      "EAAY0zPZC0HxoBOxVyLuNJZCc03oAMciZCXVIZAPu8aKR8YIhAhI7eaGb2Dbxzd1h6EVkMhavCBXJD8G2zpqHB42EgrfsEDZA4ECqfJnsUuSIzPaLGH3p3WfkJHqgu5SPyoWo4Sz5favJ8GLQzrj52ksuqJxeefPOHrhV1l3ewLyLQWtSo00j56UEIZC1Iaj9Ho7nkLtPM1uZB19YZCSeZCzrSxqTyj3pO"; // Replace with the generated user access token
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
        {postsUrl.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <iframe
              src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                post.permalink_url,
              )}&show_text=false`}
              style={{
                border: "none",
                overflow: "hidden",
                width: "100%",
                height: "315px",
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
