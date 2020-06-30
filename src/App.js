import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import iconTest from "assets/icons/file_text_data.png";
import HistoryItems from "features/history";
import "App.css";

function App() {
  return (
    <Router>
      <div>
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
  const [results, setResults] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(null);

  useEffect(() => {
    const chrome = window.chrome;
    const startTime = Date.now();
    chrome.history.search({ text: "", maxResults: 100 }, (historyItems) => {
      const endTime = Date.now();
      setResults(historyItems);
      setElapsedTime((endTime - startTime) / 1000);
    });
  }, []);

  return (
    <div>
      <h2>Mistory</h2>
      {elapsedTime != null ? (
        <div>{`Search total time (in sec.): ${elapsedTime}`}</div>
      ) : null}
      <HistoryItems historyItems={results} />
    </div>
  );
}

export default App;
