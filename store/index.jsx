import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter.slice";
import cartReducer from "../features/cart/cart.slice";
import menuReducer from "../features/menu/menu.slice";
import { shopApi } from "../services/shop.service";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/auth.service";
import userReducer from "../features/user/user.slice";
import productReducer from "../features/product/product.slice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    menu: menuReducer,
    user: userReducer,
    product: productReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(configureStore.dispatch);

export default store;
