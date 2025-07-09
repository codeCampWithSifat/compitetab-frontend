import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux//slices/authSlice";
import productReducer from "../redux/slices/productsSlice";
import cartReducer from "../redux/slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
