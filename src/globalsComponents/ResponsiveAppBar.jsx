import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  ImageList,
  ImageListItem,
  IconButton,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { GetFilterSpaceNLowerCase } from "../utils/FilterSpaceNCapital";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../assets/logo.png";
import whiteLogo from "../assets/Logo-White.png";
import { useSelector } from "react-redux";

const pages = [
  "Home",
  "About Us",
  "Important Tips",
  "Success Story",
  "Apply for Admission",
  "Free consultation",
];
const settings = ["Dashboard", "Profile", "Logout"];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar({ mode, onClick }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { accessToken, user } = useSelector((state) => state.auth || {});
  const navigate = useNavigate();
  const handleAdminLogin = () => {
    navigate("/login");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {!accessToken && (
        <>
          <HideOnScroll>
            <AppBar sx={{
              // backgroundColor: mode ? "#000" : "#f9f9f9",
            }}>
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <ImageList
                    sx={{
                      // mr: 2,
                      // display: { xs: "none", md: "flex" },
                      // fontFamily: "monospace",
                      // fontWeight: 700,
                      // letterSpacing: ".3rem",
                      // color: "inherit",
                      // textDecoration: "none",
                    }}>
                    <ImageListItem>
                      <Link to="/">
                        <img
                          src={ whiteLogo}
                          alt={"logo"}
                          loading="lazy"
                          style={{
                            width: "140px",
                            height: "80px",
                          }}
                        />
                      </Link>
                    </ImageListItem>
                  </ImageList>
                  {/* for mobile device code start here */}
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit">
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}>
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                      <IconButton
                        sx={{ ml: 1 }}
                        onClick={() => onClick()}
                        color="inherit">
                        {mode ? <Brightness7Icon /> : <Brightness4Icon />}
                      </IconButton>
                    </Menu>
                  </Box>
                  <Box
                    sx={{ flexGrow: 0.5, display: { xs: "flex", md: "none" } }}>
                    <ImageList
                      sx={{
                        color: "inherit",
                      }}>
                      <ImageListItem>
                        <img
                          src={logo}
                          alt={"logo"}
                          loading="lazy"
                          style={{
                            width: "70px",
                            height: "50px",
                          }}
                        />
                      </ImageListItem>
                    </ImageList>
                  </Box>
                  {/* ========= for desktop view ==========*/}
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex" },
                      justifyContent: "center",
                    }}>
                    {pages.map((page) => (
                      <Link
                        style={{ textDecoration: "none" }}
                        key={page}
                        to={`/${
                          GetFilterSpaceNLowerCase(page) == "home"
                            ? ""
                            : GetFilterSpaceNLowerCase(page)
                        }`}>
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: "white", display: "block" }}>
                          {page}
                        </Button>
                      </Link>
                    ))}
                    <IconButton onClick={() => onClick()} color="inherit">
                      {mode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                  </Box>
                  {/* <Box sx={{ flexGrow: 0 }}>
                    {user?.email && accessToken  (
                      <Button
                        onClick={handleAdminLogin}
                        sx={{ my: 2, color: "white", display: "block" }}>
                        Login
                      </Button>
                    )}
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}>
                      {settings.map((setting) => (
                        <Link
                          to={`/${GetFilterSpaceNLowerCase(setting)}`}
                          key={setting}>
                          <MenuItem onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                              {setting}
                            </Typography>
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </Box> */}
                </Toolbar>
              </Container>
            </AppBar>
          </HideOnScroll>
          <Toolbar id="back-to-top-anchor" />
        </>
      )}
    </>
  );
}
export default ResponsiveAppBar;
