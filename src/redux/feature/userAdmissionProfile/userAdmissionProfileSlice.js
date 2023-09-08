import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  program: null,
  name: "",
};
const userAdmissionProfileAPISlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    admissionProfileCreate: (state, action) => {
      state.program = action.payload.program;
      state.name = action.payload.name;
    },
  },
});
export const { admissionProfileCreate } = userAdmissionProfileAPISlice.actions;
export default userAdmissionProfileAPISlice.reducer;
