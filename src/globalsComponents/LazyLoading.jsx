import { Box, CircularProgress } from "@mui/material";
import React from "react";

const LazyLoading = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CircularProgress size={44} color="secondary" />
      </Box>
    </>
  );
};

export default LazyLoading;
