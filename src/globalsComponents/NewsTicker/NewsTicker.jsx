import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import { animated, useTransition } from "react-spring";
import "./newsTicker.css";
import { useSelector } from "react-redux";
import { styled } from "@mui/system";

export default function NewsTicker({ news }) {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const [open, setOpen] = React.useState(true);
  const FlexContainer = styled("div")({
    display: open ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  });

  const FlexItem = styled("div")(({ order }) => ({
    textAlign: "center",
    display: open ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <FlexContainer>
        <FlexItem order={{ md: 1 }}>
          <IconButton
            aria-label="close"
            color="inherit"
            size="medium"
            onClick={() => {
              setOpen(false);
            }}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </FlexItem>
        <FlexItem order={2}>
          <Typography component={"h6"} sx={{ px: 3 }}>
            {currentDate}
          </Typography>
        </FlexItem>
        {transitions((props, item) => (
          <>
            <FlexItem order={{ xs: 1, sm: 3, md: 3 }}>
              <Typography component="h6" sx={{ px: 3 }}>
                <animated.div style={props} className="news-ticker">
                  {item.name}
                </animated.div>
              </Typography>
            </FlexItem>
            <FlexItem order={4}>
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
            </FlexItem>
          </>
        ))}
      </FlexContainer>
    </>
  );
}
