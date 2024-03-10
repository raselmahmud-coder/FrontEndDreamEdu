import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const HeadingH2 = ({
  headingH2Text,
  headingH2Icon = undefined,
  marginTop,
  marginBottom,
  color,
  variantCustom,
}) => {
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
          sx={{
            mt: marginTop ? marginTop : { xs: 1, sm: 3, md: 12 },
            mb: marginBottom ? marginBottom : { xs: 4, sm: 6, md: 8 },
            px: { xs: 1, sm: 3, md: 4 },
            py: { xs: 1, sm: 2, md: 2 },
            fontSize: { md: "30px" },
            zIndex: 50,
            textTransform: "uppercase",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkMode ? "deepGray.main" : "redCustom.main",
            color: "whiteCustom.main",
            borderColor: isDarkMode ? "accent.main" : "secondary.main",
            borderRadius: "15px",
            border: 2,
            fontWeight: "bold",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
          variant={variantCustom ? variantCustom : "h4"}>
          {headingH2Text}
          {headingH2Icon && typeof headingH2Icon === "string" ? (
            <Box
              component={"img"}
              src={headingH2Icon}
              loading="lazy"
              sx={{
                width: { xs: "25px", sm: "35px", md: "45px" },
                height: { xs: "25px", sm: "35px", md: "45px" },
                ml: "4px",
              }}
              alt="Local Icon"
            />
          ) : (
            headingH2Icon &&
            React.createElement(headingH2Icon, {
              sx: {
                color: color ? color : "inherit",
                fontSize: { xs: "18px", sm: "30px", md: "45px" },
                ml: { xs: 2, sm: 2, md: 3 },
              },
            })
          )}
        </Typography>
      </Box>
    </>
  );
};

export default HeadingH2;
