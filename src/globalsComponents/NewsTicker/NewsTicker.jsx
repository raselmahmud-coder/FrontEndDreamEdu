import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import { animated, useTransition } from "react-spring";
import "./newsTicker.css";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import whatsapp from "../../assets/Icon/whatsapp.svg";
import messenger from "../../assets/Icon/messenger.svg";
import phoneIcon from "../../assets/Icon/phone-call.svg";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import HoverNAnimation from "../HoverNAnimation/HoverNAnimation";

export default function NewsTicker({ news }) {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const [open, setOpen] = React.useState(true);
  const FlexContainer = styled("div")({
    display: open ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    background: isDarkMode
      ? "linear-gradient(to top, #272727, #787878)"
      : "linear-gradient(to top, #D0D0D0, #Df0707)",
    color: "#fff",
  });

  const FlexItem = styled("div")(({ order }) => ({
    textAlign: "center",
    display: open ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    order: order || 0, // Use the order prop or default to 0
  }));
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const currentDate = new Date().toLocaleString("en-US", options);
  const [index, setIndex] = React.useState(0);
  const transitions = useTransition(news[index], {
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
    reset: true,
    config: { duration: 700 },
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        news.length - 1 > prevIndex ? prevIndex + 1 : 0,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  /* function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      {children}
    </Slide>
  );
} */
  return (
    <>
      <FlexContainer>
        <FlexItem order={3}>
          <IconButton
            sx={{
              mr: 2,
            }}
            aria-label="close"
            color="inherit"
            size="medium"
            onClick={() => {
              setOpen(false);
            }}>
            <CloseIcon fontSize="subtitle1" />
          </IconButton>
        </FlexItem>
        <FlexItem order={2}>
          <Typography variant={"subtitle1"} sx={{ px: 3, my: 1 }}>
            {currentDate}
          </Typography>
        </FlexItem>
        {transitions((props, item) => (
          <>
            <FlexItem order={1}>
              <animated.div style={props} className="news-ticker">
                <Typography
                  onClick={() => window.open(item.universityLink, "_blank")}
                  variant={"subtitle1"}
                  sx={{
                    px: 2,
                    backgroundColor: "redCustom.main",
                    color: "whiteCustom.main",
                    borderRadius: 9,
                    "&:hover": {
                      transition: "all 0.5s",
                      cursor: "pointer",
                      bgcolor: "deepGray.main",
                      transform: "scale(1.05)",
                    },
                  }}>
                  {item.name}
                </Typography>
              </animated.div>
            </FlexItem>
          </>
        ))}
        <FlexItem order={5}>
          <HoverNAnimation>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <PhoneCallbackIcon />
              {/* <img style={{ width: 30, height: 30 }} src={phoneIcon} /> */}
              <Typography
                variant="subtitle1"
                component="a"
                href="tel:+8619150064373"
                sx={{
                  mr: 3,
                  ml: 1,
                  display: "flex",
                  justifyContent: "center",
                  color: "inherit",
                  alignItems: "center",
                  textDecoration: "none",
                }}>
                +8619150064373
              </Typography>
            </Box>
          </HoverNAnimation>
        </FlexItem>
        <FlexItem order={6}>
          <HoverNAnimation isAnimate={true}>
            <Box
              component={"a"}
              href={
                "https://api.whatsapp.com/send/?phone=8619150064373&text&type=phone_number&app_absent=0"
              }
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "inherit",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "linkHover.main",
                  p: 0.5,
                  borderRadius: 9,
                },
              }}>
              <Box
                component={"img"}
                loading="lazy"
                src={whatsapp}
                sx={{
                  width: { xs: 15, sm: 25, md: 30 },
                  height: { xs: 15, sm: 25, md: 30 },
                }}
              />
            </Box>
          </HoverNAnimation>
        </FlexItem>
        <FlexItem order={7}>
          <HoverNAnimation isAnimate={true}>
            <Box
              component={"a"}
              href={"https://facebook.com/DreamEduChina"}
              sx={{
                mx: 3,
                display: "flex",
                justifyContent: "center",
                color: "#316FF6",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "linkHover.main",
                  p: 0.5,
                  borderRadius: 9,
                },
              }}>
              <Box
                component={"img"}
                loading="lazy"
                src={messenger}
                sx={{
                  width: { xs: 15, sm: 25, md: 30 },
                  height: { xs: 15, sm: 25, md: 30 },
                }}
              />
            </Box>
          </HoverNAnimation>
        </FlexItem>
      </FlexContainer>
    </>
  );
}
