import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const HeadingH4 = ({
  children,
  HeadingH4Text,
  headingH4Icon,
  marginY,
  alignX,
}) => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: alignX ? alignX : "center",
          alignItems: "center",
        }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
            lineHeight: "1",
            textAlign: "center",
            my: marginY ? marginY : 3,
            display: "inline-flex",
            alignItems: "center",
            px: 1.5,
            py: 1,
            border: 2,
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
