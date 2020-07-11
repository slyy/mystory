import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "components/history/reducer";

export default configureStore({
  reducer: {
    history: historyReducer,
  },
});
