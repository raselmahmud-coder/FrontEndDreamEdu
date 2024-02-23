import React from "react";
import { keyframes } from "@mui/material";

function zoomInAndOut(scale = undefined) {
  return keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: ${scale ? scale : "scale(1.2)"};
  }
  100% {
    transform: scale(1);
  }
  `;
}

const HoverNAnimation = ({ children, isAnimate, scale }) => {
  const childProps = children.props;
  const childSx = childProps.sx || {};
  return (
    <React.Fragment>
      {React.cloneElement(children, {
        sx: {
          ...childSx,
          transition: "all 0.5s ease-in-out",
          animation: isAnimate && `${zoomInAndOut(scale)} 1s infinite`,
          "&:hover": {
            ...childSx["&:hover"],
            color: "redCustom.main",
            transform: scale ? scale : "scale(1.2)",
            animation: `${zoomInAndOut(scale)} 1s infinite`,
          },
        },
      })}
    </React.Fragment>
  );
};

export default HoverNAnimation;
