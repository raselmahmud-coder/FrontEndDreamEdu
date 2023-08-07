import { Typography } from '@mui/material';
import React from 'react';

const ContactUsPage = () => {
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
        </>
    );
};

export default ContactUsPage;