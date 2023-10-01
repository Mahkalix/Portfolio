import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeColor: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeColor = state.themeColor === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
