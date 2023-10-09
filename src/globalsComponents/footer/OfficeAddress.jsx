import { LocationOnRounded } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const OfficeAddress = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          my: 3,
          fontWeight: "bold",
          textAlign: "center",
        }}>
        Office Address
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          mb: 7,
        }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              ml: 1,
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <LocationOnRounded sx={{ fontSize: 40 }} />
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                }}>
                China Office
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                my: 2,
              }}>
              933 Dongli Int. Plaza, Chenghua District, Chengdu, Sichuan, China
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5505664779594!2d104.0926130747909!3d30.702918974598596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36efda9c8f2fd491%3A0xbffec556c8c61204!2sDongli%20International%20Plaza!5e0!3m2!1sen!2ssg!4v1696594146757!5m2!1sen!2ssg"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              ml: 1,
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <LocationOnRounded sx={{ fontSize: 40 }} />
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                }}>
                Bangladesh Office
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                my: 2,
              }}>
              House 191 (2nd floor), Block - D, Road - 8, EHL Mohanagar Project R/A, Dhaka - 1219, Bangladesh
            </Typography>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06397525303!2d90.25487334875977!3d23.780753027183962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c743f3addd41%3A0x78eb7e274e8e2072!2sMohanagar%20Project!5e0!3m2!1sen!2ssg!4v1696608711539!5m2!1sen!2ssg"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OfficeAddress;
