import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useSelector } from "react-redux";

const YouTubeFeeds = () => {
  const [videos, setVideos] = useState([]);
  const { isDarkMode } = useSelector((state) => state.colorMode);

  useEffect(() => {
    const channelId = "UC-0b4o2xGWcM5qhCmvnhZ8g"; // Replace with your YouTube channel ID
    const maxResults = 3;
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=${maxResults}`,
    )
      .then((res) => res.json())
      .then((response) => {
        setVideos(response.items);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });
  }, []);
  console.log(videos, "Hello YouTube");
  return (
    <>
      {Array.isArray(videos) && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Typography
              sx={{
                mt: { xs: 6, sm: 8, md: 12 },
                mb: { xs: 4, sm: 6, md: 8 },
                px: { xs: 1, sm: 3, md: 6 },
                py: { xs: 1, sm: 3, md: 4 },
                zIndex: 899,
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isDarkMode ? "deepGray.main" : "primary.main",
                color: isDarkMode ? "whiteCustom.main" : "secondary.main",
                borderColor: isDarkMode ? "accent.main" : "secondary.main",
                borderRadius: "25% 0 25% 0",
                border: 1,
                fontWeight: "bold",
                boxShadow:
                  "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
              }}
              variant="h3">
              Latest YouTube Videos
              <YouTubeIcon
                sx={{
                  fontSize: { xs: "35px", sm: "45px", md: "65px" },
                  ml: { xs: 2, sm: 2, md: 3 },
                }}
              />
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}>
            {videos.map((video) => (
              <Grid item xs={12} sm={6} md={4} key={video.id.videoId}>
                <iframe
                  //   width="560"
                  style={{ width: "100%", height: "315px" }}
                  //   height="315"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default YouTubeFeeds;
