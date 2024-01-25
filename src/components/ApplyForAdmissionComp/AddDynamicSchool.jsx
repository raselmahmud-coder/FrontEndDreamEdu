import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { admissionProfileCreate2 } from "../../redux/feature/userAdmissionProfile/userAdmissionProfileSlice";
import dayjs from "dayjs";

function AddDynamicSchool() {
  const dispatch = useDispatch();
  const [fields, setFields] = useState([
    {
      institute: "",
      schoolStartDate: null,
      schoolEndDate: null,
      fieldOfStudy: "",
      educationLevel: "",
      gpa: "",
    },
  ]);

  const addFields = () => {
    const newField = {
      institute: "",
      schoolStartDate: null,
      schoolEndDate: null,
      fieldOfStudy: "",
      educationLevel: "",
      gpa: "",
    };
    setFields([...fields, newField]);
  };

  const handleFieldChange = (index, fieldName, value) => {
    const newFields = [...fields];
    newFields[index][fieldName] = value;
    setFields(newFields);
    const step2Data = {
      instituteName: fields.map((field) => field.institute),
      schoolStartDate: fields.map((field) =>
        dayjs(field.schoolStartDate).format("DD/MM/YYYY"),
      ),
      schoolEndDate: fields.map((field) =>
        dayjs(field.schoolEndDate).format("DD/MM/YYYY"),
      ),
      fieldOfStudy: fields.map((field) => field.fieldOfStudy),
      educationLevel: fields.map((field) => field.educationLevel),
      result: fields.map((field) => field.gpa),
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
          Add More University/Collage
        </Button>
      )}
      {fields.map((field, index) => {
        return (
          <Grid container spacing={1} sx={{ py: 2 }} key={index}>
            <Grid item xs={4} sm={2}>
              <TextField
                required
                id={`schoolName-${index}`}
                name="schoolName"
                label="School/Institute"
                placeholder="Type here"
                fullWidth
                variant="standard"
                value={field.institute}
                onChange={(e) =>
                  handleFieldChange(index, "institute", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4} sm={2}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"en-gb"}>
                <DatePicker
                  slotProps={{ textField: { required: true } }}
                  fullWidth
                  value={field.schoolStartDate || null}
                  onChange={(newDate) =>
                    handleFieldChange(index, "schoolStartDate", newDate)
                  }
                  label="School Start Date"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4} sm={2}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={"en-gb"}>
                <DatePicker
                  slotProps={{ textField: { required: true } }}
                  fullWidth
                  value={field.schoolEndDate || null}
                  onChange={(newDate) =>
                    handleFieldChange(index, "schoolEndDate", newDate)
                  }
                  label="School End Date"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4} sm={2}>
              <TextField
                required
                id={`fieldOfStudy-${index}`}
                name="fieldOfStudy"
                label="Field Of Study"
                placeholder="Type here"
                fullWidth
                variant="standard"
                value={field.fieldOfStudy}
                onChange={(e) =>
                  handleFieldChange(index, "fieldOfStudy", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4} sm={2}>
              <TextField
                required
                id={`educationLevel-${index}`}
                name="educationLevel"
                label="Education Level"
                placeholder="Type here"
                fullWidth
                variant="standard"
                value={field.educationLevel}
                onChange={(e) =>
                  handleFieldChange(index, "educationLevel", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4} sm={2}>
              <TextField
                required
                id={`gpa-${index}`}
                name="gpa"
                label="GPA/Result"
                placeholder="Type here"
                fullWidth
                variant="standard"
                value={field.gpa}
                onChange={(e) =>
                  handleFieldChange(index, "gpa", e.target.value)
                }
              />
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}

export default AddDynamicSchool;
