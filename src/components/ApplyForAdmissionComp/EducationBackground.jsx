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

export default function EducationBackground() {
  const dispatch = useDispatch();
  const previousData = useSelector((state) => state.admission);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Education Background Information
      </Typography>

      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="schoolName"
            name="schoolName"
            label="School/Institute"
            placeholder="Type here"
            fullWidth
            autoComplete="schoolName"
            variant="standard"
            value={previousData.institute}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  institute: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DateField
              required
              fullWidth
              value={previousData.school1StartDate}
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
                    school1StartDate: convertDate,
                  }),
                );
              }}
              label="School Start Date"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4} sm={2}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DateField
              required
              fullWidth
              value={previousData.schoolEndDate}
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
                    school1EndDate: convertDate,
                  }),
                );
              }}
              label="School End Date"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="fieldOfStudy"
            name="fieldOfStudy"
            label="Field of Study"
            fullWidth
            autoComplete="fieldOfStudy"
            placeholder="Type here"
            value={previousData.fieldOfStudy}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  fieldOfStudy: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="educationLevel"
            name="educationLevel"
            label="Education level/degree"
            fullWidth
            autoComplete="educationLevel"
            placeholder="Type here"
            value={previousData.educationLevel}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  educationLevel: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="gpa"
            name="gpa"
            label="GPA/Result"
            fullWidth
            autoComplete="gpa"
            placeholder="Type here"
            value={previousData.gpa}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  gpa: e.target.value,
                }),
              );
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="schoolName"
            name="schoolName"
            label="School/Institute"
            placeholder="Type here"
            fullWidth
            autoComplete="schoolName"
            variant="standard"
            value={previousData.institute}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  institute: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DateField
              required
              fullWidth
              value={previousData.school1StartDate}
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
                    school1StartDate: convertDate,
                  }),
                );
              }}
              label="School Start Date"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4} sm={2}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DateField
              required
              fullWidth
              value={previousData.schoolEndDate}
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
                    school1EndDate: convertDate,
                  }),
                );
              }}
              label="School End Date"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="fieldOfStudy"
            name="fieldOfStudy"
            label="Field of Study"
            fullWidth
            autoComplete="fieldOfStudy"
            placeholder="Type here"
            value={previousData.fieldOfStudy}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  fieldOfStudy: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="educationLevel"
            name="educationLevel"
            label="Education level/degree"
            fullWidth
            autoComplete="educationLevel"
            placeholder="Type here"
            value={previousData.educationLevel}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  educationLevel: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="gpa"
            name="gpa"
            label="GPA/Result"
            fullWidth
            autoComplete="gpa"
            placeholder="Type here"
            value={previousData.gpa}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  gpa: e.target.value,
                }),
              );
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="schoolName"
            name="schoolName"
            label="School/Institute"
            placeholder="Type here"
            fullWidth
            autoComplete="schoolName"
            variant="standard"
            value={previousData.institute}
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  institute: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DateField
              required
              fullWidth
              value={previousData.school1StartDate}
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
                    school1StartDate: convertDate,
                  }),
                );
              }}
              label="School Start Date"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4} sm={2}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <DateField
              required
              fullWidth
              value={previousData.schoolEndDate}
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
                    school1EndDate: convertDate,
                  }),
                );
              }}
              label="School End Date"
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="fieldOfStudy"
            name="fieldOfStudy"
            label="Field of Study"
            fullWidth
            autoComplete="fieldOfStudy"
            placeholder="Type here"
            value={previousData.fieldOfStudy}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  fieldOfStudy: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="educationLevel"
            name="educationLevel"
            label="Education level/degree"
            fullWidth
            autoComplete="educationLevel"
            placeholder="Type here"
            value={previousData.educationLevel}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  educationLevel: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            required
            id="gpa"
            name="gpa"
            label="GPA/Result"
            fullWidth
            autoComplete="gpa"
            placeholder="Type here"
            value={previousData.gpa}
            variant="standard"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  gpa: e.target.value,
                }),
              );
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="desire-university"
            name="Desire University"
            label="Desire University Name"
            value={previousData.desireUniversity}
            fullWidth
            autoComplete="Desire University"
            variant="standard"
            placeholder="Type here"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  desireUniversity: e.target.value,
                }),
              );
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="desire-major"
            name="Desire Major"
            label="Desire Major"
            value={previousData.desireMajor}
            fullWidth
            autoComplete="Desire Major"
            variant="standard"
            placeholder="Type here"
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  desireMajor: e.target.value,
                }),
              );
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          py: 2,
        }}>
        <Grid item xs={12} sm={6}>
          <FormControl
            required
            onChange={(e) => {
              dispatch(
                admissionProfileCreate({
                  ...previousData,
                  isVisitedChina: e.target.value,
                }),
              );
            }}>
            <FormLabel id="visitedChina">
              Have you ever come to China before?
            </FormLabel>
            <RadioGroup row name="visitChina">
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                checked={previousData.isVisitedChina === "yes"}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                checked={previousData.isVisitedChina === "no"}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {previousData.isVisitedChina === "yes" && (
          <>
            <Grid item xs={12} sm={3}>
              <TextField
                required
                type="number"
                id="visa-number"
                name="visa-number"
                label="Your Visa Number"
                value={previousData.visaNumber}
                fullWidth
                autoComplete="visa-number"
                variant="standard"
                onChange={(e) => {
                  dispatch(
                    admissionProfileCreate({
                      ...previousData,
                      visaNumber: e.target.value,
                    }),
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                <DateField
                  required
                  fullWidth
                  value={previousData.visaExpiry}
                  variant="standard"
                  onChange={(e) => {
                    const convertDate = new Date(e).toLocaleDateString(
                      "en-US",
                      {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                      },
                    );
                    dispatch(
                      admissionProfileCreate({
                        ...previousData,
                        visaExpiry: convertDate,
                      }),
                    );
                  }}
                  label="Visa Expiry Date"
                />
              </LocalizationProvider>
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
                admissionProfileCreate({
                  ...previousData,
                  jobExperience: e.target.value,
                }),
              );
            }}>
            <FormLabel id="jobExperience">
              Do you have job experience?
            </FormLabel>
            <RadioGroup row name="jobExperience">
              <FormControlLabel
                value="yes"
                control={<Radio />}
                label="Yes"
                checked={previousData.jobExperience === "yes"}
              />
              <FormControlLabel
                value="no"
                control={<Radio />}
                label="No"
                checked={previousData.jobExperience === "no"}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      {
        /* previousData.jobExperience === "yes" */ true && (
          <>
            <Grid
              container
              spacing={1}
              sx={{
                py: 2,
              }}>
              <Grid item xs={6} sm={3}>
                <TextField
                  required
                  id="companyName"
                  name="companyName"
                  label="Company Name"
                  value={previousData.companyName}
                  fullWidth
                  autoComplete="companyName"
                  variant="standard"
                  onChange={(e) => {
                    dispatch(
                      admissionProfileCreate({
                        ...previousData,
                        companyName: e.target.value,
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
                    value={previousData.visaExpiry}
                    variant="standard"
                    onChange={(e) => {
                      const convertDate = new Date(e).toLocaleDateString(
                        "en-US",
                        {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        },
                      );
                      dispatch(
                        admissionProfileCreate({
                          ...previousData,
                          visaExpiry: convertDate,
                        }),
                      );
                    }}
                    label="Start Date"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} sm={2.4}>
                <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                  <DateField
                    required
                    fullWidth
                    value={previousData.visaExpiry}
                    variant="standard"
                    onChange={(e) => {
                      const convertDate = new Date(e).toLocaleDateString(
                        "en-US",
                        {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        },
                      );
                      dispatch(
                        admissionProfileCreate({
                          ...previousData,
                          visaExpiry: convertDate,
                        }),
                      );
                    }}
                    label="End Date"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  required
                  id="position"
                  name="position"
                  label="Position"
                  value={previousData.position}
                  fullWidth
                  autoComplete="position"
                  variant="standard"
                  placeholder="Type here"
                  onChange={(e) => {
                    dispatch(
                      admissionProfileCreate({
                        ...previousData,
                        position: e.target.value,
                      }),
                    );
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={1}
              sx={{
                py: 2,
              }}>
              <Grid item xs={6} sm={3}>
                <TextField
                  required
                  id="companyName"
                  name="companyName"
                  label="Company Name"
                  value={previousData.companyName}
                  fullWidth
                  autoComplete="companyName"
                  variant="standard"
                  onChange={(e) => {
                    dispatch(
                      admissionProfileCreate({
                        ...previousData,
                        companyName: e.target.value,
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
                    value={previousData.visaExpiry}
                    variant="standard"
                    onChange={(e) => {
                      const convertDate = new Date(e).toLocaleDateString(
                        "en-US",
                        {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        },
                      );
                      dispatch(
                        admissionProfileCreate({
                          ...previousData,
                          visaExpiry: convertDate,
                        }),
                      );
                    }}
                    label="Start Date"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} sm={2.4}>
                <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                  <DateField
                    required
                    fullWidth
                    value={previousData.visaExpiry}
                    variant="standard"
                    onChange={(e) => {
                      const convertDate = new Date(e).toLocaleDateString(
                        "en-US",
                        {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        },
                      );
                      dispatch(
                        admissionProfileCreate({
                          ...previousData,
                          visaExpiry: convertDate,
                        }),
                      );
                    }}
                    label="End Date"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  required
                  id="position"
                  name="position"
                  label="Position"
                  value={previousData.position}
                  fullWidth
                  autoComplete="position"
                  variant="standard"
                  placeholder="Type here"
                  onChange={(e) => {
                    dispatch(
                      admissionProfileCreate({
                        ...previousData,
                        position: e.target.value,
                      }),
                    );
                  }}
                />
              </Grid>
            </Grid>
          </>
        )
      }
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
                admissionProfileCreate({
                  ...previousData,
                  othersTextArea: e.target.value,
                }),
              );
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
