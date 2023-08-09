import React from "react";
import {
  Box,
  Button,
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
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

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
        sx={{ position: "fixed", bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}

const Footer = () => {
  return (
    <Box
      component="section"
      sx={{
        my:4,
      }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
            }}>
            <MailLockIcon
              sx={{ fontSize: "62px", border: 1, borderRadius: "50%", p: 0.5 }}
            />
            <Box
              sx={{
                ml: 1,
              }}>
              <Typography variant="h3">Subscribe our newsletter</Typography>
              <Typography variant="subtitle2">
                Enter your mail address to get our updates, offer and study
                abroad related all updates
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            component="form"
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
            autoComplete="off">
            <TextField
              style={{
                width: "60%",
              }}
              label="Email"
              color="secondary"
              focused
              placeholder="Enter your email"
            />
            <Button
              variant="contained"
              sx={{
                py: 2,
                px: 4,
                borderRadius: "50px",
              }}
              size="large">
              <NotificationsActiveIcon/>
              Subscribe Now
            </Button>
          </Box>
        </Grid>
      </Grid>
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
              variant="subtitle1"
              sx={{
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
                fontWeight: "bold",
              }}>
              Privacy policy
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
                fontWeight: "bold",
              }}>
              Disclaimer and copyrights
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
            Location
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
                fontWeight: "bold",
              }}>
              No 933 Dongli International Plaza, Chenghua District, Chengdu,
              Sichuan, China.
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
                fontWeight: "bold",
              }}>
              E-mail: official@dreameduinfo.com
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
                fontWeight: "bold",
              }}>
              Phone: +86-19150064373
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography
        component="h6"
        variant={"body2"}
        sx={{
          my:3,
          textAlign: "center",
        }}>
        © 2018 - {new Date().getFullYear()} Dream Edu Info. All rights reserved.
        Powered by Programming Dude
      </Typography>
      <ScrollTop
        sx={{
          zIndex: 1000,
          color: "green",
        }}>
        <Fab
          style={{
            backgroundColor: "red",
            color: "#1666c0",
          }}
          size="small"
          aria-label="scroll back to top">
          <KeyboardArrowUp color="#1666c0" />
        </Fab>
      </ScrollTop>
    </Box>
  );
};

export default Footer;
