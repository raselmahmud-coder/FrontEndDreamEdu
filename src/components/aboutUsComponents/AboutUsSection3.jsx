import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
const data = [
  {
    icon: AdsClickIcon,
    title: "Our Vision",
    description:
      "Our vision is to be the leading student consultancy and recruiting agency of the world by satisfying our clients' in all aspects.",
  },
  {
    icon: Diversity1Icon,
    title: "Our Mission",
    description:
      "BSB mission is to achieve excellence in business through excellent services and new scopes for world-class education by realizing dreams of our clients within their capacities.",
  },
  {
    icon: FlightTakeoffIcon,
    title: "Our Goal",
    description:
      "Create opportunities of abroad higher study and improve significantly family & position and national development and to contribute to achieve Bangladesh as a middle income country.",
  },
];

const staticData = [
  {
    quantity: "3, 5349",
    title: "More than students",
    img: "https://themeim.com/demo/eduplan/assets/img/sections/client/people-group.png",
  },
  {
    quantity: "211",
    title: "Total consultants",
    img: "https://themeim.com/demo/eduplan/assets/img/sections/client/customer-care.png",
  },
  {
    quantity: "249",
    title: "Total courses",
    img: "https://themeim.com/demo/eduplan/assets/img/sections/client/graduation.png",
  },
  {
    quantity: "49",
    title: "Countries",
    img: "https://themeim.com/demo/eduplan/assets/img/sections/client/world.png",
  },
];

const AboutUsSection3 = () => {
  return (
    <>
      <Typography variant="h1" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Why chose us
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item) => (
          <Grid item xs={12} sm={4} md={4} key={item.title}>
            <Card sx={{ py: 2, height: 300 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                {React.createElement(item.icon, {
                  sx: {
                    fontSize: "4rem",
                    color: "primary.main",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  },
                })}
                <Typography variant="h4">{item.title}</Typography>
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {staticData.map((item) => (
          <Grid item xs={6} sm={4} md={3} key={item.quantity}>
            <Card
              sx={{
                p: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}>
              <Avatar sx={{ width: 65, height: 65 }} src={item.img} />
              <Box>
                <Typography variant="h3">{item.quantity}</Typography>
                <Typography variant="h6">{item.title}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AboutUsSection3;
