import React from "react";
import {
  Badge,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import stepsToAdmission from "../../assets/Icon/stepsAdm.png";
import progressIcon from "../../assets/Icon/progress.gif";
import identityIcon from "../../assets/Icon/7.png";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import bgGradient from "../../assets/backgrounds/liquid-cheese.svg";

const dataForSection6 = [
  {
    id: 1,
    title: "University and Major Research",
    list1:
      "We delve into the intricacies of your chosen field, meticulously researching potential universities that offer strong research programs aligned with your specific interests.",
    list2:
      "We analyze faculty profiles, publications, and ongoing research projects to identify the best fit for your aspirations.",
    list3:
      "We analyze program curriculum, funding opportunities, and career prospects to ensure the program equips you with the necessary skills and knowledge for your future goals.",
    icon: identityIcon,
  },
  {
    id: 2,
    title: "Admission Office Research",
    list1:
      "We closely examine the admission requirements and selection criteria of your target universities. We analyze past admission trends, average GPA and test scores, and any specific application essays or portfolio requirements.",
    list2:
      "We research the preferences and priorities of the respective admission offices, tailoring your application to resonate with their values and vision.",
    list3:
      "We leverage our extensive network and established relationships with admission officers to gain valuable insights and guidance for strengthening your application.",
    icon: stepsToAdmission,
  },
  {
    id: 3,
    title: "Network-Wide Data Analysis",
    list1:
      "We go beyond individual universities, drawing upon comprehensive data sets and research networks to identify emerging trends, funding opportunities, and promising collaborations in your field.",
    list2:
      "We analyze global research rankings, faculty collaborations, and industry partnerships to provide you with a broader perspective on the research landscape and potential career paths.",
    list3:
      "We employ cutting-edge data analysis tools and techniques to identify hidden patterns and connections, uncovering unique opportunities that strengthen your application and research proposal.",
    icon: progressIcon,
  },
];

const DreamEduMethodology = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);

  return (
    <Box
      sx={{
        background: isDarkMode ? "" : `url(${bgGradient})`,
        backgroundSize: "cover",
      }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
          }}>
          <HeadingH2
            headingH2Text={"DreamEdu's Comprehensive Methodology"}
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
          {dataForSection6.map(({ id, title, list1, list2, list3, icon }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Box
                sx={{
                  bgcolor:
                    (id === 1 && "#0038c1") ||
                    (id === 2 && "#Bc471f") ||
                    (id === 3 && "#075E54"),
                  color: "whiteCustom.main",
                  minHeight: "685px",
                  // border: 2,
                  p: 2,
                  borderRadius: 3,
                  "&:hover": {
                    transition: "all 0.7s",
                    color: isDarkMode ? "redCustom.main" : "whiteCustom.main",
                    backgroundColor: isDarkMode
                      ? "deepGray.main"
                      : "redCustom.main",
                  },
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Badge
                    overlap="circular"
                    sx={{
                      borderRadius: "50%",
                      p: 3,
                    }}
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
                        p: 1,
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
                </Box>
                <List
                  sx={
                    {
                      // display: "flex",
                      // justifyContent: "start",
                    }
                  }>
                  <ListItem disablePadding>
                    <TaskAltIcon sx={{ mr: 1, fontSize: "45px" }} />
                    <ListItemText primary={list1} />
                  </ListItem>
                  <ListItem
                    disablePadding
                    sx={{
                      my: 2,
                    }}>
                    <TaskAltIcon sx={{ mr: 1, fontSize: "45px" }} />
                    <ListItemText primary={list2} />
                  </ListItem>
                  <ListItem disablePadding>
                    <TaskAltIcon sx={{ mr: 1, fontSize: "45px" }} />
                    <ListItemText primary={list3} />
                  </ListItem>
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DreamEduMethodology;
