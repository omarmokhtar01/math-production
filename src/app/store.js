import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import questionReducer from "../features/questions/questionSlice"
import excelReducer from "../features/excelSlice/excelSlice"

const store = configureStore({
  reducer: {
    auth:authReducer,
    question:questionReducer ,
    excel:excelReducer
  },
});

export default store;