import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    value: {},
  },
  reducers: {
    setProduct: (state, action) => {
      state.value = action.payload;
    },
    getProduct: (state) => {
      return state.value;
    },
  },
});

export const { setProduct, getProduct } = productSlice.actions;

export default productSlice.reducer;
