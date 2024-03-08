import React from "react";
import { Link, useParams } from "react-router-dom";
import DynamicPageTitle from "../../globalsComponents/DynamicPageTitle";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import { useGetAnEventQuery } from "../../redux/feature/Events/EventsAPI";
import HoverNAnimation from "../../globalsComponents/HoverNAnimation/HoverNAnimation";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import BlogsCardsSkeleton from "../../Skeletons/BlogsCardsSkeleton";
import ErrorShow from "../../globalsComponents/ErrorShow";
import { useSelector } from "react-redux";
import EventRegistrationForm from "./EventRegistrationForm";

const EventSinglePage = () => {
  const { id } = useParams() || {};
  const { isDarkMode } = useSelector((state) => state.colorMode);

  const {
    isLoading,
    isError,
    data: AnEvent,
  } = useGetAnEventQuery(
    { id: id },
    {
      refetchOnMountOrArgChange: true,
      skip: !id,
    },
  );
  // let's render the events conditionally
  const {
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
  } = AnEvent?.event || {};
  let content;
  if (isLoading) {
    content = <BlogsCardsSkeleton totalItem={1} sm={8} md={8} />;
  } else if (isError) {
    content = <ErrorShow errorData={"There is an error"} />;
  } else if (!AnEvent?.event?.id) {
    content = (
      <ErrorShow severity="warning" errorData={"No event is available."} />
    );
  } else if (AnEvent?.event?.id) {
    content = (
      <Grid item xs={12} sm={8} md={8}>
        <Card
          sx={{
            mx: "auto",
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
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {event_details}
            </Typography>
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
        </Card>
      </Grid>
    );
  }

  return (
    <>
      <DynamicPageTitle pageTitle={`${name} Events Page`} />
      <Container
        maxWidth="xl"
        sx={{
          mt: { xs: 14, md: 10 },
        }}>
        {isLoading ? (
          <Skeleton
            sx={{ display: "block", mx: "auto" }}
            width="50%"
            height={80}>
            <Typography sx={{ textAlign: "center" }} variant="h4"></Typography>
          </Skeleton>
        ) : (
          <HeadingH2 headingH2Text={name} />
        )}
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 7 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ p: 2, mb: 8 }}>
          {content}
          <Grid item xs={12} sm={4} md={4}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
              }}>
              Registration for the Event
            </Typography>
            <EventRegistrationForm id={id} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventSinglePage;
