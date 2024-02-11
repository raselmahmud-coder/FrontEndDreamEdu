import React from "react";
import { LocationOnRounded } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

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
                Dhaka, Bangladesh Office
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                my: 2,
              }}>
              House 191 (2nd floor), Block - D, Road - 8, EHL Mohanagar Project
              R/A, Dhaka - 1219, Bangladesh
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29211.981807669024!2d90.41281649999999!3d23.7652842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29d57af324a737db%3A0xe20d43dbb90f786e!2sDreamEdu%20Consultancy!5e0!3m2!1sen!2s!4v1703606464041!5m2!1sen!2s"
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
                Morocco Office
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                my: 2,
              }}>
              Ex-Foucauld , 17 Rue el oraibi Jilali , Casablanca Morocco 20250
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.3171352959625!2d-7.617773988284896!3d33.597075073220594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d28315a03ba7%3A0x3d5276c9b2f30476!2s17%20Rue%20el%20Oraibi%20Jilali%2C%20Casablanca%2020250%2C%20Morocco!5e0!3m2!1sen!2s!4v1707669308339!5m2!1sen!2s"
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
                Chattogram, Bangladesh Office
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                my: 2,
              }}>
              Mim Corporation, Y.B Chowdhury Vhobon Chok Super Mor, 2no Lal
              Chand Road, Beside Chawkbazar Police Station, Chawkbazar
              Chattogram.
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14759.862604915843!2d91.81871860851543!3d22.35492578724342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89e1a92c4b9%3A0xa6819d9009884ddb!2sChawk%20Bazar%2C%20Chattogram%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1707669517802!5m2!1sen!2s"
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
