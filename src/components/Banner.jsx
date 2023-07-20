import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <>
      <Box
        component={"section"}
        sx={{
          m: 2,
        }}>
        <Typography>this is banner</Typography>
      </Box>
    </>
  );
};

export default Banner;
