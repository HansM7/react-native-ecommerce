import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    value: [],
  },

  reducers: {
    addProduct: (state, action) => {
      const { data, id } = action.payload;

      const index = state.value.findIndex(
        (item) => item.data.product.id === data.product.id
      );
      state.value[index].data.ammount++;
    },

    addForAmmount: (state, action) => {
      const { product, ammount } = action.payload;
      state.value.push(action.payload);
    },

    removeProduct: (state, action) => {
      const item = action.payload;
      const index = state.value.findIndex((p) => p.id === item.id);
      if (index !== -1) {
        if (state.value[index].data.ammount > 1) {
          state.value[index].data.ammount--;
        } else {
          state.value.splice(index, 1);
        }
      }
    },

    setNewDataToCart: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = [];
    },
  },
});

export const { addProduct, removeProduct, addForAmmount, setNewDataToCart } =
  cartSlice.actions;

export default cartSlice.reducer;

// [
//   {
//     data: {
//       ammount: 4,
//       email: "example@gmail.com",
//       id: "19349ccc-2d61-4581-9642-1c477f393302",
//       product: {},
//       status: "pending"
//     },
//     id: "-Ns5fN6QafX_1SEJG2OC"
//   },
//   {
//     data: {
//       ammount: 1,
//       email: "example@gmail.com",
//       id: "93dfd97f-6444-4394-9900-33d6bcf13300",
//       product: {},
//       status: "pending"
//     },
//     id: "-Ns5faQZbkC6M-HztT0m"
//   }
// ]
