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
} from "@mui/material";
import { Link } from "react-router-dom";
import { GetFilterSpaceNLowerCase } from "../utils/FilterSpaceNCapital";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../assets/logo.png";
import logo1 from "../assets/🇪🇸.png";

const pages = [
  "Home",
  "About Us",
  "Important Tips",
  "Why China",
  "Success Story",
  "Free consultation",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({ mode, onClick }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImageList
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
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
          {/* for mobile device code start here */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
          <Box sx={{ flexGrow: 0.5, display: { xs: "flex", md: "none" } }}>
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
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
