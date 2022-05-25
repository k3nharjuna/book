import { createSlice } from "@reduxjs/toolkit";

export const guestSlice = createSlice({
  name: "guest",
  initialState: {
    guestName: null, //string
    books: [],
  },
  reducers: {
    guestLogin: (state, action) => {
      state.guestName = action.payload;
    },
    fetchBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { guestLogin, fetchBooks } = guestSlice.actions;

export default guestSlice.reducer;
