import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slices/customerSlice";

const store = configureStore({
  reducer: {
    customer: customerSlice
  },
  devTools: import.meta.env.MODE_ENV !== "production",
});



export default store; 