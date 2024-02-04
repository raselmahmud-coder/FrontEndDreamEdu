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
import AlertDialog from "../../globalsComponents/AlertShowing/AlertDialog";
const steps = [
  "Initialization",
  "Education Background",
  "Documents",
  "Review your profile",
];
function getStepContent(step) {
  switch (step) {
    case 0:
      // return <Documents />;
      return <Initialization />;
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
  const [showAlert, setShowAlert] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [addApplicantProfile, { isError, isLoading, error, data }] =
    useAddApplicantProfileMutation();
  const { step1, step2, step3 } = useSelector((state) => state.admission);

  const {
    program,
    gender,
    mediumOfInstruction,
    sureName,
    givenName,
    chineseName,
    dateOfBirth,
    passport,
    passportExpiry,
    religion,
    martialStatus,
    bloodType,
    height,
    fullAddress,
    city,
    province,
    postCode,
    nationality,
    phone,
    email,
    fatherName,
    fatherDateOfBirth,
    fatherOccupation,
    fatherPhone,
    motherName,
    motherDateOfBirth,
    motherOccupation,
    motherPhone,
  } = step1;
  const {
    instituteName,
    schoolStartDate,
    schoolEndDate,
    fieldOfStudy,
    educationLevel,
    result,
    desireUniversity,
    desireMajor,
    isVisitedChina,
    visaNumber,
    visaDate,
    visaType,
    haveJobExperience,
    company,
    jobTitle,
    jobStartDate,
    jobEndDate,
    additionalInfo,
  } = step2;
  const {
    passportFile,
    photo,
    nonCriminalCertificate,
    studyPlan,
    othersFile,
    ssc,
    hsc,
    bachelor,
    masters,
    bankStatement,
    recommendationLetters,
    englishProficiencyTest,
  } = step3;
  const initFormRef = React.useRef(null);
  // console.log(sureName, givenName, "all info available");
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = (e) => {
    // e.preventDefault();
    console.log(initFormRef.current.checkValidity(), "validity");
    if (!initFormRef.current.checkValidity()) {
      return setShowAlert("Please fill all the required fields");
    }
    setActiveStep(activeStep + 1);
  };

  // sent data to the backend
  React.useEffect(() => {
    const sendData = async () => {
      if (activeStep === steps.length) {
        const prepareDate = {
          sureName,
          givenName,
          program: program,
          gender: gender,
          medium: mediumOfInstruction,
          chinese_name: chineseName,
          birthDate: dateOfBirth,
          PassportNumber: passport,
          PassportExpiryDate: passportExpiry,
          Religion: religion,
          MaritalStatus: martialStatus,
          BloodGroup: bloodType,
          height: height,
          addressLine: fullAddress,
          city: city,
          province: province,
          postCode: postCode,
          country: nationality,
          phone: phone,
          email: email,
          fathersName: fatherName,
          fathersBirthdate: fatherDateOfBirth,
          fathersOccupation: fatherOccupation,
          fathersPhone: fatherPhone,
          mothersName: motherName,
          mothersBirthdate: motherDateOfBirth,
          mothersOccupation: motherOccupation,
          mothersPhone: motherPhone,
          DesireUniversityName: desireUniversity.join(", "),
          DesireMajor: desireMajor.join(", "),
          ChinaComeBefore: isVisitedChina,
          VisaNumber: visaNumber,
          VisaExpiryDate: visaDate,
          visaType: visaType,
          jobExperiance: haveJobExperience,
          tellSomething: additionalInfo,
          passport: passportFile,
          extracurricular: othersFile,
          masters: masters,
          bachelor: bachelor,
          hsc: hsc,
          ssc: ssc,
          bankStatement: bankStatement,
          passportSizePhoto: photo,
          nonCriminalCertificate: nonCriminalCertificate,
          studyPlan: studyPlan,
          recommendationLetters: recommendationLetters,
          englishProficiencyTest: englishProficiencyTest,
        };
        // All company info assuming
        for (let index = 0; index < company.length; index++) {
          prepareDate[`CompanyName${index + 1}`] = company[index];
          prepareDate[`CompanyStartDate${index + 1}`] = jobTitle[index];
          prepareDate[`CompanyEndDate${index + 1}`] = jobStartDate[index];
          prepareDate[`CompanyPosition${index + 1}`] = jobEndDate[index];
        }
        // All school info and assuming all arrays are of the same length
        for (let i = 0; i < instituteName.length; i++) {
          prepareDate[`SchoolName${i + 1}`] = instituteName[i];
          prepareDate[`SchoolStartDate${i + 1}`] = schoolStartDate[i];
          prepareDate[`SchoolEndDate${i + 1}`] = schoolEndDate[i];
          prepareDate[`SchoolStudyField${i + 1}`] = fieldOfStudy[i];
          prepareDate[`SchoolEducationLevel${i + 1}`] = educationLevel[i];
          prepareDate[`SchoolGPAResult${i + 1}`] = result[i];
        }
        console.log(prepareDate, "full obje");
        const formData = new FormData();
        for (const key in prepareDate) {
          if (Object.hasOwnProperty.call(prepareDate, key)) {
            const element = prepareDate[key];
            const isBlobType = base64ToBlob(key, element);
            if (isBlobType) {
              formData.append(key, isBlobType[0], isBlobType[1]);
            } else {
              formData.append(key, element);
            }
          }
        }

        const res = await axios.post(
          "https://dreameduapiv1.dreameduinfo.com/api/apply/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        console.log(res, "hello resp");

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
      {showAlert && (
        <AlertDialog
          MessageTitle={"Asterisk (*) mark Fields are required"}
          message={showAlert}
          setShowAlert={setShowAlert}
        />
      )}
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
