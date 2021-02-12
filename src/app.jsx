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

const renderLoader = () => <p>Loading</p>;
const renderError = () => <p>Something went wrong</p>;
const EVENT_NAME = "vodqa";

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

  if (!isLoaded) return renderLoader();
  if (error || !config.name) {
    return renderError();
  }

  return (
    <Router>
      <Switch>
        <Route exact path={`/${EVENT_NAME}`}>
          <Home config={config} />
        </Route>
        <Route exact path={`/${EVENT_NAME}/list`}>
          <PastEditions config={config} />
        </Route>
        <Redirect to={`/${EVENT_NAME}`} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
