import React from "react";
import {
  Box,
  Button,
  Container,
  Fab,
  Fade,
  Grid,
  TextField,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MailLockIcon from "@mui/icons-material/MailLock";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import OfficeAddress from "./OfficeAddress";

/*==== Back to top system design == */
function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor",
    );
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, left: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Box
        component="section"
        sx={{
          mt: 8,
        }}>
        <OfficeAddress />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            alignItems: "center",
          }}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}>
              Important Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <PlayArrowIcon />
              <Typography
                onClick={() => {
                  navigate("/apply-for-admission");
                }}
                variant="subtitle1"
                sx={{
                  my: 1,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}>
                Apply Now
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <PlayArrowIcon />
              <Typography
                variant="subtitle1"
                sx={{
                  my: 1,
                  fontWeight: "bold",
                }}>
                Terms and conditions
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <PlayArrowIcon />
              <Typography
                variant="subtitle1"
                sx={{
                  my: 1,
                  fontWeight: "bold",
                }}>
                Privacy policy
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}>
              Services
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <PlayArrowIcon />
              <Typography
                variant="subtitle1"
                sx={{
                  my: 1,
                  fontWeight: "bold",
                }}>
                Counselling
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <PlayArrowIcon />
              <Typography
                variant="subtitle1"
                sx={{
                  my: 1,
                  fontWeight: "bold",
                }}>
                Admission
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <PlayArrowIcon />
              <Typography
                variant="subtitle1"
                sx={{
                  my: 1,
                  fontWeight: "bold",
                }}>
                Visa processing
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
              }}>
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <a
                style={{ display: "flex", alignItems: "center", color:"inherit" }}
                title="Facebook Page"
                href="https://facebook.com/DreamEduChina"
                target="_blank"
                rel="noopener noreferrer">
                <FacebookRoundedIcon fontSize={"medium"} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    my: 1,
                    fontWeight: "bold",
                  }}>
                  Facebook{" "}
                </Typography>
              </a>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <a
                style={{ display: "flex", alignItems: "center", color:"inherit" }}
                title="YouTube Channel"
                href="https://www.youtube.com/@dreameduchina5640"
                target="_blank"
                rel="noopener noreferrer">
                <YouTubeIcon fontSize={"medium"} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    my: 1,
                    fontWeight: "bold",
                  }}>
                  YouTube{" "}
                </Typography>
              </a>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <a
                style={{ display: "flex", alignItems: "center", color:"inherit" }}
                title="WhatsApp"
                href="https://api.whatsapp.com/send/?phone=8619150064373&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer">
                <WhatsApp fontSize={"medium"} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    my: 1,
                    fontWeight: "bold",
                  }}>
                  WhatsApp{" "}
                </Typography>
              </a>
            </Box>
          </Grid>
        </Grid>
        <Typography
          component="h6"
          variant={"body2"}
          sx={{
            mt: 5,
            mb: 1,
            textAlign: "center",
          }}>
          © 2018 - {new Date().getFullYear()} Dream Edu Info. All rights
          reserved. Powered by{" "}
          <a
            style={{color:"inherit"}}
            href="https://github.com/raselmahmud-coder"
            target="_blank"
            rel="noopener noreferrer">
            Rasel Mahmud
          </a>
        </Typography>
        <ScrollTop
          sx={{
            zIndex: 1000,
          }}>
          <Fab
            style={{
              color: "#1666c0",
            }}
            size="small"
            aria-label="scroll back to top">
            <KeyboardArrowUp sx={{ fontSize: "40px" }} color="#1666c0" />
          </Fab>
        </ScrollTop>
      </Box>
    </Container>
  );
};

export default Footer;
