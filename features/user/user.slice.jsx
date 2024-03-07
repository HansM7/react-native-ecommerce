import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      email: "",
      idToken: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      const { name, email, localId } = action.payload;
      state.value = { name, email, localId };
    },
    getUser: (state) => {
      return state.value;
    },
  },
});

export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
