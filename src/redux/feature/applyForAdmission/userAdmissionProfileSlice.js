import { createAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  step1: {
    program: "Bachelor",
    gender: "",
    mediumOfInstruction: "",
    sureName: "",
    givenName: "",
    chineseName: "",
    dateOfBirth: "",
    passport: "",
    passportExpiry: "",
    religion: "",
    martialStatus: "",
    bloodType: "",
    height: "",
    fullAddress: "",
    city: "",
    province: "",
    postCode: "",
    nationality: "",
    phone: "",
    email: "",
    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherOccupation: "",
    motherPhone: "",
  },
  step2: {
    instituteName: "",
    schoolStartDate: "",
    schoolEndDate: "",
    fieldOfStudy: "",
    educationLevel: "",
    result: "",
    desireUniversity: [],
    desireMajor: [],
    isVisitedChina: null,
    visaNumber: "",
    visaDate: "",
    visaType: "",
    haveJobExperience: null,
    company: "",
    jobTitle: "",
    jobStartDate: null,
    jobEndDate: null,
    additionalInfo: "",
  },
  step3: {
    passportFile: "",
    photo: "",
    nonCriminalCertificate: "",
    studyPlan: "",
    othersFile: "",
    ssc: "",
    hsc: "",
    bachelor: "",
    masters: "",
    bankStatement: "",
    recommendationLetters: "",
    englishProficiencyTest: "",
  },
};
const userAdmissionProfileAPISlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    reset: () => initialState,
    admissionProfileCreate1: (state, action) => {
      // dynamically add new field
      Object.keys(action.payload).forEach((key) => {
        state.step1[key] = action.payload[key];
      });
    },
    admissionProfileCreate2: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state.step2[key] = action.payload[key];
      });
    },
    admissionProfileCreate3: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        // console.log(state.step3[key], "Hello slice");
        state.step3[key] = action.payload[key];
      });
    },
  },
});
export const {
  admissionProfileCreate1,
  admissionProfileCreate2,
  admissionProfileCreate3,
  reset,
} = userAdmissionProfileAPISlice.actions;
export default userAdmissionProfileAPISlice.reducer;
