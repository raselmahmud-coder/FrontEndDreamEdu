import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShareIcon from "@mui/icons-material/Share";
import { Facebook, LinkedIn } from "@mui/icons-material";

const actions = [
  { icon: <Facebook />, name: "Facebook" },
  { icon: <LinkedIn />, name: "LinkedIn" },
];
const Tips1 = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          my: 5,
        }}>
        Dream Edu Blogs
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ p: 2, mb:8 }}>
        {Array.from(new Array(3)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  my: 1,
                }}>
                <Typography
                  sx={{
                    bgcolor: "primary.main",
                    p: 1,
                    borderRadius: "15px",
                  }}>
                  Education
                </Typography>
                <Typography
                  sx={{
                    bgcolor: "primary.main",
                    p: 1,
                    borderRadius: "15px",
                  }}>
                  Author Name
                </Typography>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Study Bachelor's or Master's in China
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}>
                <SpeedDial
                  ariaLabel="SpeedDial openIcon example"
                  direction="right"
                  sx={{ position: "relative" }}
                  icon={<ShareIcon />}>
                  {actions.map((action) => (
                    <SpeedDialAction
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                    />
                  ))}
                </SpeedDial>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Tips1;