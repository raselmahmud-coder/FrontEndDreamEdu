import { Alert, Box } from "@mui/material";
import React from "react";

const ErrorShow = ({
  errorData = " — please try it again later!",
  severity = "error",
}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "25vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Alert severity={severity}>{errorData} </Alert>
      </Box>
    </>
  );
};

export default ErrorShow;
