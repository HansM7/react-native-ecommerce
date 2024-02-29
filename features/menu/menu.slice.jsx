import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: { value: false },
  reducers: {
    handleMenu: (state) => {
      state.value = !state.value;
    },
  },
});

export const { handleMenu } = menuSlice.actions;

export default menuSlice.reducer;
