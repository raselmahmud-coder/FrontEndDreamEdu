import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const HeadingH4 = ({ HeadingH4Text, headingH4Icon }) => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            my: 3,
            display: "inline-flex",
            alignItems:"center",
            p: 2,
            border:2,
            borderRadius: "35px",
            bgcolor: isDarkMode ? "deepGray.main" : "silverPro.main",
          }}>
          {headingH4Icon &&
            React.createElement(headingH4Icon, {
              sx: {
                color: "secondary.main",
                fontSize: { xs: "35px", sm: "45px", md: "55px" },
              },
            })}
          {HeadingH4Text}
        </Typography>
      </Box>
    </>
  );
};

export default HeadingH4;
