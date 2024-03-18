import * as React from "react";
import { makeStyles } from "@mui/styles";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import {
  usePopupState,
  bindHover,
  bindFocus,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNoSpaceNLowerCase } from "../../utils/FilterSpaceNCapital";
import {
  subMenu1,
  subMenu2,
  subMenu2Links,
  subPageLinks,
} from "../../utils/allDropDownMenus";
import "./navBar.css";

const useCascadingMenuStyles = makeStyles((theme) => ({
  submenu: {
    marginTop: theme.spacing(-1),
  },
  title: {
    flexGrow: 1,
  },
  moreArrow: {
    marginRight: theme.spacing(-1),
  },
}));

const CascadingContext = React.createContext({
  parentPopupState: null,
  rootPopupState: null,
});

function CascadingMenuItem({ onClick, ...props }) {
  const { rootPopupState } = React.useContext(CascadingContext);
  if (!rootPopupState) throw new Error("must be used inside a CascadingMenu");
  const handleClick = React.useCallback(
    (event) => {
      rootPopupState.close(event);
      if (onClick) onClick(event);
    },
    [rootPopupState, onClick],
  );

  return <MenuItem {...props} onClick={handleClick} />;
}

function CascadingSubmenu({ title, popupId, ...props }) {
  const classes = useCascadingMenuStyles();
  const { parentPopupState } = React.useContext(CascadingContext);
  const popupState = usePopupState({
    popupId,
    variant: "popover",
    parentPopupState,
  });
  return (
    <React.Fragment>
      <MenuItem className={`nonActive`} {...bindHover(popupState)} {...bindFocus(popupState)}>
        <span className={`${classes.title} navBarFont`}>{title}</span>
        <ChevronRight className={`${classes.moreArrow} navBarFont`} />
      </MenuItem>
      <CascadingMenu
        {...props}
        classes={{ ...props.classes, paper: classes.submenu }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        popupState={popupState}
      />
    </React.Fragment>
  );
}

function CascadingMenu({ popupState, ...props }) {
  const { rootPopupState } = React.useContext(CascadingContext);
  const context = React.useMemo(
    () => ({
      rootPopupState: rootPopupState || popupState,
      parentPopupState: popupState,
    }),
    [rootPopupState, popupState],
  );

  return (
    <CascadingContext.Provider value={context}>
      <HoverMenu {...props} {...bindMenu(popupState)} />
    </CascadingContext.Provider>
  );
}

const SubMenus = ({ page, subPages }) => {
  const isDarkMode = useSelector((state) => state.colorMode);
  const popupState = usePopupState({
    popupId: "demoMenu",
    variant: "popover",
  });

  return (
    <>
      <NavLink
        to={"#"}
        className={`navBarFont nonActive`}
        style={{
          //   color: isDarkMode ? "#fff" : "#000",
          color: "inherit",
          textDecoration: "none",
          padding: "8px",
          borderRadius: "5px",
          margin: "0px 8px",
          display: "flex",
          textTransform: "uppercase",
        }}
        {...(true ? bindHover(popupState) : {})}
        {...(true ? bindFocus(popupState) : {})}>
        {page}
        <ArrowDropDownCircleIcon sx={{ ml: 0.6, fontSize: {xs:"0.8rem", md: "1.2rem" } }} />
      </NavLink>
      <CascadingMenu
        className={`navBarFont`}
        style={{
          textTransform: "uppercase",
        }}
        popupState={popupState}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}>
        {subPages.map(
          (eachSubP) =>
            subMenu1[getNoSpaceNLowerCase(eachSubP)] && (
              <CascadingSubmenu
                className={`navBarFont`}
                style={{
                  textTransform: "uppercase",
                }}
                key={eachSubP}
                popupId="moreChoicesCascadingMenu"
                title={eachSubP}>
                {subMenu1[getNoSpaceNLowerCase(eachSubP)].map((eachMenu1) => (
                  <CascadingSubmenu
                    className={`navBarFont`}
                    style={{
                      textTransform: "uppercase",
                    }}
                    key={eachMenu1}
                    popupId="evenMoreChoicesCascadingMenu"
                    title={eachMenu1}>
                    {subMenu2[getNoSpaceNLowerCase(eachMenu1)] &&
                      subMenu2[getNoSpaceNLowerCase(eachMenu1)].map(
                        (eachMenu2) => (
                          <CascadingMenuItem
                            className={`navBarFont nonActive`}
                            style={{
                              textTransform: "uppercase",
                            }}
                            key={eachMenu2}
                            component="a"
                            target="_blank"
                            href={
                              subMenu2Links[getNoSpaceNLowerCase(eachMenu2)]
                            }>
                            {eachMenu2}
                          </CascadingMenuItem>
                        ),
                      )}
                  </CascadingSubmenu>
                ))}
              </CascadingSubmenu>
            ),
        )}
        {subPages.map(
          (item) =>
            !subMenu1[getNoSpaceNLowerCase(item)] && (
              <CascadingMenuItem
                className={`navBarFont nonActive`}
                style={{
                  textTransform: "uppercase",
                }}
                component="a"
                target="_blank"
                href={subPageLinks[getNoSpaceNLowerCase(item)]}
                key={item}>
                {item}
              </CascadingMenuItem>
            ),
        )}
      </CascadingMenu>
    </>
  );
};

export default SubMenus;
