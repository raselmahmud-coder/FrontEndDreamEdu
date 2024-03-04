import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import { admissionProfileCreate2 } from "../../redux/feature/userAdmissionProfile/userAdmissionProfileSlice";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function AddDynamicSchool() {
  const dispatch = useDispatch();
  const { step2 } = useSelector((state) => state.admission);
  const [fields, setFields] = useState([]);
  useEffect(() => {
    // Initialize fields with data from Redux if available
    if (step2 && step2.instituteName) {
      const initialFields = step2.instituteName.map((_, index) => ({
        institute: step2.instituteName[index] || "",
        schoolStartDate: step2.schoolStartDate[index]
          ? moment(step2.schoolStartDate[index], "DD/MM/YYYY")
          : null,
        schoolEndDate: step2.schoolEndDate[index]
          ? moment(step2.schoolEndDate[index], "DD/MM/YYYY")
          : null,
        fieldOfStudy: step2.fieldOfStudy[index] || "",
        educationLevel: step2.educationLevel[index] || "",
        gpa: step2.result[index] || "",
      }));
      setFields(initialFields);
    } else {
      // Initialize with two empty field if Redux data is not available
      setFields([
        {
          institute: "",
          schoolStartDate: null,
          schoolEndDate: null,
          fieldOfStudy: "",
          educationLevel: "",
          gpa: "",
        },
        {
          institute: "",
          schoolStartDate: null,
          schoolEndDate: null,
          fieldOfStudy: "",
          educationLevel: "",
          gpa: "",
        },
      ]);
    }
  }, [step2]);

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
  const deleteFields = () => {
    setFields([
      {
        institute: "",
        schoolStartDate: null,
        schoolEndDate: null,
        fieldOfStudy: "",
        educationLevel: "",
        gpa: "",
      },
      {
        institute: "",
        schoolStartDate: null,
        schoolEndDate: null,
        fieldOfStudy: "",
        educationLevel: "",
        gpa: "",
      },
    ]);
  /*   setFields([
      {
        institute: fields[0]?.institute ? fields[0].institute : "",
        schoolStartDate: fields[0]?.schoolStartDate
          ? fields[0].schoolStartDate
          : null,
        schoolEndDate: fields[0]?.schoolEndDate
          ? fields[0].schoolEndDate
          : null,
        educationLevel: fields[0]?.educationLevel
          ? fields[0].educationLevel
          : "",
        gpa: fields[0]?.gpa ? fields[0].gpa : "",
      },
      {
        institute: fields[1]?.institute ? fields[1].institute : "",
        schoolStartDate: fields[1]?.schoolStartDate
          ? fields[1].schoolStartDate
          : null,
        schoolEndDate: fields[1]?.schoolEndDate
          ? fields[1].schoolEndDate
          : null,
        educationLevel: fields[1]?.educationLevel
          ? fields[1].educationLevel
          : "",
        gpa: fields[1]?.gpa ? fields[1].gpa : "",
      },
      
    ]); */

  };

  const handleFieldChange = (index, fieldName, value) => {
    const newFields = [...fields];
    newFields[index][fieldName] = value;
    setFields(newFields);
    const step2Data = {
      instituteName: fields.map((field) => field.institute),
      schoolStartDate: fields.map((field) =>
        moment(field.schoolStartDate).format("DD/MM/YYYY"),
      ),
      schoolEndDate: fields.map((field) =>
        moment(field.schoolEndDate).format("DD/MM/YYYY"),
      ),
      fieldOfStudy: fields.map((field) => field.fieldOfStudy),
      educationLevel: fields.map((field) => field.educationLevel),
      result: fields.map((field) => field.gpa),
    };
    dispatch(admissionProfileCreate2(step2Data));
  };
  return (
    <>
      {fields.length < 3 ? (
        <Button
          onClick={addFields}
          variant="contained"
          sx={{
            textTransform: "capitalize",
          }}>
          Add More University/Collage
        </Button>
      ) : (
        <Button
          onClick={deleteFields}
          variant="contained"
          sx={{
            textTransform: "capitalize",
          }}>
          <DeleteForeverIcon />
          Delete University/Collage
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
                dateAdapter={AdapterMoment}
                adapterLocale={"en-gb"}>
                <DatePicker
                  slotProps={{ textField: { required: true } }}
                  fullWidth
                  value={field.schoolStartDate}
                  onChange={(newDate) =>
                    handleFieldChange(index, "schoolStartDate", newDate)
                  }
                  label="School Start Date"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4} sm={2}>
              <LocalizationProvider
                dateAdapter={AdapterMoment}
                adapterLocale={"en-gb"}>
                <DatePicker
                  slotProps={{ textField: { required: true } }}
                  fullWidth
                  value={field.schoolEndDate}
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
