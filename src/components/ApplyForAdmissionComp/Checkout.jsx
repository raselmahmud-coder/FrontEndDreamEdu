import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Initialization from "./Initialization";
import Documents from "./Documents";
import Review from "./Review";
import { useSelector } from "react-redux";
const steps = ["Initialization", "Documents", "Review your profile"];
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Initialization />;
    case 1:
      return <Documents />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [whatProgram, setWhatProgram] = React.useState("");
  const {
    program,
    sureName,
    givenName,
    addressLine,
    city,
    province,
    postCode,
    country,
    phone,
    email,
    passport,
    masters,
    bachelor,
    hsc,
    ssc,
    bankStatement,
    passportSizePhoto,
    nonCriminalCertificate,
    studyPlan,
    recommendationLetters,
    englishProficiencyTest,
  } = useSelector((state) => state.admission);
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    if (activeStep == 0) {
      if (
        program &&
        sureName &&
        givenName &&
        addressLine &&
        city &&
        province &&
        postCode &&
        country &&
        phone &&
        email
      ) {
        setActiveStep(activeStep + 1);
      } else {
        return alert("Please fill all the required fields");
      }
    } else if (activeStep == 1) {
      if (
        passport &&
        passportSizePhoto &&
        bankStatement &&
        nonCriminalCertificate &&
        studyPlan
      ) {
        
        switch (program) {
          case "chinese language/diploma":
            if (ssc) {
              return setActiveStep(activeStep + 1);
            } else {
              return alert("Please fill all the required fields");
            }
          case "bachelor":
            if (ssc && hsc && englishProficiencyTest) {
              return setActiveStep(activeStep + 1);
            } else {
              return alert("Please fill all the required fields");
            }
          case "masters":
            if (
              hsc &&
              bachelor &&
              englishProficiencyTest &&
              recommendationLetters
            ) {
              return setActiveStep(activeStep + 1);
            } else {
              return alert("Please fill all the required fields");
            }
            case "ph.d.":
            console.log(activeStep, program, "how step");
            if (
              bachelor &&
              masters &&
              englishProficiencyTest &&
              recommendationLetters
            ) {
              console.log(englishProficiencyTest, "eerr");
              return setActiveStep(activeStep + 1);
            } else {
              return alert("Please fill all the required fields");
            }
          default:
            throw new Error("Unknown values");
        }
      } else {
        return alert("Please fill all the required fields");
      }
    } else if (activeStep === 2) setActiveStep(activeStep + 1);
  };

  return (
    <React.Fragment>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Submit Your Profile
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Your profile is successfully submitted
            </Typography>
            <Typography variant="subtitle1">
              Please check your email for further instructions.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                type=""
                /*   disabled={
                  (activeStep == 0 &&
                    program &&
                    sureName &&
                    givenName &&
                    addressLine &&
                    city &&
                    province &&
                    postCode &&
                    country &&
                    phone &&
                    email) ||
                  (activeStep == 1 &&
                    passport &&
                    passportSizePhoto &&
                    bankStatement &&
                    nonCriminalCertificate &&
                    studyPlan &&
                    whatProgram)
                    ? false
                    : true
                } */
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}>
                {activeStep === steps.length - 1
                  ? "Submit your profile"
                  : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </React.Fragment>
  );
}
