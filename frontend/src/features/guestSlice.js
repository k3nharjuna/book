import { createSlice } from "@reduxjs/toolkit";

export const guestSlice = createSlice({
  name: "guest",
  initialState: {
    guestName: null, //string
    books: [],
    wishlists: [],
  },
  reducers: {
    guestLogin: (state, action) => {
      state.guestName = action.payload;
    },
    fetchBooks: (state, action) => {
      state.books = action.payload;
    },
    fetchWishlists: (state, action) => {
      state.wishlists = action.payload;
    },
  },
});

export const { guestLogin, fetchBooks, fetchWishlists } = guestSlice.actions;

export default guestSlice.reducer;
