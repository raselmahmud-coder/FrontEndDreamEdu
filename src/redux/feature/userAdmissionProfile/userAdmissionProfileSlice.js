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
    },
  },
});
export const { admissionProfileCreate } = userAdmissionProfileAPISlice.actions;
export default userAdmissionProfileAPISlice.reducer;
