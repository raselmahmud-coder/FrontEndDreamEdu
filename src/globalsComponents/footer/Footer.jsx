import React from "react";
import {
  Box,
  Container,
  Fab,
  Fade,
  Grid,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import { footerMenus, socialContact } from "../../utils/fakeData";
import { useSelector } from "react-redux";
import styles from "../../styles/AnimationCustom.module.css";
import graduateCap from "../../assets//backgrounds/Buildings.gif";
import whiteLogo from "../../assets/logo2.png";

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
    <Box
      sx={{
        backgroundImage: isDarkMode ? "" : `url(${graduateCap})`,
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
      }}>
      <Container maxWidth="xl">
        <Box
          component="section"
          sx={{
            mt: 8,
          }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}>
            {/* Desktop view footer headings */}
            {footerMenus.length > 0 &&
              footerMenus.map((footer) => (
                <Grid key={footer.id} item xs={12} sm={6} md={3}>
                  <Typography
                    variant="h6"
                    sx={{
                      display: { xs: "none", sm: "none", md: "block" },
                      fontWeight: "bold",
                      color: isDarkMode ? "whiteCustom.main" : "deepGray.main",
                      textAlign: footer.id == 1 && "center",
                    }}>
                    {footer.footerName}
                    <hr />
                  </Typography>
                </Grid>
              ))}
          </Grid>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              alignItems: "start",
            }}>
            {footerMenus.length > 0 &&
              footerMenus.map(({ id, footerName, item1, item2, item3 }) => (
                <Grid item xs={12} sm={6} md={3} key={id}>
                  {/* This heading for Mobile version */}
                  <Typography
                    variant="h6"
                    sx={{
                      display: { xs: "block", sm: "block", md: "none" },
                      fontWeight: "bold",
                      textAlign: "center",
                      color: isDarkMode ? "whiteCustom.main" : "deepGray.main",
                    }}>
                    {footerName}
                    <hr />
                  </Typography>
                  {/Apply Now|Scholarship Assistance/.test(item1?.name) ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        color: "redCustom.main",
                      }}>
                      <PlayArrowIcon />
                      <Typography
                        variant="subtitle1"
                        href={item1.link}
                        component={"a"}
                        sx={{
                          textDecoration: "none",
                          my: 1,
                          color: "inherit",
                          fontWeight: "bold",
                          cursor: "pointer",
                          "&:hover": {
                            transform: "scale(1.05)",
                            transition: "all 0.5s",
                            color: "linkHover.main",
                          },
                        }}>
                        {item1.name}
                      </Typography>
                    </Box>
                  ) : (
                    /\.(jpg|jpeg|png)$/i.test(item1?.name) && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "start",
                        }}>
                        <img
                          loading="lazy"
                          style={{
                            width: "60%",
                            height: "140px",
                            borderRadius: "8px",
                            margin: "auto",
                          }}
                          src={isDarkMode ? whiteLogo : item1.name}
                          alt="dream edu logo"
                        />
                      </Box>
                    )
                  )}
                  {/Blogs|Documentation Guidance/.test(item2?.name) && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        color: "redCustom.main",
                      }}>
                      <PlayArrowIcon />
                      <Typography
                        variant="subtitle1"
                        href={item2.link}
                        component={"a"}
                        sx={{
                          textDecoration: "none",
                          my: 1,
                          color: "inherit",
                          fontWeight: "bold",
                          cursor: "pointer",
                          "&:hover": {
                            transform: "scale(1.05)",
                            transition: "all 0.5s",
                            color: "linkHover.main",
                          },
                        }}>
                        {item2.name}
                      </Typography>
                    </Box>
                  )}
                  {/About Us|Interview Assistance/.test(item3?.name) && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        color: "redCustom.main",
                      }}>
                      <PlayArrowIcon />
                      <Typography
                        variant="subtitle1"
                        href={item3.link}
                        component={"a"}
                        sx={{
                          textDecoration: "none",
                          my: 1,
                          color: "inherit",
                          fontWeight: "bold",
                          cursor: "pointer",
                          "&:hover": {
                            transform: "scale(1.05)",
                            transition: "all 0.5s",
                            color: "linkHover.main",
                          },
                        }}>
                        {item3.name}
                      </Typography>
                    </Box>
                  )}
                  {footerName === "Contact Us" &&
                    socialContact.length > 0 &&
                    socialContact.map(({ title, icon, src, mediaName }) => (
                      <Box
                        key={title}
                        component={"a"}
                        className={styles.borderAnimationContainer}
                        sx={{
                          display: "flex",
                          // alignItems: "center",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                        title={title}
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Typography
                          className={styles.borderAnimationMain}
                          variant="subtitle1"
                          sx={{
                            p: 1,
                            mb: 1,
                            fontWeight: "bold",
                            display: "inline-flex",
                            alignItems: "center",
                            transition: "background-color 0.5s, color 0.5s",
                            "&:hover": {
                              transform: "scale(1.05)",
                              color: isDarkMode
                                ? "whilinkHover.main"
                                : "redCustom.main",
                              backgroundColor: isDarkMode
                                ? "redCustom.main"
                                : "primary.main",
                            },
                          }}>
                          {React.createElement(icon, {
                            fontSize: "medium",
                            sx: {
                              mr: 2,
                              color:
                                mediaName == "Facebook"
                                  ? "#316FF6"
                                  : (mediaName == "YouTube" && " #FF0000") ||
                                    (mediaName == "WhatsApp" && "#25D366"),
                              transition: "color 0.3s",
                              "&:hover": {
                                transform: "scale(1.05)",
                                color: isDarkMode
                                  ? "prilinkHover.main"
                                  : "secondary.main",
                              },
                            },
                          })}
                          {mediaName}
                        </Typography>
                      </Box>
                    ))}
                </Grid>
              ))}
          </Grid>
          {/* Curtesy footer start */}
          <Typography
            variant={"body2"}
            sx={{
              mt: 5,
              pb: 1,
              textAlign: "center",
              color: "redCustom.main",
            }}>
            Since © 2018 - {new Date().getFullYear()} DreamEdu Consultancy, All
            Rights Reserved. Designed & Developed by{" "}
            <a
              style={{ color: "inherit" }}
              href="https://github.com/raselmahmud-coder"
              target="_blank">
              Rasel Mahmud
            </a>
          </Typography>
        </Box>
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
      </Container>
    </Box>
  );
};

export default Footer;
