import { Facebook, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetEmployeeInfoQuery } from "../../redux/feature/employee/EmployeeAPI";
import LazyLoading from "../../globalsComponents/LazyLoading";

const AboutUsSection2 = () => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const { data: employee, error, isLoading } = useGetEmployeeInfoQuery();
  const { teammember } = employee || {};
  console.log(teammember, "employee");
  let content;
  if (isLoading) {
    content = <LazyLoading />;
  } else if (error) {
    content = <div>{error}</div>;
  } else if (teammember.length) {
    content = teammember.map(({ id, name, description, Picture }) => (
      <Grid item xs={12} sm={4} md={4} key={id}>
        <Card sx={{ py: 3 }}>
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
                  <a
                    href="#"
                    target={"_blank"}>
                    <LinkedIn
                      sx={{
                        fontSize: "3rem",
                        zIndex: 122,
                        cursor: "pointer",
                        color: isDarkMode ? "#004808 " : "white",
                        backgroundColor: isDarkMode ? "white" : "#004808",
                        borderRadius: "50%",
                        p: 0.5,
                        transition: "background-color 0.9s, color 0.9s",
                        "&:hover": {
                          color: isDarkMode ? "white" : "#004808",
                          backgroundColor: isDarkMode ? "#004808" : "white",
                        },
                      }}
                    />
                  </a>
                  <a
                    href="#"
                    target={"_blank"}>
                    <Facebook
                      sx={{
                        position: "absolute",
                        bottom: -12,
                        left: -205,
                        fontSize: "3rem",
                        zIndex: 122,
                        cursor: "pointer",
                        color: isDarkMode ? "#004808 " : "white",
                        backgroundColor: isDarkMode ? "white" : "#004808",
                        borderRadius: "50%",
                        p: 0.5,
                        transition: "background-color 0.9s, color 0.9s",
                        "&:hover": {
                          color: isDarkMode ? "white" : "#004808",
                          backgroundColor: isDarkMode ? "#004808" : "white",
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
                  width: 300,
                  height: 300,
                }}
              />
            </Badge>
          </CardContent>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
            }}>
            {name}
          </Typography>
          <Typography
            variant="h6"
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
    <Box
      component={"section"}
      sx={{
        my: 7,
      }}>
      <Typography variant="h1" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Meet Experts
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mt: 2,
          mb: 7,
        }}>
        87% of people learning for professional development report career
        benefits
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {content}
      </Grid>
    </Box>
  );
};

export default AboutUsSection2;
