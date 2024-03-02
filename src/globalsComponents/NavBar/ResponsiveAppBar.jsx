import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  Container,
  IconButton,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  GetFilterSpaceNLowerCase,
  getNoSpaceNLowerCase,
} from "../../utils/FilterSpaceNCapital";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../../assets/DREAMEDULOGO-01.png";
import whiteLogo from "../../assets/logoWhiteMode.png";
import NewsTicker from "../NewsTicker/NewsTicker";
import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { setModeChange } from "../../redux/feature/userColorMode/userColorModeSlice";
import { useGetNewsTickerUniversityQuery } from "../../redux/feature/Universities/universitiesAPI";
import SubMenus from "./SubMenus";
import { pages, subPages } from "../../utils/allDropDownMenus";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
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
      getNewUniversities.NewUniversityAdmission.forEach((university) =>
        setNewsTicker((prevNewsTicker) => [...prevNewsTicker, university]),
      );
    }
  }, [getNewUniversities]);
  const trigger = useScrollTrigger();
  function HideOnScroll({ children }) {
    return (
      <Slide appear={false} direction="down" in={!trigger} timeout={500}>
        {children}
      </Slide>
    );
  }
  return (
    <>
      <AppBar>
        {newsTicker.length > 0 && !trigger && (
          <HideOnScroll>
            <Box sx={{ bgcolor: "inherit" }}>
              <NewsTicker news={newsTicker} />
            </Box>
          </HideOnScroll>
        )}
        <ElevationScroll>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                }}>
                <Link to="/">
                  <img
                    src={isDarkMode ? whiteLogo : logo}
                    alt={"logo"}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "65px",
                    }}
                  />
                </Link>
              </Box>
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
                  {pages.map((page, index1) => (
                    <Box key={index1}>
                      {!subPages[getNoSpaceNLowerCase(page)] && (
                        <NavLink
                          onClick={handleCloseNavMenu}
                          className={`navBarFont
                          ${({ isActive }) =>
                            isActive
                              ? isDarkMode
                                ? "activeDark"
                                : "activeLight"
                              : "nonActive"}
                          `}
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                            textDecoration: "none",
                            padding: "8px",
                            borderRadius: "5px",
                            margin: "0px 8px",
                            display: "block",
                            textTransform: "uppercase",
                          }}
                          to={`/${
                            GetFilterSpaceNLowerCase(page) == "home"
                              ? ""
                              : GetFilterSpaceNLowerCase(page)
                          }`}>
                          {page}
                        </NavLink>
                      )}
                      {subPages[getNoSpaceNLowerCase(page)] && (
                        <SubMenus
                          page={page}
                          subPages={subPages[getNoSpaceNLowerCase(page)]}
                        />
                      )}
                    </Box>
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
                <Link to="/">
                  <img
                    src={isDarkMode ? whiteLogo : logo}
                    alt={"logo"}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "65px",
                    }}
                  />
                </Link>
              </Box>
              {/* ========= for desktop view ==========*/}
              <Box
                component={"nav"}
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "end",
                }}>
                {pages.map((page, index1) => (
                  <React.Fragment key={index1}>
                    {!subPages[getNoSpaceNLowerCase(page)] && (
                      <NavLink
                        onClick={handleCloseNavMenu}
                        className={({ isActive }) =>
                          isActive
                            ? isDarkMode
                              ? "activeDark"
                              : "activeLight"
                            : "nonActive"
                        }
                        style={{
                          color: isDarkMode ? "#fff" : "#000",
                          textDecoration: "none",
                          padding: "8px",
                          borderRadius: "5px",
                          margin: "0px 8px",
                          display: "block",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                        to={`/${
                          GetFilterSpaceNLowerCase(page) == "home"
                            ? ""
                            : GetFilterSpaceNLowerCase(page)
                        }`}>
                        {page}
                      </NavLink>
                    )}
                    {subPages[getNoSpaceNLowerCase(page)] && (
                      <SubMenus
                        page={page}
                        subPages={subPages[getNoSpaceNLowerCase(page)]}
                      />
                    )}
                  </React.Fragment>
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
        </ElevationScroll>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
export default ResponsiveAppBar;
