import React from "react";
import { Box } from "@mui/material";
import styles from "../../styles/AnimationCustom.module.css";

const AnimationComponent = ({ children }) => {
  return (
    <Box
      className={styles.rainbow}
      >
      {children}
    </Box>
  );
};

export default AnimationComponent;
