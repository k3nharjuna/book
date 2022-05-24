import { createSlice } from "@reduxjs/toolkit";

export const guestSlice = createSlice({
  name: "guest",
  initialState: {
    guestName: null, //string
  },
  reducers: {
    guestLogin: (state, action) => {
      state.guestName = action.payload;
    },
  },
});

export const { guestLogin } = guestSlice.actions;

export default guestSlice.reducer;
