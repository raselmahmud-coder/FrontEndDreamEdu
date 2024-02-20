import React from "react";
import { Badge, Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import stepsToAdmission from "../../assets/Icon/stepsAdm.png";
import progressIcon from "../../assets/Icon/progress.gif";
import identityIcon from "../../assets/Icon/7.png";
import selectIcon from "../../assets/Icon/8.png";

const dataForSection6 = [
  {
    id: 1,
    title: "Identify your course",
    description:
      "To secure admission in China through our consultancy, follow these streamlined steps. First, identify your desired course to align with your academic and career goals.",
    icon: identityIcon,
  },
  {
    id: 2,
    title: "Select University",
    description:
      "Once you've determined your course, select a reputable university in China that offers the program of your choice and considerable scholarship.",
    icon: selectIcon,
  },
  {
    id: 3,
    title: "Admission in progress",
    description:
      "Our expert team will guide you through the admission process, ensuring a smooth application submission. During this phase, we will keep you informed on the progress of your admission.",
    icon: progressIcon,
  },
  {
    id: 4,
    title: "Final result release",
    description:
      "Finally, anticipate the exciting moment when the university releases the final admission results, marking the successful culmination of your journey towards higher education in China. Trust our consultancy to pave the way for your academic success.",
    icon: stepsToAdmission,
  },
];

const Section6 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
        }}>
        <HeadingH2
          headingH2Text={"Steps To Get Your Admission"}
          // headingH2Icon={stepsToAdmission}
        />
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
                bgcolor:
                  (id === 1 && "#004aff") ||
                  (id === 2 && "#764AF1") ||
                  (id === 3 && "#00784e") ||
                  (id === 4 && "redCustom.main"),
                color: "whiteCustom.main",
                minHeight: "450px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                border: 2,
                p: 2,
                borderRadius: 2,
                transition: "all 0.7s",
                "&:hover": {
                  color: isDarkMode ? "redCustom.main" : "whiteCustom.main",
                  backgroundColor: isDarkMode
                    ? "deepGray.main"
                    : "#7c0909",
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
                <Box
                  loading="lazy"
                  component={"img"}
                  src={icon}
                  sx={{
                    width: "120px",
                    height: "120px",
                    border: 2,
                    borderRadius: 4,
                    p:1
                  }}
                />
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
