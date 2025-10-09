import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slices/customerSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    customer: customerSlice
  },
  devTools: import.meta.env.MODE_ENV !== "production",
});



export default store; 