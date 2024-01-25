import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  step1: {
    program: null,
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
    fatherDateOfBirth: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherDateOfBirth: "",
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
    company: [],
    jobTitle: [],
    jobStartDate: [],
    jobEndDate: [],
    additionalInfo: "",
  },
  step3: {
    passport: "",
    photo: "",
    nonCriminalCertificate: "",
    studyPlan: "",
    othersFile: "",
    ssc: "",
    bankStatement: "",
    englishProficiencyTest: "",
    masters: "",
    bachelor: "",
    hsc: "",
    recommendationLetters: "",
  },
};
const userAdmissionProfileAPISlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    admissionProfileCreate1: (state, action) => {
      // dynamically add new field
      /* Object.keys(action.payload).forEach(key => {
        state.step1[key] = action.payload[key];
      }); */
      state.step1.program = action.payload.program;
      state.step1.gender = action.payload.gender;
      state.step1.mediumOfInstruction = action.payload.mediumOfInstruction;
      state.step1.sureName = action.payload.sureName;
      state.step1.givenName = action.payload.givenName;
      state.step1.chineseName = action.payload.chineseName;
      state.step1.dateOfBirth = action.payload.dateOfBirth;
      state.step1.passport = action.payload.passport;
      state.step1.passportExpiry = action.payload.passportExpiry;
      state.step1.religion = action.payload.religion;
      state.step1.martialStatus = action.payload.martialStatus;
      state.step1.bloodType = action.payload.bloodType;
      state.step1.height = action.payload.height;
      state.step1.fullAddress = action.payload.fullAddress;
      state.step1.city = action.payload.city;
      state.step1.province = action.payload.province;
      state.step1.postCode = action.payload.postCode;
      state.step1.nationality = action.payload.nationality;
      state.step1.phone = action.payload.phone;
      state.step1.email = action.payload.email;
      state.step1.fatherName = action.payload.fatherName;
      state.step1.fatherDateOfBirth = action.payload.fatherDateOfBirth;
      state.step1.fatherOccupation = action.payload.fatherOccupation;
      state.step1.fatherPhone = action.payload.fatherPhone;
      state.step1.motherName = action.payload.motherName;
      state.step1.motherDateOfBirth = action.payload.motherDateOfBirth;
      state.step1.motherOccupation = action.payload.motherOccupation;
      state.step1.motherPhone = action.payload.motherPhone;
    },
    admissionProfileCreate2: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        // console.log(state.step2[key], "Hello slice");
        state.step2[key] = action.payload[key];
      });
      /*       state.step2.instituteName = action.payload.instituteName;
      state.step1.chineseName = action.payload.chineseName;
      state.step1.dateOfBirth = action.payload.dateOfBirth;
      state.step1.gender = action.payload.gender;
      state.step1.sureName = action.payload.sureName;
      state.step1.givenName = action.payload.givenName;
      state.step1.addressLine = action.payload.addressLine;
      state.step1.city = action.payload.city;
      state.step1.province = action.payload.province;
      state.step1.postCode = action.payload.postCode;
      state.step1.country = action.payload.country;
      state.passport = action.payload.passport;
      state.masters = action.payload.masters;
      state.bachelor = action.payload.bachelor;
      state.hsc = action.payload.hsc;
      state.ssc = action.payload.ssc;
      state.ssc = action.payload.ssc;
      state.bankStatement = action.payload.bankStatement;
      state.passportSizePhoto = action.payload.passportSizePhoto;
      state.nonCriminalCertificate = action.payload.nonCriminalCertificate;
      state.studyPlan = action.payload.studyPlan;
      state.recommendationLetters = action.payload.recommendationLetters;
      state.englishProficiencyTest = action.payload.englishProficiencyTest;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.isVisitedChina = action.payload.isVisitedChina;
      state.visaExpiry = action.payload.visaExpiry; */
    },
    admissionProfileCreate3: (state, action) => {
      state.step1.program = action.payload.program;
      state.step1.chineseName = action.payload.chineseName;
      state.step1.dateOfBirth = action.payload.dateOfBirth;
      state.step1.gender = action.payload.gender;
      state.step1.sureName = action.payload.sureName;
      state.step1.givenName = action.payload.givenName;
      state.step1.addressLine = action.payload.addressLine;
      state.step1.city = action.payload.city;
      state.step1.province = action.payload.province;
      state.step1.postCode = action.payload.postCode;
      state.step1.country = action.payload.country;
      state.passport = action.payload.passport;
      state.masters = action.payload.masters;
      state.bachelor = action.payload.bachelor;
      state.hsc = action.payload.hsc;
      state.ssc = action.payload.ssc;
      state.ssc = action.payload.ssc;
      state.bankStatement = action.payload.bankStatement;
      state.passportSizePhoto = action.payload.passportSizePhoto;
      state.nonCriminalCertificate = action.payload.nonCriminalCertificate;
      state.studyPlan = action.payload.studyPlan;
      state.recommendationLetters = action.payload.recommendationLetters;
      state.englishProficiencyTest = action.payload.englishProficiencyTest;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.isVisitedChina = action.payload.isVisitedChina;
      state.visaExpiry = action.payload.visaExpiry;
    },
  },
});
export const {
  admissionProfileCreate1,
  admissionProfileCreate2,
  admissionProfileCreate3,
} = userAdmissionProfileAPISlice.actions;
export default userAdmissionProfileAPISlice.reducer;
