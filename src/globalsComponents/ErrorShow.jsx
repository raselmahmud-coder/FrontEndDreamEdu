import { Alert, Box } from "@mui/material";
import React from "react";

const ErrorShow = ({ errorData = "Something went wrong" }) => {
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
        <Alert severity="error">{errorData} — please try it again later!</Alert>
      </Box>
    </>
  );
};

export default ErrorShow;
