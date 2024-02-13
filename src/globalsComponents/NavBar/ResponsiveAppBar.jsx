import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  MenuItem,
  ImageList,
  ImageListItem,
  IconButton,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GetFilterSpaceNLowerCase } from "../../utils/FilterSpaceNCapital";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../../assets/logo.png";
import whiteLogo from "../../assets/logo2.png";
import NewsTicker from "../NewsTicker/NewsTicker";
import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { setModeChange } from "../../redux/feature/userColorMode/userColorModeSlice";
import { useGetNewsTickerUniversityQuery } from "../../redux/feature/Universities/universitiesAPI";

const pages = [
  "Home",
  "Study in China",
  "Apply Now",
  "Success Story",
  "About Us",
  "Free Consultation",
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { data: getNewUniversities } = useGetNewsTickerUniversityQuery();
  const [newsTicker, setNewsTicker] = React.useState([]);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  React.useEffect(() => {
    if (getNewUniversities?.NewUniversityAdmission) {
      getNewUniversities.NewUniversityAdmission.map((university) =>
        setNewsTicker((prevNewsTicker) => [...prevNewsTicker, university]),
      );
    }
  }, [getNewUniversities]);
  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={
            {
              // backgroundColor: isDarkMode ? "#000" : "#f9f9f9",
            }
          }>
          {newsTicker.length > 1 && <NewsTicker news={newsTicker} />}
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
                  <Link to="/">
                    <img
                      src={isDarkMode ? whiteLogo : logo}
                      alt={"logo"}
                      loading="lazy"
                      style={{
                        // width: "130px",
                        height: "9vh",
                      }}
                    />
                  </Link>
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
                    <NavLink
                      onClick={handleCloseNavMenu}
                      className={({ isActive }) =>
                        isActive
                          ? isDarkMode
                            ? "activeDark"
                            : "activeLight"
                          : ""
                      }
                      style={{
                        color: isDarkMode ? "#fff" : "#000",
                        textDecoration: "none",
                        padding: "8px",
                        borderRadius: "50% 20% / 10% 40%",
                        margin: "0px 8px",
                        display: "block",
                        fontSize: "1.2rem",
                      }}
                      key={page}
                      to={`/${
                        GetFilterSpaceNLowerCase(page) == "home"
                          ? ""
                          : GetFilterSpaceNLowerCase(page)
                      }`}>
                      {page}
                    </NavLink>
                  ))}
                  <IconButton
                    sx={{ ml: 1 }}
                    onClick={() =>
                      dispatch(setModeChange({ isDarkMode: !isDarkMode }))
                    }
                    color="inherit">
                    {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
                  </IconButton>
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0.5, display: { xs: "flex", md: "none" } }}>
                <ImageList
                  sx={{
                    color: "inherit",
                  }}>
                  <ImageListItem>
                    <Link to="/">
                      <img
                        src={isDarkMode ? whiteLogo : logo}
                        alt={"logo"}
                        loading="lazy"
                        style={{
                          width: "70px",
                          height: "50px",
                        }}
                      />
                    </Link>
                  </ImageListItem>
                </ImageList>
              </Box>
              {/* ========= for desktop view ==========*/}
              <Box
                component={"nav"}
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "end",
                }}>
                {pages.map((page) => (
                  <NavLink
                    onClick={handleCloseNavMenu}
                    className={({ isActive }) =>
                      isActive
                        ? isDarkMode
                          ? "activeDark"
                          : "activeLight"
                        : ""
                    }
                    style={{
                      color: isDarkMode ? "#fff" : "#000",
                      textDecoration: "none",
                      padding: "8px",
                      borderRadius: "50% 20% / 10% 40%",
                      margin: "0px 8px",
                      display: "block",
                      fontSize: "1.2rem",
                    }}
                    key={page}
                    to={`/${
                      GetFilterSpaceNLowerCase(page) == "home"
                        ? ""
                        : GetFilterSpaceNLowerCase(page)
                    }`}>
                    {page}
                  </NavLink>
                ))}
                <IconButton
                  onClick={() =>
                    dispatch(setModeChange({ isDarkMode: !isDarkMode }))
                  }
                  color="inherit">
                  {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
export default ResponsiveAppBar;
