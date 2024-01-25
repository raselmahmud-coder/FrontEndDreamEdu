import React, { useState } from "react";
import { TextField, Chip, IconButton, Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";

function AddDesireUniversity() {
  const [educationFields, setEducationFields] = useState([]);
  const [currentUniversity, setCurrentUniversity] = useState("");
  const [currentMajor, setCurrentMajor] = useState("");

  const handleAddField = () => {
    if (currentUniversity && currentMajor) {
      setEducationFields([
        ...educationFields,
        { university: currentUniversity, major: currentMajor },
      ]);
      // Clear the input fields after adding
      setCurrentUniversity("");
      setCurrentMajor("");
    }
  };

  const handleDeleteField = (indexToDelete) => {
    setEducationFields(
      educationFields.filter((_, index) => index !== indexToDelete),
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          label="Desire University Name"
          value={currentUniversity}
          onChange={(e) => setCurrentUniversity(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setCurrentUniversity(e.target.value);
            }
          }}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Desire Major"
          value={currentMajor}
          onChange={(e) => setCurrentMajor(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setCurrentMajor(e.target.value);
            }
          }}
          variant="outlined"
          fullWidth
        />
        <IconButton onClick={handleAddField} color="primary">
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      {educationFields.map((field, index) => (
        <Box key={index} sx={{ display: "flex", gap: 0.5 }}>
          <Chip
            label={field.university}
            onDelete={() => handleDeleteField(index)}
            deleteIcon={<CancelIcon />}
          />
          <Chip
            label={field.major}
            onDelete={() => handleDeleteField(index)}
            deleteIcon={<CancelIcon />}
          />
        </Box>
      ))}
    </Box>
  );
}

export default AddDesireUniversity;
