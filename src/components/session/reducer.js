import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "session",
  initialState: {
    sessions: [],
    devices: [],
  },
  reducers: {
    setSessions: (state, action) => {
      state.sessions = action.payload;
    },
    setDevices: (state, action) => {
      state.devices = action.payload;
    },
  },
});

export const { setSessions, setDevices } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(searchHistory('stackoverflow'))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getRecentlyClosed = (maxResults = 25) => {
  return (dispatch) => {
    const { chrome } = window;
    const filter = { maxResults };
    console.warn(JSON.stringify(filter));
    chrome.sessions.getRecentlyClosed(filter, (sessions) => {
      dispatch(setSessions(sessions));
    });
  };
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getSessions = (state) => state.session.sessions;

export default slice.reducer;
