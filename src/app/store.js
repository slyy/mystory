import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "components/history/reducer";
import sessionReducer from "components/session/reducer";

export default configureStore({
  reducer: {
    history: historyReducer,
    session: sessionReducer,
  },
});
