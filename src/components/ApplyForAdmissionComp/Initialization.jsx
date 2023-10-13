import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { admissionProfileCreate } from "../../redux/feature/userAdmissionProfile/userAdmissionProfileSlice";

export default function Initialization() {
  const dispatch = useDispatch();
  const previousData = useSelector((state) => state.admission);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Program information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="sureName"
            name="sureName"
            label="Sure name"
            placeholder="Enter your sure name as in passport"
            fullWidth
            autoComplete="sure-name"
            variant="standard"
            value={previousData.sureName}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  sureName: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="givenName"
            name="givenName"
            label="Given name"
            fullWidth
            autoComplete="given-name"
            placeholder="Enter your given name as in passport"
            value={previousData.givenName}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  givenName: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            required
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  program: e.target.value,
                }),
              );
            }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Select you program
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
              <FormControlLabel
                value="chinese language/diploma"
                control={<Radio />}
                label="Chinese language/Diploma"
                checked={previousData.program === "chinese language/diploma"}
              />
              <FormControlLabel
                value="bachelor"
                control={<Radio />}
                label="Bachelor"
                checked={previousData.program === "bachelor"}
              />
              <FormControlLabel
                value="masters"
                control={<Radio />}
                label="Master's"
                checked={previousData.program === "masters"}
              />
              <FormControlLabel
                checked={previousData.program === "ph.d."}
                value="ph.d."
                control={<Radio />}
                label="Ph.D."
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={previousData.addressLine}
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="address-line1"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  addressLine: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            value={previousData.city}
            name="city"
            label="City"
            fullWidth
            autoComplete="address-level1"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  city: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            value={previousData.province}
            fullWidth
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  province: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={previousData.postCode}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  postCode: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nationality"
            name="nationality"
            label="Nationality"
            value={previousData.country}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  country: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone"
            value={previousData.phone}
            fullWidth
            autoComplete="phone"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  phone: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            value={previousData.email}
            fullWidth
            autoComplete="email"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  email: e.target.value,
                }),
              );
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
