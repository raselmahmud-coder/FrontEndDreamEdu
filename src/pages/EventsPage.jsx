import React from "react";
import HeadingH2 from "../globalsComponents/Headings/HeadingH2";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import DynamicPageTitle from "../globalsComponents/DynamicPageTitle";
import { Link } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import ErrorShow from "../globalsComponents/ErrorShow";
import BlogsCardsSkeleton from "../Skeletons/BlogsCardsSkeleton";
import HoverNAnimation from "../globalsComponents/HoverNAnimation/HoverNAnimation";
import { useGetEventsQuery } from "../redux/feature/Events/EventsAPI";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";

const EventsPage = () => {
  const { data: events, isError, isLoading, isSuccess } = useGetEventsQuery();
  const { isDarkMode } = useSelector((state) => state.colorMode);

  // let's render the events conditionally
  let content;
  if (isLoading) {
    content = <BlogsCardsSkeleton />;
  } else if (isError) {
    content = <ErrorShow errorData={"There is an error"} />;
  } else if (events?.all_events.length === 0) {
    content = (
      <ErrorShow severity="warning" errorData={"No event is available."} />
    );
  } else if (isSuccess) {
    content = events?.all_events?.map((event) => {
      const {
        id,
        name,
        event_details,
        event_date,
        event_time,
        event_venue,
        event_location,
        Picture,
        organiser,
        phone,
        email,
      } = event || {};
      return (
        <Grid item xs={12} sm={4} md={4} key={id}>
          <Card
            sx={{
              border: "1px solid",
              bgcolor: isDarkMode ? "deepGray.main" : "accent.main",
              minHeight: { xs: "435px", sm: "570px", md: "570px" },
              boxShadow: 10,
              "&:hover": {
                transition: "all 0.5s",
                transform: "scale(1.05)",
                backgroundColor: isDarkMode ? "black.main" : "silverPro.main",
              },
            }}>
            <Typography
              sx={{
                my: 2,
                textAlign: "center",
                color: isDarkMode ? "whiteCustom.main" : "black.main",
              }}
              variant="h5"
              align="center">
              {name}
            </Typography>
            <CardMedia
              loading="lazy"
              component="img"
              alt={name}
              sx={{ width: "100%", height: "auto", px: 3 }}
              image={`https://dreameduapiv1.dreameduinfo.com${Picture}`}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 2,
              }}>
              <Typography
                variant="subtitle1"
                sx={{
                  bgcolor: isDarkMode ? "black.main" : "whiteCustom.main",
                  px: { xs: 1, sm: 2, md: 2 },
                  borderRadius: "25px",
                }}>
                Date: {event_date}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  bgcolor: isDarkMode ? "black.main" : "whiteCustom.main",
                  px: { xs: 1, sm: 2, md: 2 },
                  borderRadius: "25px",
                }}>
                Time: {event_time}
              </Typography>
            </Box>
            <CardContent>
              <Box
                sx={{
                  py: 1,
                  px: 1,
                  display: "flex",
                  gap: 1.2,
                  alignItems: "center",
                }}>
                <LocationOnIcon
                  sx={{
                    width: 22,
                    color: isDarkMode ? "primary.main" : "btnHover.main",
                  }}
                />
                <Typography variant="subtitle1">
                  Event Location: {event_location}
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 1,
                  display: "flex",
                  gap: 1.2,
                  alignItems: "center",
                }}>
                <CalendarMonthIcon
                  sx={{
                    width: 22,
                    color: isDarkMode ? "primary.main" : "btnHover.main",
                  }}
                />
                <Typography variant="subtitle1">
                  Event Venue: {event_venue}
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 1,
                  display: "flex",
                  gap: 1.2,
                  alignItems: "center",
                }}>
                <LeaderboardIcon
                  sx={{
                    width: 22,
                    color: isDarkMode ? "primary.main" : "btnHover.main",
                  }}
                />
                <Typography variant="subtitle1">
                  Event Organizer: {organiser}
                </Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 1,
                  display: "flex",
                  gap: 1.2,
                  alignItems: "center",
                }}>
                <PhoneForwardedIcon
                  sx={{
                    width: 22,
                    color: isDarkMode ? "primary.main" : "btnHover.main",
                  }}
                />
                <Typography variant="subtitle1">Phone: {phone}</Typography>
              </Box>
              <Box
                sx={{
                  py: 1,
                  px: 1,
                  display: "flex",
                  gap: 1.2,
                  alignItems: "center",
                }}>
                <EmailIcon
                  sx={{
                    width: 22,
                    color: isDarkMode ? "primary.main" : "btnHover.main",
                  }}
                />
                <Typography variant="subtitle1">Email: {email}</Typography>
              </Box>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Link to={`/event/${id}`}>
                <HoverNAnimation>
                  <Button
                    sx={{
                      bgcolor: isDarkMode ? "black.main" : "btnHover.main",
                      color: isDarkMode ? "whiteCustom.main" : "black.main",
                      fontSize: { xs: "0.7rem", sm: "1rem", md: "1.1rem" },
                      mb: 2,
                      "&:hover": {
                        transition: "all 0.4s",
                        bgcolor: isDarkMode
                          ? "whiteCustom.main"
                          : "accent.main",
                        color: isDarkMode ? "accent.main" : "whiteCustom.main",
                      },
                    }}
                    size={"medium"}>
                    Register here
                    <SendIcon
                      sx={{
                        ml: 1,
                        fontSize: { xs: "0.8rem", md: "1.1rem" },
                      }}
                    />
                  </Button>
                </HoverNAnimation>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }
  return (
    <>
      <DynamicPageTitle pageTitle="Events Page" />
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 14, md: 10 },
        }}>
        <HeadingH2 headingH2Text={"Stay connect on Events"} />
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 7 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ p: 2, mb: 8 }}>
          {content}
        </Grid>
      </Container>
    </>
  );
};

export default EventsPage;
