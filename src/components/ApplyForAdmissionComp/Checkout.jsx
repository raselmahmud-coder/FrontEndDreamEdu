import * as React from "react";
import Box from "@mui/material/Box";
import { Paper, Stepper, Step, StepLabel, Button } from "@mui/material";
import Initialization from "./Initialization";
import Documents from "./Documents";
import Review from "./Review";
import { useSelector } from "react-redux";
import { useAddApplicantProfileMutation } from "../../redux/feature/applyForAdmission/applyForAdmissionDocsAPI";
import base64ToBlob from "../../utils/base64ToBlob";
import EducationBackground from "./EducationBackground";
import AlertDialog from "../../globalsComponents/AlertShowing/AlertDialog";
import HeadingH2 from "../../globalsComponents/Headings/HeadingH2";
import { useNavigate } from "react-router-dom";
import DefaultComponent from "./DefaultComponent";
const steps = [
  "Your Basic Information",
  "Education Background",
  "Documents",
  "Review your profile",
];
function getStepContent(step) {
  switch (step) {
    case 0:
      // return <Review />;
      // return <Documents />;
      return <Initialization />;
    // return <EducationBackground />;
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
  const navigate = useNavigate();
  const [addApplicantProfile, { isError, isLoading, isSuccess }] =
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
    fatherOccupation,
    fatherPhone,
    motherName,
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
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleNext = (e) => {
    // e.preventDefault();
    // console.log(initFormRef.current.checkValidity(), "validity");
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
          fathersOccupation: fatherOccupation,
          fathersPhone: fatherPhone,
          mothersName: motherName,
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
        await addApplicantProfile(formData);
      }
    };
    sendData();
  }, [activeStep]);

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
        sx={{ my: { xs: 1, sm: 1, md: 2 }, p: { xs: 1, sm: 2, md: 3 } }}>
        <HeadingH2 headingH2Text={"Fill up the form"} />
        <Stepper
          activeStep={activeStep}
          sx={{
            pt: 3,
            pb: 5,
            "& .MuiStepLabel-labelContainer": { color: "secondary.main" },
            "& .MuiStepLabel-root .Mui-completed": {
              color: "green", // circle color (COMPLETED)
            },
            "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
              {
                color: "white", // Just text label (COMPLETED)
              },
            "& .MuiStepLabel-root .Mui-active": {
              color: "secondary.main", // circle color (ACTIVE)
            },
            "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
              {
                color: "yellow", // Just text label (ACTIVE)
              },
            "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
              fill: "white", // circle's number (ACTIVE)
            },
          }}>
          {steps.map((label) => (
            <Step
              key={label}
              sx={{
               
              }}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <DefaultComponent
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
          />
        ) : (
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
        )}
      </Paper>
    </React.Fragment>
  );
}
