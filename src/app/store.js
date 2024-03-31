import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import questionReducer from "../features/questions/questionSlice"

const store = configureStore({
  reducer: {
    auth:authReducer,
    question:questionReducer ,

  },
});

export default store;