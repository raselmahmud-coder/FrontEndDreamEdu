import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { admissionProfileCreate2 } from "../../redux/feature/userAdmissionProfile/userAdmissionProfileSlice";
import dayjs from "dayjs";

function AddJobExperience() {
  const dispatch = useDispatch();
  const [fields, setFields] = useState([
    {
      company: "",
      jobStartDate: null,
      jobEndDate: "",
      jobTitle: "",
    },
  ]);

  const addFields = () => {
    const newField = {
      company: "",
      jobStartDate: null,
      jobEndDate: "",
      jobTitle: "",
    };
    setFields([...fields, newField]);
  };

  const handleFieldChange = (index, fieldName, value) => {
    const newFields = [...fields];
    newFields[index][fieldName] = value;
    setFields(newFields);
    const step2Data = {
      company: fields.map((field) => field.company),
      jobStartDate: fields.map((field) =>
        dayjs(field.jobStartDate).format("DD/MM/YYYY"),
      ),
      jobEndDate: fields.map((field) =>
        dayjs(field.jobEndDate).format("DD/MM/YYYY"),
      ),
      jobTitle: fields.map((field) => field.jobTitle),
    };
    dispatch(admissionProfileCreate2(step2Data));
  };
  return (
    <>
      {fields.length == 3 ? (
        ""
      ) : (
        <Button
          onClick={addFields}
          variant="contained"
          sx={{
            textTransform: "capitalize",
          }}>
          Add More Job Experience
        </Button>
      )}
      {fields.map((field, index) => (
        <Grid container spacing={1} sx={{ py: 2 }} key={index}>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id={`company-${index}`}
              name="company"
              label="Company/Institute"
              placeholder="Type here"
              fullWidth
              variant="standard"
              value={field.company}
              onChange={(e) =>
                handleFieldChange(index, "company", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                required
                fullWidth
                value={field.jobStartDate || ""}
                onChange={(newDate) =>
                  handleFieldChange(index, "jobStartDate", newDate)
                }
                label="Job Start Date"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                required
                fullWidth
                value={field.jobEndDate || ""}
                onChange={(newDate) =>
                  handleFieldChange(index, "jobEndDate", newDate)
                }
                label="Job End Date"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              required
              id={`jobTitle-${index}`}
              name="jobTitle"
              label="Job Title"
              placeholder="Type here"
              fullWidth
              variant="standard"
              value={field.jobTitle}
              onChange={(e) =>
                handleFieldChange(index, "jobTitle", e.target.value)
              }
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default AddJobExperience;
