import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DraftsIcon from "@mui/icons-material/Drafts";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useAddFreeConsultationMutation } from "../../redux/feature/FreeConsultation/FreeConsultationAPI";
import PositionedSnackbar from "../../globalsComponents/PositionSnakBar";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const [
    addFreeConsultation,
    { isError, isLoading, data: consultationData, isSuccess },
  ] = useAddFreeConsultationMutation();

  const style = {
    my: 2,
    color: isDarkMode ? "white" : "black",

    "& .MuiInputLabel-root": {
      color: isDarkMode ? "white" : "black",
    },
  };

  const handleConsultationForm = async (even) => {
    even.preventDefault();
    const name = even.target[0].value;
    const email = even.target[1].value;
    const phone = even.target[2].value;
    const message = even.target[3].value;
    const data = {
      name,
      email,
      phone,
      message,
    };
    await addFreeConsultation(data);
    even.target[0].value = "";
    even.target[1].value = "";
    even.target[2].value = "";
    even.target[3].value = "";
  };

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
      {consultationData?.id && isSuccess && (
        <PositionedSnackbar isOpen={true} />
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2, mb: 15 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box component="form" onSubmit={handleConsultationForm}>
            <TextField
              required
              sx={{
                my: 2,
              }}
              color={`${isDarkMode ? "whiteCustom" : "accent"}`}
              id="standard-basic"
              label="Name"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
              }}
              color={`${isDarkMode ? "whiteCustom" : "accent"}`}
              id="standard-basic"
              label="Email"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
              }}
              color={`${isDarkMode ? "whiteCustom" : "accent"}`}
              id="standard-basic"
              label="Phone"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
              }}
              color={`${isDarkMode ? "whiteCustom" : "accent"}`}
              id="standard-basic"
              label="Your Message"
              variant="standard"
              fullWidth
            />
            <Button disabled={isLoading} type="submit" variant="contained">
              {isLoading ? <CircularProgress color="success" /> : "Submit"}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              my: 2,
            }}>
            Get in touch
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 4,
            }}>
            <PhoneForwardedIcon
              sx={{
                fontSize: "3rem",
                color: isDarkMode ? "accent.main" : "secondary.main",
                border: 1,
                borderRadius: "50%",
                mr: 2,
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
              }}>
              Phone Number Bangladesh Office: +8801760680960
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 4,
            }}>
            <PhoneForwardedIcon
              sx={{
                fontSize: "3rem",
                color: isDarkMode ? "accent.main" : "secondary.main",
                border: 1,
                borderRadius: "50%",
                mr: 2,
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
              }}>
              Phone Number China Office: +861688220123
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 4,
            }}>
            <DraftsIcon
              sx={{
                fontSize: "3rem",
                color: isDarkMode ? "accent.main" : "secondary.main",
                border: 1,
                borderRadius: "50%",
                mr: 2,
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
              }}>
              Email Us: official@dreameduinfo.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <PositionedSnackbar/> */}
    </>
  );
};

export default ContactUs;
