import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Paper, styled } from "@mui/material";
import { serviceOfferData } from "../../utils/fakeData";

const cards = [1, 2, 3];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));

export default function Section1() {
  return (
    <>
      
        <Box sx={{ py: 8 }} component="section">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {serviceOfferData.map(({title, description, img}) => (
              <Grid
                item
                key={title}
                xs={12}
                sm={6}
                md={4}
                sx={{
                  perspective: "1000px",
                  transition: "transform 0.4s",
                  "& > div, & > div > div": {
                    transition: "inherit",
                  },
                  "&:hover": {
                    "& > div": {
                      transform: "rotateY(30deg)",
                      "& > div:nth-of-type(2)": {
                        transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                      },
                      "& > div:nth-of-type(3)": {
                        transform: "translate3d(45px, 50px, 40px)",
                      },
                    },
                  },
                }}>
                <Card
                  variant="outlined"
                  sx={{
                    minHeight: "280px",
                    //  width: 320,
                    backgroundColor: "#fff",
                    borderColor: "#000",
                  }}>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <Item sx={{ borderRadius: 0 }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {title}
                      </Typography>
                      <Typography>
                        {description}
                      </Typography>
                    </CardContent>
                    
                  </Item>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
     
    </>
  );
}
