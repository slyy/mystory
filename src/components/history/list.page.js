import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchHistory,
  getHistoryEntries,
  isLoading,
} from "components/history/reducer";
import ListEntry from "components/history/list/entry.molecule";
import { getRecentlyClosed, getSessions } from "components/session/reducer";

export default function () {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const historyEntries = useSelector(getHistoryEntries);
  // const sessions = useSelector(getSessions);
  // console.warn(JSON.stringify(historyEntries));
  // console.warn(JSON.stringify(sessions));

  useEffect(() => {
    dispatch(searchHistory());
    dispatch(getRecentlyClosed());
  }, []);

  if (loading === true) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {historyEntries.map((historyItem) => (
        <ListEntry key={historyItem.id} id={historyItem.id} />
      ))}
    </>
  );
}
