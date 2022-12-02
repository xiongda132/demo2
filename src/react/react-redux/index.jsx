import counterSlice from "./counterSlice";
import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
  reducer: {
    oneSlice: counterSlice,
  },
});
