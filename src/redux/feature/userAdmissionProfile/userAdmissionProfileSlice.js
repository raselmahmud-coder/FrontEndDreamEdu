import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  program: null,
  sureName: "",
  givenName: "",
  addressLine: "",
  city: "",
  province: "",
  postCode: "",
  country: "",
  passport: "",
  masters:"",
  bachelor:"",
  hsc: "",
  ssc: "",
  bankStatement: "",
  passportSizePhoto: "",
  nonCriminalCertificate: "",
  studyPlan: "",
  recommendationLetters: "",
  englishProficiencyTest: "",
};
const userAdmissionProfileAPISlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    admissionProfileCreate: (state, action) => {
      state.program = action.payload.program;
      state.sureName = action.payload.sureName;
      state.givenName = action.payload.givenName;
      state.addressLine = action.payload.addressLine;
      state.city = action.payload.city;
      state.province = action.payload.province;
      state.postCode = action.payload.postCode;
      state.country = action.payload.country;
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
    },
  },
});
export const { admissionProfileCreate } = userAdmissionProfileAPISlice.actions;
export default userAdmissionProfileAPISlice.reducer;
