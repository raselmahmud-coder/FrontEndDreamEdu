import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";

const YouTubeFeeds = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = "AIzaSyBrmXzF-DorCHR7r01mowYgc3widZ2mj34"; // Replace with your Google API key
    const channelId = "UCZQLU9dg9Lrv67RBIItGeUA"; // Replace with your YouTube channel ID
    const maxResults = 3;

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=${maxResults}`,
      )
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
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
        Latest YouTube Videos
      </Typography>
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
                    style={{width: "100%", height: "315px"}}
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
  );
};

export default YouTubeFeeds;