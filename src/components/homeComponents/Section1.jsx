import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { serviceOfferData } from "../../utils/fakeData";
import { useSelector } from "react-redux";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import HeadingH4 from "../../globalsComponents/Headings/HeadingH4";

export default function Section1() {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  return (
    <>
      <Box sx={{ mb: 8 }} component="section">
        <HeadingH2
          headingH2Text={"Go Abroad With DreamEdu"}
          headingH2Icon={AirplaneTicketIcon}
          marginTop={{ xs: -2, sm: -6, md: -8 }}
        />
        <Grid container spacing={4}>
          {serviceOfferData.map(({ title, description, img }) => (
            <Grid
              key={title[0]}
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
                  minHeight: "55vh",
                  transition: "transform 1s",
                  transformStyle: "preserve-3d",
                }}>
                {/* Front side content */}
                <Card
                  variant="elevation"
                  sx={{
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
                      src={img[0]}
                      style={{
                        border: 1,
                        borderStyle: "solid",
                        borderColor: isDarkMode
                          ? "tertiaryRed.main"
                          : "accent.main",
                        borderRadius: "15px",
                        height: 85,
                        width: 85,
                        padding: "5px",
                        margin: "0 auto",
                        display: "flex",
                      }}
                      alt={title[0]}
                    />
                    <CardContent>
                      <HeadingH4 HeadingH4Text={title[0]}/>
                      <Typography
                        variant="body1"
                        sx={{
                          textAlign: "justify",
                          mx: 3,
                        }}>
                        {description[0]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {/* Back side content */}
                <Card
                  variant="elevation"
                  sx={{
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
                  <CardActionArea>
                    <img
                      src={img[1]}
                      style={{
                        border: 1,
                        borderStyle: "solid",
                        borderColor: isDarkMode
                          ? "tertiaryRed.main"
                          : "accent.main",
                        borderRadius: "15px",
                        height: 85,
                        width: 85,
                        padding: "5px",
                        margin: "0 auto",
                        display: "flex",
                      }}
                      alt={title[1]}
                    />
                    <CardContent>
                      <HeadingH4 HeadingH4Text={title[1]}/>
                      <Typography
                        variant="body1"
                        sx={{
                          textAlign: "justify",
                          mx: 3,
                        }}>
                        {description[1]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
