import { configureStore } from "@reduxjs/toolkit";
import hubsDataReducer from "../data/hubsDataSlice";

export default configureStore({
  reducer: {
    hubsData: hubsDataReducer,
  },
});
