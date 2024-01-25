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
import { useAddApplicantProfileMutation } from "../../redux/feature/applyForAdmission/applyForAdmissionDocsAPI";
import axios from "axios";
import base64ToBlob from "../../utils/base64ToBlob";
import EducationBackground from "./EducationBackground";
const steps = [
  "Initialization",
  "Education Background",
  "Documents",
  "Review your profile",
];
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Documents />;
    // return <Initialization />;
    case 1:
      return <EducationBackground />;
    case 2:
      return <Documents />;
    case 3:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [addApplicantProfile, { isError, isLoading, error, data }] =
    useAddApplicantProfileMutation();
  const allStoreData = useSelector((state) => state.admission);
  const { step1 } = useSelector((state) => state.admission);
  // console.log(step1, "step1");
  const initFormRef = React.useRef(null);
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
  } = allStoreData;
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = (e) => {
    // e.preventDefault();
    console.log(initFormRef.current.checkValidity(), "validity");
    if (!initFormRef.current.checkValidity()) {
      return alert("Please fill all the required fields");
    }
    setActiveStep(activeStep + 1);
    /* if (activeStep == 0) {
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
    } else if (activeStep === 2) setActiveStep(activeStep + 1); */
  };
  // sent data to the backend
  React.useEffect(() => {
    const sendData = async () => {
      if (activeStep === steps.length) {
        const formData = new FormData();
        formData.append("sureName", sureName);
        formData.append("givenName", givenName);
        formData.append("program", "Bachelor");
        formData.append("addressLine", addressLine);
        formData.append("city", city);
        formData.append("province", province);
        formData.append("postCode", postCode);
        formData.append("country", country);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("passport", base64ToBlob(passport), "passport.jpg");
        formData.append(
          "passportSizePhoto",
          base64ToBlob(passportSizePhoto),
          "passportSizePhoto.jpg",
        );
        formData.append(
          "nonCriminalCertificate",
          base64ToBlob(nonCriminalCertificate),
          "nonCriminalCertificate.jpg",
        );
        formData.append(
          "bankStatement",
          base64ToBlob(bankStatement),
          "bankStatement.jpg",
        );
        formData.append("studyPlan", base64ToBlob(studyPlan), "studyPlan.jpg");
        // Based on Program selection from user these fields will be added
        formData.append("ssc", base64ToBlob(englishProficiencyTest), "ssc.jpg");
        // formData.append("hsc", base64ToBlob(englishProficiencyTest), "hsc.jpg");
        // formData.append("masters", base64ToBlob(englishProficiencyTest), "masters.jpg");
        // formData.append("bachelor", base64ToBlob(englishProficiencyTest), "bachelor.jpg");
        // formData.append("recommendationLetters", base64ToBlob(englishProficiencyTest), "recommendationLetters.jpg");
        // formData.append(
        //   "englishProficiencyTest",
        //   base64ToBlob(englishProficiencyTest),
        //   "english_proficiencyTest.jpg",
        // );
        const res = await axios.post(
          "https://dreameduapiv1.dreameduinfo.com/api/apply/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        console.log(res, "hello res");

        /* for (const key in bodyObj) {
        if (Object.hasOwnProperty.call(bodyObj, key)) {
          if (bodyObj[key]) {
            console.log(bodyObj[key], "body");
            body.append(key, bodyObj[key]);
          }
        }
        } */
        // body.append("first_name", "Rasel");
        // await addApplicantProfile(body);
        // }
      }
    };
    sendData();
  }, [activeStep]);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return console.log(error, "error");
  if (data) {
    console.log(data, "data");
  }

  // console.log("Error Response:", showError);
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
            <form onSubmit={(e) => e.preventDefault()} ref={initFormRef}>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button
                    variant="contained"
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
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
            </form>
          </React.Fragment>
        )}
      </Paper>
    </React.Fragment>
  );
}
