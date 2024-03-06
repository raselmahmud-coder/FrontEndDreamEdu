import { Facebook, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetEmployeeInfoQuery } from "../../redux/feature/employee/EmployeeAPI";
import LazyLoading from "../../globalsComponents/LazyLoading";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HeadingH4 from "../../globalsComponents/Headings/HeadingH4";

const AboutUsSection2 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const { data: employee, error, isLoading } = useGetEmployeeInfoQuery();
  const { teammember } = employee || {};
  let content;
  if (isLoading) {
    content = <LazyLoading />;
  } else if (error) {
    content = <div>{error}</div>;
  } else if (teammember.length) {
    content = teammember.map(({ id, name, description, Picture }) => (
      <Grid item xs={12} sm={4} md={4} key={id}>
        <Card
          sx={{
            py: 3,
            border: "1px solid #Df0707",
            backgroundColor: isDarkMode ? "deepGray.main" : "primary.main",
            color: isDarkMode ? "whiteCustom.main": "black.main",
            transition: "all 0.5s",
            "&:hover": {
              transform: "scale(1.07)",
              color: "whiteCustom.main",
              backgroundColor: "silverPro.main",
            },
          }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <>
                  <a href="#" target={"_blank"}>
                    <LinkedIn
                      sx={{
                        fontSize: "2.5rem",
                        zIndex: 122,
                        cursor: "pointer",
                        color: "#0077b5",
                        borderRadius: "50%",
                        p: 0.5,
                        transition: "all 0.5s",
                        "&:hover": {
                          transform: "scale(1.1)",
                          backgroundColor: isDarkMode
                            ? "deepGray.main"
                            : "whiteCustom.main",
                        },
                      }}
                    />
                  </a>
                  <a href="#" target={"_blank"}>
                    <Facebook
                      sx={{
                        position: "absolute",
                        bottom: -12,
                        left: -205,
                        fontSize: "2.5rem",
                        zIndex: 122,
                        cursor: "pointer",
                        color: "#316FF6",
                        borderRadius: "50%",
                        p: 0.5,
                        transition: "all 0.5s",
                        "&:hover": {
                          transform: "scale(1.1)",
                          backgroundColor: isDarkMode
                            ? "deepGray.main"
                            : "whiteCustom.main",
                        },
                      }}
                    />
                  </a>
                </>
              }>
              <Avatar
                alt={name}
                src={`https://dreameduapiv1.dreameduinfo.com${Picture}`}
                sx={{
                  width: 250,
                  height: 250,
                }}
              />
            </Badge>
          </CardContent>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}>
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: "center",
            }}>
            {description}
          </Typography>
        </Card>
      </Grid>
    ));
  }
  return (
    <Box component={"section"}>
      <HeadingH2
        headingH2Text={"MEET OUR TEAM"}
        headingH2Icon={Diversity3Icon}
      />
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{
          fontWeight: "600",
        }}>
        ADVISORY
      </Typography>
      <Divider
        sx={{
          mt: 2,
          mb: 3,
        }}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {content}
      </Grid>
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{
          fontWeight: "600",
          mt: { xs: 10, sm: 13, md: 13 },
        }}>
        OPERATIONS
      </Typography>
      <Divider
        sx={{
          mt: 2,
          mb: 3,
        }}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {content}
      </Grid>
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{
          fontWeight: "600",
          mt: { xs: 10, sm: 13, md: 13 },
        }}>
        BRANCH MANAGERS
      </Typography>
      <Divider
        sx={{
          mt: 2,
          mb: 3,
        }}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {content}
      </Grid>
    </Box>
  );
};

export default AboutUsSection2;
