import { Facebook, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const AboutUsSection2 = () => {

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
        }}>
        87% of people learning for professional development report career
        benefits
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(new Array(3)).map((item, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Card sx={{py:3}}>
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
                        href="https://facebook.com/raselmahmud.coder"
                        target={"_blank"}>
                        <LinkedIn
                          sx={{
                            fontSize: "3rem",
                            zIndex: 122,
                            cursor: "pointer",
                            color: "primary.main",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            p: 0.5,
                          }}
                        />
                      </a>
                      <a
                        href="https://facebook.com/raselmahmud.coder"
                        target={"_blank"}>
                        <Facebook
                          sx={{
                            position: "absolute",
                            bottom: -12,
                            left: -160,
                            fontSize: "3rem",
                            zIndex: 122,
                            cursor: "pointer",
                            color: "primary.main",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            p: 0.5,
                          }}
                        />
                      </a>
                    </>
                  }>
                  <Avatar
                    alt="Travis Howard"
                    src="https://mui.com/static/images/avatar/2.jpg"
                    sx={{
                      width: 220,
                      height: 220,
                    }}
                  />
                </Badge>
              </CardContent>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                }}>
                Jenny Wilson
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                }}>
                Senior Consulting at DreamEdu
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUsSection2;
