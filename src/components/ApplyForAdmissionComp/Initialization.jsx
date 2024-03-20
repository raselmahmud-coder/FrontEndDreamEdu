import * as React from "react";
import Grid from "@mui/material/Grid";
import {
  Typography,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { admissionProfileCreate1 } from "../../redux/feature/applyForAdmission/userAdmissionProfileSlice";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers";
import "dayjs/locale/en-gb";
import moment from "moment";

export default function Initialization() {
  const [dateValue, setDateValue] = React.useState([
    {
      dateOfBirth: "",
      passportExpiry: "",
    },
  ]);
  const isInCurrentYear = (date) => dayjs(date).year() === dayjs().year();
  const dispatch = useDispatch();
  const { step1 } = useSelector((state) => state.admission);
  const updateDateOfBirth = (fieldName, newValue) => {
    setDateValue((prevValues) => {
      const lastEntryIndex = prevValues.length - 1;
      if (lastEntryIndex >= 0) {
        return [
          ...prevValues.slice(0, lastEntryIndex),
          { ...prevValues[lastEntryIndex], [fieldName]: newValue },
        ];
      } else {
        return [{ [fieldName]: newValue }];
      }
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Program information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl required variant="standard" fullWidth>
            <InputLabel id="select-program">Select your Program</InputLabel>
            <Select
              labelId="select-program"
              id="select-program"
              value={step1.program || "Bachelor"}
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate1({
                    ...step1,
                    program: e.target.value,
                  }),
                );
              }}
              label="Select Your Program">
              <MenuItem value={"Chinese language"}>Chinese Language</MenuItem>
              <MenuItem value={"Diploma"}>Diploma</MenuItem>
              <MenuItem value={"Bachelor"}>Bachelor</MenuItem>
              <MenuItem value={"Masters"}>Masters</MenuItem>
              <MenuItem value={"Ph.D"}>Ph.D.</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl required variant="standard">
            <FormLabel id="gender">Gender</FormLabel>
            <RadioGroup
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate1({
                    ...step1,
                    gender: e.target.value,
                  }),
                );
              }}
              row
              aria-labelledby="gender"
              name="gender">
              <FormControlLabel
                value="Male"
                control={<Radio />}
                label="Male"
                checked={step1.gender === "Male"}
                required
              />
              <FormControlLabel
                required
                value="Female"
                control={<Radio />}
                label="Female"
                checked={step1.gender === "Female"}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl required>
            <FormLabel id="mediumOfInstruction">
              Medium Of Instruction
            </FormLabel>
            <RadioGroup
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate1({
                    ...step1,
                    mediumOfInstruction: e.target.value,
                  }),
                );
              }}
              row
              aria-labelledby="mediumOfInstruction"
              name="mediumOfInstruction">
              <FormControlLabel
                required
                value="English"
                control={<Radio />}
                label="English"
                checked={step1.mediumOfInstruction === "English"}
              />
              <FormControlLabel
                required
                value="Chinese"
                control={<Radio />}
                label="Chinese"
                checked={step1.mediumOfInstruction === "Chinese"}
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
            value={step1.sureName}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
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
            value={step1.givenName}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  givenName: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="chineseName"
            name="chineseName"
            label="Chinese name (optional)"
            placeholder="If you have Chinese name"
            fullWidth
            autoComplete="chinese-name"
            variant="standard"
            value={step1.chineseName}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  chineseName: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <LocalizationProvider
            dateAdapter={AdapterMoment}
            adapterLocale={"en-gb"}>
            <DatePicker
              id="dateOfBirth"
              name="dateOfBirth"
              value={
                dateValue.dateOfBirth
                  ? moment(dateValue.dateOfBirth, "DD/MM/YYYY")
                  : moment(step1.dateOfBirth, "DD/MM/YYYY")
              }
              sx={{
                width: "100%",
              }}
              onChange={(newValue) => {
                updateDateOfBirth("dateOfBirth", newValue);
                dispatch(
                  admissionProfileCreate1({
                    ...step1,
                    dateOfBirth: dayjs(newValue).format("DD/MM/YYYY"),
                  }),
                );
              }}
              disableFuture
              shouldDisableYear={isInCurrentYear}
              slotProps={{ textField: { required: true } }}
              label="Date of Birth"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            type="text"
            id="Passport Number"
            name="Passport Number"
            label="Passport Number"
            placeholder="Enter Passport Number"
            fullWidth
            autoComplete="Passport Number"
            variant="standard"
            value={step1.passport}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  passport: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <LocalizationProvider
            dateAdapter={AdapterMoment}
            adapterLocale={"en-gb"}>
            <DatePicker
              id="passportExpiry"
              name="passportExpiry"
              value={
                dateValue.passportExpiry
                  ? moment(dateValue.passportExpiry, "DD/MM/YYYY")
                  : moment(step1.passportExpiry, "DD/MM/YYYY")
              }
              sx={{
                width: "100%",
              }}
              onChange={(newValue) => {
                updateDateOfBirth("passportExpiry", newValue);
                dispatch(
                  admissionProfileCreate1({
                    ...step1,
                    passportExpiry: newValue.format("DD/MM/YYYY"),
                  }),
                );
              }}
              disablePast
              shouldDisableYear={(date) => dayjs(date).unix() <= dayjs().unix()}
              slotProps={{ textField: { required: true } }}
              label="Passport Expiry"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Religion"
            name="Religion"
            label="Religion"
            placeholder="Type your Religion"
            fullWidth
            autoComplete="Religion"
            variant="standard"
            value={step1.religion}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  religion: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required variant="standard" fullWidth>
            <InputLabel id="maritalStatus">Marital Status</InputLabel>
            <Select
              labelId="maritalStatus"
              id="maritalStatus"
              value={step1.martialStatus || "married"}
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate1({
                    ...step1,
                    martialStatus: e.target.value,
                  }),
                );
              }}
              label="Marital Status">
              <MenuItem value={"married"}>Married</MenuItem>
              <MenuItem value={"unmarried"}>Unmarried</MenuItem>
              <MenuItem value={"widow"}>Widow</MenuItem>
              <MenuItem value={"divorce"}>Divorce</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl required variant="standard" fullWidth>
            <InputLabel id="blood-type">Blood Type</InputLabel>
            <Select
              labelId="blood-type"
              id="blood-type"
              value={step1.bloodType || "A+"}
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate1({
                    ...step1,
                    bloodType: e.target.value,
                  }),
                );
              }}
              label="Blood Group">
              <MenuItem value={"A+"}>A+</MenuItem>
              <MenuItem value={"A-"}>A-</MenuItem>
              <MenuItem value={"B+"}>B+</MenuItem>
              <MenuItem value={"B-"}>B-</MenuItem>
              <MenuItem value={"AB+"}>AB+</MenuItem>
              <MenuItem value={"AB-"}>AB-</MenuItem>
              <MenuItem value={"O+"}>O+</MenuItem>
              <MenuItem value={"O-"}>O-</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            value={step1.height}
            id="Height"
            name="Height"
            label="Height"
            fullWidth
            autoComplete="Height"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  height: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={step1.fullAddress.length > 30 ? true : false}
            helperText={
              step1.fullAddress.length > 30
                ? "Address length should be 30 characters or less"
                : ""
            }
            required={step1.fullAddress.length > 30 ? true : false}
            value={step1.fullAddress}
            id="address"
            name="address"
            label="Full Address"
            fullWidth
            autoComplete="full address"
            placeholder="No more than 30 character"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  fullAddress: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            value={step1.city}
            name="city"
            label="City"
            fullWidth
            autoComplete="address-level1"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
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
            value={step1.province}
            fullWidth
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
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
            value={step1.postCode}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
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
            value={step1.nationality}
            fullWidth
            autoComplete="nationality"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  nationality: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="number"
            required
            id="phone"
            name="phone"
            label="Phone"
            value={step1.phone}
            fullWidth
            autoComplete="phone"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  phone: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={step1.email.length > 20 ? true : false}
            helperText={
              step1.email.length > 20
                ? "Email length should be 20 characters or less"
                : ""
            }
            required={step1.email.length > 20 ? true : false}
            id="email"
            name="email"
            label="Email"
            type="email"
            value={step1.email}
            fullWidth
            autoComplete="email"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  email: e.target.value,
                }),
              );
            }}
          />
        </Grid>

        <Grid item xs={12} sm={3} md={4}>
          <TextField
            required
            id="fatherName"
            name="fatherName"
            label="Father's Name"
            placeholder="Type here"
            fullWidth
            autoComplete="fatherName"
            variant="standard"
            value={step1.fatherName}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  fatherName: e.target.value,
                }),
              );
            }}
          />
        </Grid>

        <Grid item xs={6} sm={3} md={4}>
          <TextField
            required
            id="fatherOccupation"
            name="fatherOccupation"
            label="Father Occupation"
            fullWidth
            autoComplete="fatherOccupation"
            placeholder="Type here"
            value={step1.fatherOccupation}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  fatherOccupation: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={4}>
          <TextField
            required
            id="fatherPhone"
            name="fatherPhone"
            label="Father's Phone"
            fullWidth
            type="number"
            autoComplete="fatherPhone"
            placeholder="Type here"
            value={step1.fatherPhone}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  fatherPhone: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <TextField
            required
            id="motherName"
            name="motherName"
            label="Mother's Name"
            placeholder="Type here"
            fullWidth
            autoComplete="motherName"
            variant="standard"
            value={step1.motherName}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  motherName: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={4}>
          <TextField
            required
            id="motherOccupation"
            name="motherOccupation"
            label="Mother Occupation"
            fullWidth
            autoComplete="motherOccupation"
            placeholder="Type here"
            value={step1.motherOccupation}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  motherOccupation: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={6} sm={3} md={4}>
          <TextField
            required
            id="motherPhone"
            name="motherPhone"
            label="Mother's Phone"
            fullWidth
            type="number"
            autoComplete="motherPhone"
            placeholder="Type here"
            value={step1.motherPhone}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate1({
                  ...step1,
                  motherPhone: e.target.value,
                }),
              );
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
