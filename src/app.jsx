import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./app.scss";
import { Home } from "./home/index.jsx";
import { PastEditions } from "./edition/list.jsx";

// const renderLoader = () => <p>Loading</p>;
const renderError = () => <p>Something went wrong</p>;

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [config, setConfig] = useState({});

  useEffect(() => {
    fetch("./app.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setConfig(result);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  if (error || !isLoaded || !config.name) {
    return renderError();
  }

  return (
    <Router>
      <Switch>
        <Route path="./">
          <Home config={config} />
        </Route>
        <Route path="./list">
          <PastEditions config={config} />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
