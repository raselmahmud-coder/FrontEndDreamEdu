import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/userAuth/userAuthSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, user } = useSelector((state) => state.auth || {});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      login({
        accessToken: "123",
        user: {
          email: data.get("email"),
          password: data.get("password"),
        },
      }),
    );
  };
  React.useEffect(() => {
    if (accessToken && user.email) {
      navigate("/admin/dashboard");
    }
  }, [accessToken, user]);

  React.useEffect(() => {
    fetch("https://dream-edu-git-master-mehedihasan555552.vercel.app/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "test",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data)); //expected output: [{userEmail: "hello@gmail.com"},{message:"success"}]
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
