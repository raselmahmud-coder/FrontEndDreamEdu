import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const HeadingH4 = ({children, HeadingH4Text, headingH4Icon,marginY }) => {
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
            fontWeight: "500",
            lineHeight:"1",
            textAlign: "center",
            my: marginY ? marginY : 3,
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
          {children}
      </Box>
    </>
  );
};

export default HeadingH4;
