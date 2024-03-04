import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import bgGradient from "../../assets/backgrounds/wave1.svg";


const YouTubeFeeds = () => {
  const [videos, setVideos] = useState([]);
  const { isDarkMode } = useSelector((state) => state.colorMode);

  useEffect(() => {
    const channelId = "UC-0b4o2xGWcM5qhCmvnhZ8g";
    const maxResults = 6;
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
  return (
    <>
      {Array.isArray(videos) && (
        <>
          <Box
            sx={{
              background: isDarkMode ? "" : `url(${bgGradient})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            <Container
              maxWidth="xl"
              sx={{
                pb: { xs: 6, sm: 8, md: 16 },
              }}>
              <HeadingH2 headingH2Text={"Latest Videos"} />
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
                      loading="lazy"
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
            </Container>
          </Box>
        </>
      )}
    </>
  );
};

export default YouTubeFeeds;
