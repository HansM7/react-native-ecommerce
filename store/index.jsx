import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter.slice";
import cartReducer from "../features/cart/cart.slice";

export default configureStore({
  reducer: { counter: counterReducer, cart: cartReducer },
});
