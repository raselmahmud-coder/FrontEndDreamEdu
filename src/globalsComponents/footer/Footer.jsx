import React from "react";
import {
  Box,
  CardMedia,
  Container,
  Fab,
  Fade,
  Grid,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import OfficeAddress from "./OfficeAddress";
import { footerMenus, socialContact } from "../../utils/fakeData";
import { useSelector } from "react-redux";
import styles from "../../styles/AnimationCustom.module.css";

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
  const { isDarkMode } = useSelector((state) => state.colorMode);

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
          {footerMenus.length > 0 &&
            footerMenus.map((footer) => (
              <Grid key={footer.id} item xs={12} sm={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{
                    display: { xs: "none", sm: "none", md: "block" },
                    fontWeight: "bold",
                    textAlign: "center",
                  }}>
                  {footer.footerName}
                  <hr />
                </Typography>
              </Grid>
            ))}
        </Grid>
        {/* responsive view heading also here */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            alignItems: "center",
          }}>
          {footerMenus.length > 0 &&
            footerMenus.map(({ id, footerName, item1, item2, item3 }) => (
              <Grid item xs={12} sm={6} md={3} key={id}>
                <Typography
                  variant="h6"
                  sx={{
                    display: { xs: "block", sm: "block", md: "none" },
                    fontWeight: "bold",
                    textAlign: "center",
                  }}>
                  {footerName}
                  <hr />
                </Typography>
                {item1?.name.includes("Apply Now") ||
                item1?.name.includes("Counselling") ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <PlayArrowIcon />
                    <Typography
                      component={"a"}
                      variant="subtitle1"
                      href={item1.link}
                      sx={{
                        my: 1,
                        color: "inherit",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}>
                      {item1.name}
                    </Typography>
                  </Box>
                ) : (
                  /\.(jpg|jpeg|png)$/i.test(item1?.name) && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}>
                      <img
                        style={{
                          width: "100%",
                          height: "240px",
                          borderRadius: "8px",
                          margin: "auto",
                        }}
                        src={item1.name}
                        alt="dream edu logo"
                      />
                    </Box>
                  )
                )}
                {item2 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <PlayArrowIcon />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        my: 1,
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}>
                      {item2}
                    </Typography>
                  </Box>
                )}
                {item3 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <PlayArrowIcon />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        my: 1,
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}>
                      {item3}
                    </Typography>
                  </Box>
                )}
                {footerName === "Contact Us" &&
                  socialContact.length > 0 &&
                  socialContact.map(({ title, icon, src, mediaName }) => (
                    <Box
                      key={title}
                      sx={{
                        mb: 0.7,
                      }}>
                      <Box
                        component={"a"}
                        className={styles.rainbow}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          transition: "background-color 0.9s, color 0.9s",
                          color: "inherit",
                          "&:hover": {
                            color: isDarkMode ? "white" : "#004808",
                            backgroundColor: isDarkMode
                              ? "#004808"
                              : "primary.main",
                          },
                        }}
                        title={title}
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer">
                        {React.createElement(icon, {
                          fontSize: "medium",
                          sx: {
                            mr: 2,
                            color:
                              mediaName == "Facebook"
                                ? "#316FF6"
                                : (mediaName == "YouTube" &&
                                    " #FF0000") ||
                                  (mediaName == "WhatsApp" && "#25D366"),
                            transition: "color 0.3s",
                            "&:hover": {
                              color: isDarkMode
                                ? "primary.main"
                                : "secondary.main",
                            },
                          },
                        })}
                        <Typography
                          variant="subtitle1"
                          sx={{
                            my: 1,
                            fontWeight: "bold",
                          }}>
                          {mediaName}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
              </Grid>
            ))}
        </Grid>
        {/* Curtesy footer start */}
        <Typography
          component="h6"
          variant={"body2"}
          sx={{
            mt: 5,
            mb: 1,
            textAlign: "center",
          }}>
         Since © 2018 - {new Date().getFullYear()} Dream Edu Info. All rights
          reserved. Designed & Developed by{" "}
          <a
            style={{ color: "inherit" }}
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
