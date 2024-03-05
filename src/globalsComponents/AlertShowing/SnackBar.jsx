import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function SnackBar({ setShowError, message="Default parameter" }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    setOpen(false);
    setShowError("");
    if (reason === "clickaway") {
      return;
    }
  };

  const action = (
    <React.Fragment>
      <Button
        sx={{ bgcolor: "silverPro.main", color:"redCustom.main" }}
        size="medium"
        onClick={handleClose}>
        Close it
      </Button>
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
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </>
  );
}
