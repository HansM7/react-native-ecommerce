import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      const index = state.value.findIndex(
        (item) => item.product.id === product.product.id
      );
      if (index !== -1) {
        state.value[index].ammount++;
      } else {
        state.value.push({
          product,
          id: state.value.length + 1,
          ammount: 1,
        });
      }
    },
    addForAmmount: (state, action) => {
      const { product, ammount } = action.payload;
      state.value.push({
        product,
        id: state.value.length + 1,
        ammount,
      });
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const index = state.value.findIndex((item) => item.product.id === id);
      if (index !== -1) {
        if (state.value[index].ammount > 1) {
          state.value[index].ammount--;
        } else {
          state.value.splice(index, 1);
        }
      }
    },
  },
});

export const { addProduct, removeProduct, addForAmmount } = cartSlice.actions;

export default cartSlice.reducer;
