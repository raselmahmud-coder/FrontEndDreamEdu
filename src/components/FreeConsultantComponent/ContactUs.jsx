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
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import HeadingH4 from "../../globalsComponents/Headings/HeadingH4";

const ContactUs = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const [
    addFreeConsultation,
    { isError, isLoading, data: consultationData, isSuccess },
  ] = useAddFreeConsultationMutation();

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
      <HeadingH2 headingH2Text={"Contact Us"} headingH2Icon={RingVolumeIcon} marginTop={{ xs: 5 }} />
      {consultationData?.id && isSuccess && (
        <PositionedSnackbar severity={"success"} isOpen={true} />
      )}
      {isError && (
        <PositionedSnackbar
          severity={"warning"}
          message={"There is an error, try again later"}
          isOpen={true}
        />
      )}
      <Grid
        container
        spacing={{ xs: 4, md: 16 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2, mb: {md:7} }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box component="form" onSubmit={handleConsultationForm}>
            <TextField
              required
              sx={{
                my: 2,
                color: isDarkMode ? "whiteCustom.main" : "black.main",
              }}
              id="standard-basic"
              label="Name"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
                color: isDarkMode ? "whiteCustom.main" : "black.main",
              }}
              id="standard-basic"
              label="Email"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
                color: isDarkMode ? "whiteCustom.main" : "black.main",
              }}
              id="standard-basic"
              label="Phone"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              sx={{
                my: 2,
                color: isDarkMode ? "whiteCustom.main" : "black.main",
              }}
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
          <HeadingH4 alignX={"start"} HeadingH4Text={"Direct Phone Call"} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              my: 4,
            }}>
            <PhoneForwardedIcon
              sx={{
                fontSize: "2.5rem",
                color: isDarkMode ? "whiteCustom.main" : "redCustom",
                border: 1,
                p: 0.5,
                borderRadius: "50%",
                mr: 2,
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: isDarkMode ? "whiteCustom.main" : "redCustom",
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
                fontSize: "2.5rem",
                color: isDarkMode ? "whiteCustom.main" : "redCustom",
                border: 1,
                p: 0.5,
                borderRadius: "50%",
                mr: 2,
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: isDarkMode ? "whiteCustom.main" : "redCustom",
              }}>
              Phone Number China Office: +8619150064373
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
                fontSize: "2.5rem",
                color: isDarkMode ? "whiteCustom.main" : "redCustom",
                border: 1,
                p: 0.5,
                borderRadius: "50%",
                mr: 2,
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: isDarkMode ? "whiteCustom.main" : "redCustom",
              }}>
              Email Us: official@dreameduinfo.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
