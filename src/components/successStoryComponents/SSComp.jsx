import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import PaginationSS from "./PaginationSS";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
const SSComp = () => {
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          my: 5,
        }}>
        Our Success story
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2, mb: 8 }}>
        {Array.from(new Array(3)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea
                sx={{
                  p: 1,
                }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Avatar
                    sx={{ width: 90, height: 90 }}
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                  />

                  <Box>
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ mt: 1 }}>
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Box>
                </Box>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Typography gutterBottom variant="h6">
                      McDonald
                    </Typography>
                    <Typography gutterBottom variant="h6">
                      from Italy
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <PaginationSS />
      </Box>
    </>
  );
};

export default SSComp;
