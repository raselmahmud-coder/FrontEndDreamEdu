import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const HeadingH2 = ({
  headingH2Text,
  headingH2Icon = undefined,
  marginTop,
  color,
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
            mt: marginTop ? marginTop : { xs: 6, sm: 8, md: 12 },
            mb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 1, sm: 3, md: 6 },
            py: { xs: 1, sm: 3, md: 4 },
            zIndex: 899,
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkMode ? "deepGray.main" : "black.main",
            color: isDarkMode ? "whiteCustom.main" : "secondary.main",
            borderColor: isDarkMode ? "accent.main" : "secondary.main",
            borderRadius: "25% 0 25% 0",
            border: 2,
            fontWeight: "bold",
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          }}
          variant="h2"
          component={"h2"}>
          {headingH2Text}
          {headingH2Icon && typeof headingH2Icon === "string" ? (
            <img
              src={headingH2Icon}
              width={75}
              height={75}
              style={{
                width: "85px",
                height: "85px",
                marginLeft: "4px",
              }}
              alt="Local Icon"
            />
          ) : (
            headingH2Icon &&
            React.createElement(headingH2Icon, {
              sx: {
                color: color ? color : "inherit",
                fontSize: { xs: "35px", sm: "50px", md: "75px" },
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
