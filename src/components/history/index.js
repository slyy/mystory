import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchHistory, entries, isLoading } from "components/history/reducer";
import styles from "components/history/style.module.css";

export default function (text) {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const historyEntries = useSelector(entries);

  useEffect(() => {
    dispatch(searchHistory());
  }, []);

  if (loading === true) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {historyEntries.map((historyItem) => (
        <HistoryItem key={historyItem.id} historyItem={historyItem} />
      ))}
    </>
  );
}

const HistoryItem = ({ historyItem }) => {
  const { id, url, title, lastVisitTime, visitCount, typedCount } = historyItem;

  const lastVisitDate = new Intl.DateTimeFormat("default", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(lastVisitTime);

  return (
    <div className={styles.historyItem}>
      <div className={styles.id}>{`HistoryItem #${id}`}</div>
      <div className={styles.link}>
        <a href={url}>{title}</a>
      </div>
      <div
        className={styles.stats}
      >{`last visited ${lastVisitDate} (count: ${visitCount})`}</div>
    </div>
  );
};
