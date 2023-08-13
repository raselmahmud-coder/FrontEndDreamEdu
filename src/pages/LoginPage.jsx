import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const style = {
  my: 2,
};
const LoginPage = () => {
  const [getUser, setGetUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (getUser) navigate("/dashboard");
  }, [getUser]);

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          my: 3,
        }}>
        Log in
      </Typography>
      <Box
        onSubmit={(e) => {
          e.preventDefault();
          setGetUser(true);
          console.log(e.target[0].value);
          console.log(e.target[1].value);
        }}
        component="form"
        sx={{
          width: "30%",
          mx: "auto",
        }}>
        <TextField
          required
          sx={style}
          id="standard-basic"
          type="email"
          label="Email"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          sx={style}
          id="standard-basic"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        />
        <Button type={"submit"} variant="contained">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default LoginPage;
