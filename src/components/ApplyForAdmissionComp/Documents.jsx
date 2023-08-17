import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import { useSelector } from "react-redux";

export default function Documents() {
  const selector = useSelector((state) => state.admission);
  // console.log(selector?.program, "selector");
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Documents list
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Passport
          </Typography>
          <Button variant="contained" component="label">
            <DriveFileMoveIcon
              sx={{
                fontSize: "30px",
              }}
            />
            Upload File
            <input type="file" hidden accept=".jpg, .jpeg, .png, .pdf" />
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" gutterBottom>
            Photo 48/33 mm (White background)
          </Typography>
          <Button variant="contained" component="label">
            <DriveFileMoveIcon
              sx={{
                fontSize: "30px",
              }}
            />
            Upload File
            <input type="file" hidden accept=".jpg, .jpeg, .png" />
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" gutterBottom>
            Secondary school certificate & transcript
          </Typography>
          <Button variant="contained" component="label">
            <DriveFileMoveIcon
              sx={{
                fontSize: "30px",
              }}
            />
            Upload File
            <input type="file" hidden accept=".jpg, .jpeg, .png, .pdf" />
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" gutterBottom>
            Police clearance certificate
          </Typography>
          <Button variant="contained" component="label">
            <DriveFileMoveIcon
              sx={{
                fontSize: "30px",
              }}
            />
            Upload File
            <input type="file" hidden accept=".jpg, .jpeg, .png, .pdf" />
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" gutterBottom>
            Bank statement (last 6 months)
          </Typography>
          <Button variant="contained" component="label">
            <DriveFileMoveIcon
              sx={{
                fontSize: "30px",
              }}
            />
            Upload File
            <input type="file" hidden accept=".jpg, .jpeg, .png, .pdf" />
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" gutterBottom>
            Study plan (800 - 1000 words)
          </Typography>
          <Button variant="contained" component="label">
            <DriveFileMoveIcon
              sx={{
                fontSize: "30px",
              }}
            />
            Upload File
            <input type="file" hidden accept=".jpg, .jpeg, .png, .pdf" />
          </Button>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
