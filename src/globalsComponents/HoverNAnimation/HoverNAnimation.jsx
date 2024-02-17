// HoverWrapper.js
import React from "react";
import { Box, keyframes } from "@mui/material";

const zoomInAndOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const HoverNAnimation = ({ children, isAnimate }) => {
//   console.log(children?.type, "Hello child");
  return (
    <Box
      component={children?.type ? children.type : "span"}
      sx={{
        transition: "all 0.4s ease-in-out",
        animation: isAnimate && `${zoomInAndOut} 1s infinite`,
        "&:hover": {
          // backgroundColor:"yellow",
          color: "redCustom.main",
          transform: "scale(1.2)",
          animation: `${zoomInAndOut} 1s infinite`,
        },
      }}>
      {children}
    </Box>
  );
};

export default HoverNAnimation;
