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
  Box,
  Chip,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { admissionProfileCreate2 } from "../../redux/feature/applyForAdmission/userAdmissionProfileSlice";
import AddDynamicSchool from "./AddDynamicSchool";
import CancelIcon from "@mui/icons-material/Cancel";
import AlertDialog from "../../globalsComponents/AlertShowing/AlertDialog";
import AddJobExperience from "./AddJobExperience";

export default function EducationBackground() {
  const dispatch = useDispatch();
  const { step2 } = useSelector((state) => state.admission);
  const [showAlert, setShowAlert] = React.useState("");
  const handleDeleteField = (field, desireValue) => {
    if ((field, desireValue)) {
      dispatch(
        admissionProfileCreate2({
          ...step2,
          [desireValue]: step2[desireValue].filter((f) => f !== field),
        }),
      );
    }
  };
  const handleFieldChange = (fieldName, event) => {
    const value = event.target.value;
    if (step2[fieldName].length >= 0 && step2[fieldName].length <= 2) {
      if (fieldName && value) {
        dispatch(
          admissionProfileCreate2({
            ...step2,
            [fieldName]: [...step2[fieldName], value],
          }),
        );
        event.target.value = "";
      }
    } else {
      setShowAlert(fieldName);
      event.target.value = "";
    }
  };
  return (
    <React.Fragment>
      {showAlert && (
        <AlertDialog
          MessageTitle={"You may add only 3 items"}
          message={showAlert}
          setShowAlert={setShowAlert}
        />
      )}
      <Typography variant="h6" gutterBottom>
        Education Background Information
      </Typography>
      <AddDynamicSchool />
      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required={step2?.desireUniversity.length ? false : true}
            id="desire-university"
            name="Desire University"
            label="Desire University Name"
            fullWidth
            autoComplete="Desire University"
            variant="standard"
            placeholder="Type here and then press Enter (Max 3 University)"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleFieldChange("desireUniversity", e);
              }
            }}
          />
          {step2?.desireUniversity && (
            <Box sx={{ display: "flex", flexDirection: "row", gap: 0.5 }}>
              {step2.desireUniversity.map((field, index) => (
                <Chip
                  key={index}
                  label={field}
                  onDelete={() => handleDeleteField(field, "desireUniversity")}
                  deleteIcon={<CancelIcon />}
                />
              ))}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required={step2?.desireMajor.length ? false : true}
            id="desire-major"
            name="Desire Major"
            label="Desire Major"
            // value={educationFields}
            fullWidth
            autoComplete="Desire Major"
            variant="standard"
            placeholder="Type here and then press Enter (Max 3 Major)"
            // onChange={(e) => handleAddField(e.target.value, "itSMajor")}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleFieldChange("desireMajor", e);
              }
            }}
          />
          {step2?.desireMajor && (
            <Box sx={{ display: "flex", flexDirection: "row", gap: 0.5 }}>
              {step2.desireMajor.map((field, index) => (
                <Chip
                  key={index}
                  label={field}
                  onDelete={() => handleDeleteField(field, "desireMajor")}
                  deleteIcon={<CancelIcon />}
                />
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}>
        <Grid item xs={12} sm={3}>
          <FormControl
            required
            onChange={(e) => {
              dispatch(
                admissionProfileCreate2({
                  ...step2,
                  isVisitedChina: e.target.value,
                }),
              );
            }}>
            <FormLabel id="visitedChina">
              Have you ever come to China before?
            </FormLabel>
            <RadioGroup row name="visitChina">
              <FormControlLabel
                required
                value="YES"
                control={<Radio />}
                label="YES"
                checked={step2.isVisitedChina === "YES"}
              />
              <FormControlLabel
                required
                value="NO"
                control={<Radio />}
                label="NO"
                checked={step2.isVisitedChina === "NO"}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {step2.isVisitedChina === "YES" && (
          <>
            <Grid item xs={12} sm={3}>
              <FormControl required fullWidth>
                <InputLabel id="visaType">Visa Type</InputLabel>
                <Select
                  required
                  labelId="visaType"
                  id="visaType"
                  value={step2.visaType}
                  label="Visa Type"
                  onChange={
                    (e) => {
                      dispatch(
                        admissionProfileCreate2({
                          ...step2,
                          visaType: e.target.value,
                        }),
                      );
                    }
                    // console.log(e.target.value, "visa type")
                  }>
                  <MenuItem value={"touristVisa"}>L: Tourist visa</MenuItem>
                  <MenuItem value={"businessVisa"}>M: Business visa</MenuItem>
                  <MenuItem value={"nonBusinessVisa"}>
                    F: Non-business visa
                  </MenuItem>
                  <MenuItem value={"studyVisa"}>X: Study visa</MenuItem>
                  <MenuItem value={"workVisa"}>Z: Work visa</MenuItem>
                  <MenuItem value={"transitVisa"}>G: Transit visa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                type="number"
                id="visa-number"
                name="visa-number"
                label="Your Visa Number"
                value={step2.visaNumber}
                fullWidth
                autoComplete="visa-number"
                variant="standard"
                onChange={(e) => {
                  dispatch(
                    admissionProfileCreate2({
                      ...step2,
                      visaNumber: e.target.value,
                    }),
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                type="text"
                id="visa-date"
                name="visa-date"
                label="Visa Issue & Expiry Date"
                placeholder="day/month/year to day/month/year"
                value={step2.visaDate}
                fullWidth
                autoComplete="visa-date"
                variant="standard"
                onChange={(e) => {
                  dispatch(
                    admissionProfileCreate2({
                      ...step2,
                      visaDate: e.target.value,
                    }),
                  );
                }}
              />
            </Grid>
          </>
        )}
      </Grid>

      {/* If job experience available then will show */}
      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}>
        <Grid item xs={12} sm={12}>
          <FormControl
            required
            onChange={(e) => {
              dispatch(
                admissionProfileCreate2({
                  ...step2,
                  haveJobExperience: e.target.value,
                }),
              );
            }}>
            <FormLabel id="jobExperience">
              Do you have job experience?
            </FormLabel>
            <RadioGroup row name="jobExperience">
              <FormControlLabel
                required
                value="YES"
                control={<Radio />}
                label="YES"
                checked={step2.haveJobExperience === "YES"}
              />
              <FormControlLabel
                required
                value="NO"
                control={<Radio />}
                label="NO"
                checked={step2.haveJobExperience === "NO"}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      {step2.haveJobExperience == "YES" && <AddJobExperience />}
      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            label="If you have any thing to add for your admission application, please add here"
            multiline
            rows={4}
            placeholder="Type here"
            variant="standard"
            fullWidth
            onChange={(e) => {
              dispatch(
                admissionProfileCreate2({
                  ...step2,
                  additionalInfo: e.target.value,
                }),
              );
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
