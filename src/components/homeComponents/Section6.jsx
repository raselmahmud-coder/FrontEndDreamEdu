import React from "react";
import { Badge, Box, Grid, Typography } from "@mui/material";
import {
  Flag,
  PublishedWithChanges,
  School,
  Whatshot,
} from "@mui/icons-material";

const dataForSection6 = [
  {
    id: 1,
    title: "Identify your course",
    description:
      "In this section we will select your major what you want to pursue.",
    icon: <Flag color="action" sx={{ fontSize: 80, p: 0.5 }} />,
  },
  {
    id: 2,
    title: "Select University",
    description:
      "In this section we will select your major what you want to pursue.",
    icon: <Whatshot color="action" sx={{ fontSize: 80, p: 0.5 }} />,
  },
  {
    id: 3,
    title: "Admission in progress",
    description:
      "In this section we will select your major what you want to pursue.",
    icon: <PublishedWithChanges color="action" sx={{ fontSize: 80, p: 0.5 }} />,
  },
  {
    id: 4,
    title: "Final result release",
    description:
      "In this section we will select your major what you want to pursue.",
    icon: <School color="action" sx={{ fontSize: 80, p: 0.5 }} />,
  },
];

const Section6 = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mt: "132px",
          mb: "40px",
        }}>
        Steps to Get your admission
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          alignItems: "center",
        }}>
        {dataForSection6.map(({ id, title, description, icon }) => (
          <Grid item xs={12} sm={4} md={3} key={id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                borderRadius: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1f1f1f" : "#f1f1f1",
              }}>
              <Badge
                overlap="circular"
                sx={{
                  borderRadius: "50%",

                  p: 3,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "red" : "#e9ecf0",
                }}
                badgeContent={`Step ${id}`}
                color="secondary">
                {icon}
              </Badge>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mt: "32px",
                  mb: "10px",
                }}>
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  my: "9px",
                }}>
                {description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section6;
