import { configureStore } from "@reduxjs/toolkit";
import { Reducers } from "./cart-reducers";

export const Store = configureStore({
  reducer: Reducers,
});
