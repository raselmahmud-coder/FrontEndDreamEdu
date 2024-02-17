import * as React from "react";
import { makeStyles } from "@mui/styles";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@mui/material/MenuItem";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import {
  usePopupState,
  bindHover,
  bindFocus,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

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
      <MenuItem {...bindHover(popupState)} {...bindFocus(popupState)}>
        <span className={classes.title}>{title}</span>
        <ChevronRight className={classes.moreArrow} />
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
        style={{
          //   color: isDarkMode ? "#fff" : "#000",
          color: "inherit",
          textDecoration: "none",
          padding: "8px",
          borderRadius: "50% 20% / 10% 40%",
          margin: "0px 8px",
          display: "block",
          fontSize: "1.2rem",
        }}
        {...(true ? bindHover(popupState) : {})}
        {...(true ? bindFocus(popupState) : {})}>
        {page}⬇️
      </NavLink>
      <CascadingMenu
        popupState={popupState}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}>
        {subPages.map((item) => (
          <CascadingMenuItem key={item}>{item}</CascadingMenuItem>
        ))}
        <CascadingSubmenu
          popupId="moreChoicesCascadingMenu"
          title="More Choices">
          <CascadingMenuItem>Cheesecake</CascadingMenuItem>
          <CascadingMenuItem>Cheesedeath</CascadingMenuItem>
          <CascadingSubmenu
            popupId="evenMoreChoicesCascadingMenu"
            title="Even More Choices">
            <CascadingMenuItem>Cake (the band)</CascadingMenuItem>
            <CascadingMenuItem>Death Metal</CascadingMenuItem>
          </CascadingSubmenu>
          <CascadingSubmenu
            popupId="moreBenignChoices"
            title="More Benign Choices">
            <CascadingMenuItem>Salad</CascadingMenuItem>
            <CascadingMenuItem>Lobotomy</CascadingMenuItem>
          </CascadingSubmenu>
        </CascadingSubmenu>
      </CascadingMenu>
    </>
  );
};

export default SubMenus;
