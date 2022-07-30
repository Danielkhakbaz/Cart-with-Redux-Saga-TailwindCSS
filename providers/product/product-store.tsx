import { configureStore } from "@reduxjs/toolkit";
import { Reducers } from "./product-reducers";

export const Store = configureStore({
  reducer: Reducers,
});

export type RootState = ReturnType<typeof Store.getState>;
