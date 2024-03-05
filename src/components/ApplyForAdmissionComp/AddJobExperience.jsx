import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import { admissionProfileCreate2 } from "../../redux/feature/applyForAdmission/userAdmissionProfileSlice";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

function AddJobExperience() {
  const dispatch = useDispatch();
  const { step2 } = useSelector((state) => state.admission);
  const [fields, setFields] = useState([]);
  useEffect(() => {
    if (step2 && step2.company) {
      const initialFields = step2.company.map((_, index) => ({
        company: step2.company[index] || "",
        jobStartDate: step2.jobStartDate[index]
          ? moment(step2.jobStartDate[index], "DD/MM/YYYY")
          : null,
        jobEndDate: step2.jobEndDate[index]
          ? moment(step2.jobEndDate[index], "DD/MM/YYYY")
          : null,
        jobTitle: step2.jobTitle[index] || "",
      }));
      setFields(initialFields);
    } else {
      setFields([
        {
          company: "",
          jobStartDate: null,
          jobEndDate: null,
          jobTitle: "",
        },
      ]);
    }
  }, [step2]);

  const addFields = () => {
    const newField = {
      company: "",
      jobStartDate: null,
      jobEndDate: null,
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
        moment(field.jobStartDate).format("DD/MM/YYYY"),
      ),
      jobEndDate: fields.map((field) =>
        moment(field.jobEndDate).format("DD/MM/YYYY"),
      ),
      jobTitle: fields.map((field) => field.jobTitle),
    };
    dispatch(admissionProfileCreate2(step2Data));
  };
  return (
    <>
      {fields.length < 3 && (
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
            <LocalizationProvider
              adapterLocale={"en-gb"}
              dateAdapter={AdapterMoment}>
              <DatePicker
                slotProps={{ textField: { required: true } }}
                fullWidth
                value={field.jobStartDate}
                onChange={(newDate) =>
                  handleFieldChange(index, "jobStartDate", newDate)
                }
                label="Job Start Date"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={3}>
            <LocalizationProvider
              adapterLocale={"en-gb"}
              dateAdapter={AdapterMoment}>
              <DatePicker
                slotProps={{ textField: { required: true } }}
                fullWidth
                value={field.jobEndDate}
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
