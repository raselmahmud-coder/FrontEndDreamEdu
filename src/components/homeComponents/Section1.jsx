import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Container } from "@mui/material";
import { serviceOfferData } from "../../utils/fakeData";
import { useSelector } from "react-redux";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import HeadingH4 from "../../globalsComponents/Headings/HeadingH4";
import bgGradient from "../../assets/backgrounds/bgWhiteVector.svg";
import { Link } from "react-router-dom";
import ForwardIcon from "@mui/icons-material/Forward";

export default function Section1() {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  return (
    <Box
      sx={{
        background: isDarkMode ? "" : `url(${bgGradient})`,
        backgroundSize: "cover",
      }}>
      <Container
        maxWidth={"xl"}
        sx={{
          pb: 8,
        }}
        component="section">
        <HeadingH2
          headingH2Text={"Our Services"}
          marginTop={{ xs: -2, sm: -5, md: -6 }}
          marginBottom={{ xs: 2, sm: 3, md: 3 }}
        />
        <Grid container spacing={4}>
          {serviceOfferData.map(({ title, description, img }) => (
            <Grid
              key={title}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                perspective: "1000px",
                transition: "transform 0.8s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(180deg)",
                  },
                },
              }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  minHeight: { xs: "500px", sm: "490px", md: "480px" },
                  transition: "transform 1s",
                  transformStyle: "preserve-3d",
                }}>
                {/* Front side content */}
                <Card
                  variant="elevation"
                  sx={{
                    bgcolor: isDarkMode ? "deepGray.main" : "primary.main",
                    color: isDarkMode ? "whiteCustom.main" : "black.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 9,
                    borderRadius: 5,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    WebkitBackfaceVisibility: "hidden",
                    MozBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                  }}>
                  <CardActionArea>
                    <img
                      src={img}
                      style={{
                        border: "3px",
                        borderStyle: "solid",
                        borderColor: isDarkMode
                          ? "redCustom.main"
                          : "accent.main",
                        borderRadius: "15px",
                        height: 100,
                        width: 100,
                        padding: "5px",
                        margin: "0 auto",
                        display: "flex",
                      }}
                      alt={title}
                    />
                    <CardContent>
                      <HeadingH4 HeadingH4Text={title} />
                      <Typography
                        variant="body1"
                        sx={{
                          mx: 3,
                        }}>
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {/* Back side content */}
                <Card
                  variant="elevation"
                  sx={{
                    bgcolor: "deepGray.main",
                    color: "whiteCustom.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 9,
                    borderRadius: 5,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    WebkitBackfaceVisibility: "hidden",
                    MozBackfaceVisibility: "hidden",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}>
                  <CardContent>
                    <Link
                      style={{
                        display: "block",
                        textAlign: "center",
                      }}
                      to={"/apply-now"}>
                      <Button
                        sx={{
                          fontSize: { xs: 12, sm: 20, md: 30 },
                          borderRadius: 15,
                          py: 2,
                          px: { xs: 3, sm: 4, md: 5 },
                          bgcolor: "redCustom.main",
                          color: "#fff",
                          transition: "all 0.6s ease",
                          "&:hover": {
                            bgcolor: "btnHover.main",
                            transform: "scale(1.2)",
                          },
                        }}
                        variant="contained"
                        size="medium">
                        Apply Now{" "}
                        <ForwardIcon
                          sx={{ fontSize: { xs: 12, sm: 20, md: 30 } }}
                        />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
