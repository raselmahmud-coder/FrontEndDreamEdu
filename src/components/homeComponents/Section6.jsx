import React from "react";
import { Badge, Box, Grid, Typography } from "@mui/material";
import {
  Flag,
  PublishedWithChanges,
  School,
  Whatshot,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const dataForSection6 = [
  {
    id: 1,
    title: "Identify your course",
    description:
      "To secure admission in China through our consultancy, follow these streamlined steps. First, identify your desired course to align with your academic and career goals.",
    icon: <Flag color="action" sx={{ fontSize: 80, p: 0.5 }} />,
  },
  {
    id: 2,
    title: "Select University",
    description:
      "Once you've determined your course, select a reputable university in China that offers the program of your choice and considerable scholarship.",
    icon: <Whatshot color="action" sx={{ fontSize: 80, p: 0.5 }} />,
  },
  {
    id: 3,
    title: "Admission in progress",
    description:
      "Our expert team will guide you through the admission process, ensuring a smooth application submission. During this phase, we will keep you informed on the progress of your admission.",
    icon: <PublishedWithChanges color="action" sx={{ fontSize: 80, p: 0.5 }} />,
  },
  {
    id: 4,
    title: "Final result release",
    description:
      "Finally, anticipate the exciting moment when the university releases the final admission results, marking the successful culmination of your journey towards higher education in China. Trust our consultancy to pave the way for your academic success.",
    icon: <School color="action" sx={{ fontSize: 80, p: 0.5 }} />,
  },
];

const Section6 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          sx={{
            mt: { xs: 6, sm: 8, md: 12 },
            mb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 1, sm: 3, md: 6 },
            py: { xs: 1, sm: 3, md: 4 },
            zIndex: 899,
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkMode ? "deepGray.main" : "primary.main",
            color: isDarkMode ? "whiteCustom.main" : "secondary.main",
            borderColor: isDarkMode ? "accent.main" : "secondary.main",
            borderRadius: "25% 0 25% 0",
            border: 1,
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
            fontWeight: "bold",
          }}
          variant="h3">
          Steps To Get Your Admission
        </Typography>
      </Box>
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
                minHeight: "400px",
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
