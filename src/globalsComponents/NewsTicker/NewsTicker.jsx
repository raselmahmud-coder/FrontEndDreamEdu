import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import { useSpring, animated, useTransition } from "react-spring";
import "./newsTicker.css";
export default function NewsTicker({ news }) {
  const [open, setOpen] = React.useState(true);
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

  return (
    <Box
      sx={{
        display: open ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#72d372",
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
        <Typography component="h6" sx={{ px: 3 }}>
          {currentDate}
        </Typography>
        <Typography component="h6" sx={{ px: 3 }}>
          {transitions((props, item) => (
            <animated.div style={props} className="news-ticker">
              {item}
            </animated.div>
          ))}
        </Typography>
        {/* <Typography component="h6" sx={{ px: 3 }}>
          Sichuan University is one of the top 10 universities in China.
        </Typography> */}
        <Box sx={{pl: 3 }}>

        <Button sx={{ color: "#ffffff", backgroundColor: "#72d372"}}>
          Apply Now
        </Button>
        </Box>
      </Box>
    </Box>
  );
}
