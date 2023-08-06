import { Box, Typography } from "@mui/material";
import React from "react";

const NotFoundPage = () => {
  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography variant="h1" sx={{ fontWeight: "bold", textAlign: "center" }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Page not found
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
