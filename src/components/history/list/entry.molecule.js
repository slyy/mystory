import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHistoryEntry } from "components/history/reducer";
import styles from "components/history/list/entry.molecule.module.css";

export default function ({ id }) {
  const historyItem = useSelector((state) => getHistoryEntry(state, id));
  const { url, title, lastVisitTime, visitCount } = historyItem;

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
      <div className={styles.id}>
        <Link to={`/history/${id}`}>{`HistoryItem #${id}`}</Link>
      </div>
      <div className={styles.link}>
        <a href={url}>{title}</a>
      </div>
      <div
        className={styles.stats}
      >{`last visited ${lastVisitDate} (count: ${visitCount})`}</div>
    </div>
  );
}
