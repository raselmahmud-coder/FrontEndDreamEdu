import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  MenuItem,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useAddRegistrationMutation } from "../../redux/feature/Events/EventsAPI";
import { Degrees } from "../../utils/fakeData";
import SnackBar from "../../globalsComponents/AlertShowing/SnackBar";
import { useNavigate } from "react-router-dom";

const EventRegistrationForm = ({ id }) => {
  const { isDarkMode } = useSelector((state) => state.colorMode);
  const [addRegistration, { isError, isLoading, isSuccess }] =
    useAddRegistrationMutation();

  const [readyToShow, setReadyToShow] = useState("");
  useEffect(() => {
    if (isError) {
      setReadyToShow("");
      setReadyToShow("There is an error");
    } else if (isSuccess) {
      setReadyToShow("");
      setReadyToShow("You have successfully submitted");
    }
  }, [isError, isSuccess]);

  const handleConsultationForm = async (event) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    const formElements = Array.from(event.target.elements);
    const formData = {};
    formElements.forEach((element) => {
      if (element.name) {
        formData[element.name] = element.value;
      }
    });
    await addRegistration({ formData, id });
    event.target.reset();
  };

  return (
    <React.Fragment>
      {(isError || isSuccess) && (
        <SnackBar setShowError={setReadyToShow} message={readyToShow} />
      )}
      <Box component="form" onSubmit={handleConsultationForm}>
        <TextField
          required
          sx={{
            my: 2,
          }}
          label="Name"
          name="name"
          fullWidth
          focused
          placeholder="Write your name"
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
        />
        <TextField
          required
          sx={{
            my: 2,
          }}
          label="Email"
          name="email"
          fullWidth
          focused
          placeholder="Write your valid email"
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
        />
        <TextField
          required
          sx={{
            my: 2,
          }}
          label="Phone number"
          name="phone"
          fullWidth
          focused
          placeholder="Country code + phone number (i.e. +861565511111)"
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
        />
        <TextField
          required
          sx={{
            my: 2,
          }}
          label="Country"
          name="country"
          fullWidth
          focused
          placeholder="Write your country name"
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
        />
        <TextField
          required
          sx={{
            my: 2,
          }}
          label="Last Academic Qualification"
          name="last_academic_qualiffication"
          fullWidth
          focused
          placeholder="Write Last education"
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
        />
        <TextField
          required
          sx={{
            my: 2,
          }}
          label="Year of Last Academic Qualification"
          name="last_academic_qualiffication_year"
          fullWidth
          focused
          placeholder="Write year of last education"
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
        />
        {/*   <TextField
          required
          sx={{
            my: 2,
          }}
          label="CGPA / GPA"
          name="cgpa/gpa"
          fullWidth
          focused
          placeholder="Last education CGPA / GPA"
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
        /> */}
        <TextField
          required
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
          fullWidth
          focused
          select
          label="Desired Level of Studies"
          name="desire_level_of_study"
          defaultValue="Select here a program">
          {Degrees.map(({ value, label }) => (
            <MenuItem
              key={value}
              disabled={value === "Select here a program"}
              value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          sx={{
            my: 2,
          }}
          label="Do You Have IELTS or Equivalent?"
          name="ielts"
          fullWidth
          focused
          placeholder="Write yes/no"
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
        />
        <TextField
          sx={{
            my: 2,
          }}
          multiline
          rows={4}
          label="Message"
          name="message"
          fullWidth
          focused
          placeholder="Write your message"
          color={`${isDarkMode ? "whiteCustom" : "black"}`}
        />
        <Button disabled={isLoading} type="submit" variant="contained">
          {isLoading ? <CircularProgress color="success" /> : "Submit"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default EventRegistrationForm;
