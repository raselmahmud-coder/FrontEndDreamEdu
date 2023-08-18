import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { GetFilterSpaceNLowerCase } from "../../../utils/FilterSpaceNCapital";
import { Link } from "react-router-dom";

const listItems = [
  { itemText: "Dashboard", itemIcon: <DashboardIcon /> },
  { itemText: "Users", itemIcon: <PeopleIcon /> },
  { itemText: "Blogs", itemIcon: <ShoppingCartIcon /> },
  { itemText: "Logout", itemIcon: <LayersIcon /> },
];
export const mainListItems = (
  <React.Fragment>
    {listItems.map((item) => (
      <Link
        style={{ textDecoration: "none", }}
        key={item.itemText}
        to={`/admin/${GetFilterSpaceNLowerCase(item.itemText)}`}>
        <ListItemButton>
          <ListItemIcon>{item.itemIcon}</ListItemIcon>
          <ListItemText primary={item.itemText} />
        </ListItemButton>
      </Link>
    ))}
  </React.Fragment>
);
