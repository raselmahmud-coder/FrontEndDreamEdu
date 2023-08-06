import React from "react";
import {
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { CheckCircleOutline, SwapCalls } from "@mui/icons-material";

const AboutUsSection1 = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", textAlign: "center", mt: "22px" }}>
            About us
          </Typography>
          <Typography variant="body1" sx={{}}>
            Eduplan student consultancy is one of the renowned international
            education consultancy firms which assisting overseas students
            <br />
            The head office of Eduplan is located in India which helps all
            Indian students to get admission into top-ranked universities from
            the United Kingdom, USA, Australia, Canada,Germany and Sweden. At
            the same time, we have a very strong relationship with our partner
            Malaysian, Cyprus and Chinese Universities.
          </Typography>

          <List>
            <ListItem
              disablePadding
              sx={{
                my: 2,
              }}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon sx={{ fontSize: "55px", mr: 1 }} />
                </ListItemIcon>
                <ListItemText primary="Get life-time free access with one time payment in our courses plan. Easy & simple!" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                my: 2,
              }}>
              <ListItemButton>
                <ListItemIcon>
                  <CheckCircleOutline sx={{ fontSize: "55px", mr: 1 }} />
                </ListItemIcon>
                <ListItemText primary="We find the expert tuotor with huge teaching experience" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                my: 2,
              }}>
              <ListItemButton>
                <ListItemIcon>
                  <SwapCalls sx={{ fontSize: "55px", mr: 1 }} />
                </ListItemIcon>
                <ListItemText primary="We present worldclass courses with practical learning tasks that make students more confident." />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            sx={{ width: "100%", height: 470 }}
            image={"https://themeim.com/demo/eduplan/assets/img/about/01.jpg"}
            title="green"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUsSection1;
