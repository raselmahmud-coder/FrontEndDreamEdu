import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import { animated, useTransition } from "react-spring";
import "./newsTicker.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function NewsTicker({ news }) {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const [open, setOpen] = React.useState(true);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const currentDate = new Date().toLocaleString("en-US", options);
  const navigate = useNavigate();
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: open ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <IconButton
        aria-label="close"
        color="inherit"
        size="medium"
        onClick={() => {
          setOpen(false);
        }}>
        <CloseIcon fontSize="inherit" />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <Typography
          component={"h6"}
          sx={{ px: 3, display: { xs: "none", sm: "none", md: "block" } }}>
          {currentDate}
        </Typography>
        {transitions((props, item) => (
          <>
            <Typography component="h6" sx={{ px: 3 }}>
              <animated.div style={props} className="news-ticker">
                {item.name}🎉
              </animated.div>
            </Typography>
            <Box sx={{ pl: 3 }}>
              <Button
                onClick={() => window.open(item.universityLink, "_blank")}
                size="small"
                sx={{
                  color: "inherit",
                  backgroundColor: isDarkMode
                    ? "accent.main"
                    : "secondary.main",
                  transition: "background-color 0.5s, color 0.5s",
                  "&:hover": {
                    color: isDarkMode ? "white" : "black.main",
                    backgroundColor: isDarkMode ? "black.main" : "white",
                  },
                }}>
                Apply Now
              </Button>
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
}
