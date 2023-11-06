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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

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
                value="Language"
                control={<Radio />}
                label="Chinese language"
                checked={previousData.program === "Language"}
              />
              <FormControlLabel
                value="Diploma"
                control={<Radio />}
                label="Diploma"
                checked={previousData.program === "Diploma"}
              />
              <FormControlLabel
                value="Bachelor"
                control={<Radio />}
                label="Bachelor"
                checked={previousData.program === "Bachelor"}
              />
              <FormControlLabel
                value="Masters"
                control={<Radio />}
                label="Master's"
                checked={previousData.program === "Masters"}
              />
              <FormControlLabel
                checked={previousData.program === "Phd"}
                value="Phd"
                control={<Radio />}
                label="Ph.D."
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            required
            onChange={(e) => {
              console.log(e.target.value, "hello js")
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  gender: e.target.value,
                }),
              );
            }}>
            <FormLabel id="gender">Gender</FormLabel>
            <RadioGroup row aria-labelledby="gender" name="gender">
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                checked={previousData.gender === "male"}
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                checked={previousData.gender === "female"}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
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
        <Grid item xs={12} sm={6}>
          <TextField
            id="chineseName"
            name="chineseName"
            label="Chinese name (optional)"
            placeholder="If you have Chinese name"
            fullWidth
            autoComplete="chinese-name"
            variant="standard"
            value={previousData.chineseName}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  chineseName: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DateField
              required
              fullWidth
              value={previousData.dateOfBirth}
              variant="standard"
              onChange={(e) => {
                const convertDate = new Date(e).toLocaleDateString("en-US", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                });
                console.log(convertDate);
                dispatch(
                  admissionProfileCreate({
                    ...previousData,
                    dateOfBirth: convertDate,
                  }),
                );
              }}
              label="Date of Birth"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Passport Number"
            name="Passport Number"
            label="Passport Number"
            placeholder="Enter Passport Number"
            fullWidth
            autoComplete="Passport Number"
            variant="standard"
            value={previousData.passportNumber}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  passportNumber: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DateField
              required
              fullWidth
              value={previousData.passportExpiry}
              variant="standard"
              onChange={(e) => {
                const convertDate = new Date(e).toLocaleDateString("en-US", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                });
                dispatch(
                  admissionProfileCreate({
                    ...previousData,
                    passportExpiry: convertDate,
                  }),
                );
              }}
              label="Passport Expiry"
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={previousData.addressLine}
            id="address"
            name="address"
            label="Full Address"
            fullWidth
            autoComplete="full address"
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
