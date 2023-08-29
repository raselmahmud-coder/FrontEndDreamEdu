import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PositionedSnackbar({ isOpen }) {
  const [state, setState] = React.useState({
    open: isOpen ? isOpen : false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="medium"
        aria-label="close"
        color="inherit"
        onClick={handleClose}>
        <CloseIcon fontSize="medium" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Box sx={{ width: 700 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={2000}
        action={action}>
        <Alert severity="success">
          Your information submitted! Please check your email
        </Alert>
      </Snackbar>
    </Box>
  );
}
