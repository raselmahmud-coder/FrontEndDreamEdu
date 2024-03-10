import { Facebook, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import OurPartnersSkeleton from "../../Skeletons/OurPartnersSkeleton";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const MembersCard = ({ positionTitle, team, isLoading, isError }) => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  console.log(team, "Hello team");
  let content;
  if (isLoading) {
    content = <OurPartnersSkeleton />;
  } else if (isError) {
    content = <div>Something went wrong</div>;
  } else if (team.length) {
    content = team.map(
      ({ id, name, Picture, linkedinlink, fblink, position }) => (
        <Grid item xs={12} sm={4} md={4} key={id}>
          <Card
            sx={{
              py: 3,
              border: "1px solid #Df0707",
              backgroundColor: isDarkMode ? "deepGray.main" : "primary.main",
              color: isDarkMode ? "whiteCustom.main" : "black.main",
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
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot">
                <Avatar
                  loading="lazy"
                  alt={name}
                  src={`https://dreameduapiv1.dreameduinfo.com${Picture}`}
                  sx={{
                    width: 250,
                    height: 250,
                  }}
                />
              </StyledBadge>
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
              {position}
            </Typography>
            <CardActionArea
              sx={{
                mx: "auto",
                display: "flex",
                justifyContent: "space-evenly",
                mt: 2,
              }}>
              <Box
                component="a"
                href={linkedinlink ? linkedinlink : "#"}
                target={"_blank"}>
                <LinkedIn
                  sx={{
                    fontSize: "2.5rem",
                    // zIndex: 122,
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
              </Box>
              <Box component="a" href={fblink ? fblink : "#"} target={"_blank"}>
                <Facebook
                  sx={{
                    fontSize: "2.5rem",
                    // zIndex: 122,
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
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      ),
    );
  }
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        textAlign={"center"}
        sx={{
          fontWeight: "600",
          mt: { xs: 4, sm: 6, md: 8 },
        }}>
        {positionTitle}
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
    </React.Fragment>
  );
};

export default MembersCard;
