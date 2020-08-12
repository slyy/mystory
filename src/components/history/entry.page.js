import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getHistoryEntry,
  getVisits,
  getHistoryVisits,
} from "components/history/reducer";

export default function () {
  const dispatch = useDispatch();
  const { id } = useParams();
  const historyEntry = useSelector((state) => getHistoryEntry(state, id));
  const visits = useSelector(getHistoryVisits);

  useEffect(() => {
    dispatch(getVisits(historyEntry.url));
  }, []);

  console.warn(JSON.stringify(visits));

  return (
    <div>
      <h1>{`History entry #${id}`}</h1>
      <Link to="/">Back to list</Link>
    </div>
  );
}
