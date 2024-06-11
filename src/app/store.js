import { configureStore } from "@reduxjs/toolkit";
import cartData from "../components/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartData,
  },
});
