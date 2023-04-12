import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "../features/habitSlice";

const store = configureStore({
  reducer: {
    habitList: habitReducer,
  },
});
export default store;
