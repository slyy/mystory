import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
// import iconTest from "assets/icons/file_text_data.png";
import HistoryListPage from "components/history/list.page";
import HistoryEntryPage from "components/history/entry.page";
import styles from "App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.popup}>
        <Switch>
          <Redirect from="/index.html" to="/" />
          <Route exact path="/" component={HistoryListPage} />
          <Route path="/history/:id" component={HistoryEntryPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
