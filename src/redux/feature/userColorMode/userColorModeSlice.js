import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isDarkMode: false,
};
const userModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    setModeChange: (state, action) => {
      state.isDarkMode = action.payload.isDarkMode;
    },
  },
});
export const { setModeChange } = userModeSlice.actions;
export default userModeSlice.reducer;
