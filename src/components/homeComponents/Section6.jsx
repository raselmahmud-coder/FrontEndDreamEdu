import React from "react";
import { Badge, Box, Grid, Typography } from "@mui/material";
import {
  Flag,
  PublishedWithChanges,
  School,
  Whatshot,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import TungstenIcon from "@mui/icons-material/Tungsten";

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
      <HeadingH2
        headingH2Text={"Steps To Get Your Admission"}
        headingH2Icon={TungstenIcon}
      />
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
                bgcolor: "#0077b5",
                minHeight: "400px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
                borderRadius: 2,
                transition:"all 0.7s",
                "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1f1f1f" : "#f1f1f1",
                  transform: "transition 0.6s",
                },
                // backgroundColor: (theme) =>
                //   theme.palette.mode === "dark" ? "#1f1f1f" : "#f1f1f1",
              }}>
              <Badge
                overlap="circular"
                sx={{
                  borderRadius: "50%",

                  p: 3,
                  // backgroundColor: (theme) =>
                  //   theme.palette.mode === "dark" ? "red" : "#e9ecf0",
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
