import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
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
const style = {
  my: 2,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const ContactUs = () => {
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
          <Item>
            <Box component="form" onSubmit={handleConsultationForm}>
              <TextField
                required
                sx={style}
                id="standard-basic"
                label="Name"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                sx={style}
                id="standard-basic"
                label="Email"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                sx={style}
                id="standard-basic"
                label="Phone"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                sx={style}
                id="standard-basic"
                label="Your Message"
                variant="standard"
                fullWidth
              />
              <Button disabled={isLoading} type="submit" variant="contained">
                {isLoading ? <CircularProgress color="success" /> : "Submit"}
              </Button>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
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
              <LocationOnIcon
                sx={{
                  fontSize: "3rem",
                  color: "primary.main",
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
                933 Dongli International Plaza, Chenghua District, Chengdu,
                Sichuan, China.
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
                  color: "primary.main",
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                my: 4,
              }}>
              <PhoneForwardedIcon
                sx={{
                  fontSize: "3rem",
                  color: "primary.main",
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
                +861688220123
              </Typography>
              <Divider orientation="vertical" flexItem>
                OR
              </Divider>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                }}>
                +861688220123
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
      {/* <PositionedSnackbar/> */}
    </>
  );
};

export default ContactUs;
