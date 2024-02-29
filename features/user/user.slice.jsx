import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      email: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      const { name, email } = action.payload;
      state.value = { name, email };
    },
    getUser: (state) => {
      return state.value;
    },
  },
});

export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
