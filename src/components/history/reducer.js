import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "history",
  initialState: {
    loading: false,
    entries: [],
    visits: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload === true;
    },
    setEntries: (state, action) => {
      state.entries = action.payload;
    },
    setVisits: (state, action) => {
      state.visits = action.payload;
    },
  },
});

export const { setLoading, setEntries, setVisits } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(searchHistory('stackoverflow'))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const searchHistory = (text = "", maxResults = 100) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    const { chrome } = window;
    const query = { text, maxResults };
    chrome.history.search(query, (historyItems) => {
      dispatch(setEntries(historyItems));
      dispatch(setLoading(false));
    });
  };
};

export const getVisits = (url) => {
  return (dispatch) => {
    const { chrome } = window;
    const details = { url };
    chrome.history.getVisits(details, (visitItems) => {
      dispatch(setVisits(visitItems));
    });
  };
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getHistoryEntries = (state) => state.history.entries;
export const getHistoryEntry = (state, id) =>
  state.history.entries.find((entry) => entry.id === id);
export const getHistoryVisits = (state) => state.history.visits;
export const isLoading = (state) => state.history.loading;

export default slice.reducer;
