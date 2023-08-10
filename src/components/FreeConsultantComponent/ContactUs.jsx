import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          my: 3,
        }}>
        Contact Us
      </Typography>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          my: 2,
        }}>
        For free consultation
      </Typography>

      <Box component="form">
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Phone" variant="standard" />
        <TextField id="standard-basic" label="Your Major" variant="standard" />
        <TextField
          id="standard-basic"
          label="Your Message"
          variant="standard"
        />
        <Button variant="contained">Submit</Button>
      </Box>
    </>
  );
};

export default ContactUs;
