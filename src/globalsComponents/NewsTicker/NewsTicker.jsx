import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box
      sx={{
        display: open ? "flex" :"none",
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
      <Typography component="h6" sx={{ px: 3 }}>
        Sichuan University is one of the top 10 universities in China.
      </Typography>
      <Button sx={{ color: "#ffffff", backgroundColor: "#72d372" }}>
        Apply Now
      </Button>
    </Box>
  );
}
