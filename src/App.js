import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import iconTest from "assets/icons/file_text_data.png";
import HistoryItems from "components/history";
import styles from "App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.popup}>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Mistory</h2>
      <HistoryItems />
    </div>
  );
}

export default App;
