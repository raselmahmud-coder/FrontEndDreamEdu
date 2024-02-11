import React from "react";
import {
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
import founderImg from "../../assets/founder.jpg";

const AboutUsSection1 = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          py: 18,
          px: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", textAlign: "center", mt: "22px" }}>
            About us
          </Typography>
          <Typography variant="body1" sx={{}}>
            DreamEdu is a leading education consultancy established in 2018,
            dedicated to guiding and empowering students on their journey
            towards academic and career success.
            <br />
            <br />
            We understand that each student is unique, with distinct aspirations
            and goals, and we strive to provide personalized solutions that
            cater to their specific needs. Our team at DreamEdu consists of
            highly qualified and experienced education experts, counselors, and
            mentors who are passionate about helping students unlock their true
            potential. With a deep understanding of the ever-evolving
            educational landscape, we stay abreast of the latest trends,
            courses, and opportunities worldwide to offer the most up-to-date
            advice and recommendations.
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
          <img
            src={founderImg}
            alt="dream edu founder"
            width={"100%"}
            style={{ borderRadius: "20% 5px 20% 5px" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUsSection1;
