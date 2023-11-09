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
  InputLabel,
  Select,
  MenuItem,
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
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Program information
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl required variant="standard" fullWidth>
            <InputLabel id="select-program">Select you program</InputLabel>
            <Select
              labelId="select-program"
              id="select-program"
              value={previousData.program}
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate({
                    ...previousData,
                    program: e.target.value,
                  }),
                );
              }}
              label="Select Your Program">
              <MenuItem value={"Language"}>Chinese Language</MenuItem>
              <MenuItem value={"Diploma"}>Diploma</MenuItem>
              <MenuItem value={"Bachelor"}>Bachelor</MenuItem>
              <MenuItem value={"Masters"}>Masters</MenuItem>
              <MenuItem value={"Phd"}>Ph.D.</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl
            required
            onChange={(e) => {
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
        <Grid item xs={12} sm={3}>
          <FormControl
            required
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  mediumOfInstruction: e.target.value,
                }),
              );
            }}>
            <FormLabel id="mediumOfInstruction">
              Medium Of Instruction
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="mediumOfInstruction"
              name="mediumOfInstruction">
              <FormControlLabel
                value="English"
                control={<Radio />}
                label="English"
                checked={previousData.gender === "English"}
              />
              <FormControlLabel
                value="Chinese"
                control={<Radio />}
                label="Chinese"
                checked={previousData.gender === "Chinese"}
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
            value={previousData.religion}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  religion: e.target.value,
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
              value={previousData.maritalStatus}
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
                    maritalStatus: convertDate,
                  }),
                );
              }}
              label="Marital status"
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={3}>
          {/* <TextField
          required
            value={previousData.addressLine}
            id="bloodType"
            name="Blood Type"
            label="Blood Type"
            fullWidth
            autoComplete="Blood Type"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  bloodType: e.target.value,
                }),
              );
            }}
          /> */}

          <FormControl required variant="standard" fullWidth>
            <InputLabel id="blood-group">Blood Group</InputLabel>
            <Select
              labelId="blood-group"
              id="blood-group"
              value={age}
              onChange={handleChange}
              label="Blood Group">
              <MenuItem value={"a+"}>A+</MenuItem>
              <MenuItem value={"a-"}>A-</MenuItem>
              <MenuItem value={"b+"}>B+</MenuItem>
              <MenuItem value={"b-"}>B-</MenuItem>
              <MenuItem value={"ab+"}>AB+</MenuItem>
              <MenuItem value={"ab-"}>AB-</MenuItem>
              <MenuItem value={"o+"}>O+</MenuItem>
              <MenuItem value={"o-"}>O-</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            value={previousData.addressLine}
            id="Height"
            name="Height"
            label="Height"
            fullWidth
            autoComplete="Height"
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  height: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
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

        
    
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="fatherName"
              name="fatherName"
              label="Father's Name"
              placeholder="Type here"
              fullWidth
              autoComplete="fatherName"
              variant="standard"
              value={previousData.fatherName}
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate({
                    ...previousData,
                    fatherName: e.target.value,
                  }),
                );
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
              <DateField
                required
                fullWidth
                value={previousData.FatherDateOfBirth}
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
                      FatherDateOfBirth: convertDate,
                    }),
                  );
                }}
                label="Date of Birth"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="occupation"
              name="occupation"
              label="Occupation"
              fullWidth
              autoComplete="occupation"
              placeholder="Type here"
              value={previousData.occupation}
              variant="standard"
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate({
                    ...previousData,
                    occupation: e.target.value,
                  }),
                );
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="fatherPhone"
              name="fatherPhone"
              label="Father's Phone"
              fullWidth
              type="number"
              autoComplete="fatherPhone"
              placeholder="Type here"
              value={previousData.phone}
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
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="motherName"
              name="motherName"
              label="Mother's Name"
              placeholder="Type here"
              fullWidth
              autoComplete="motherName"
              variant="standard"
              value={previousData.motherName}
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate({
                    ...previousData,
                    motherName: e.target.value,
                  }),
                );
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
              <DateField
                required
                fullWidth
                value={previousData.motherDateOfBirth}
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
                      motherDateOfBirth: convertDate,
                    }),
                  );
                }}
                label="Date of Birth"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="occupation"
              name="occupation"
              label="Occupation"
              fullWidth
              autoComplete="occupation"
              placeholder="Type here"
              value={previousData.occupation}
              variant="standard"
              onChange={(e) => {
                dispatch(
                  admissionProfileCreate({
                    ...previousData,
                    occupation: e.target.value,
                  }),
                );
              }}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id="motherPhone"
              name="motherPhone"
              label="Mother's Phone"
              fullWidth
              type="number"
              autoComplete="motherPhone"
              placeholder="Type here"
              value={previousData.phone}
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
      

        
      
      </Grid>
    </React.Fragment>
  );
}
