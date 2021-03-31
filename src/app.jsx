import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./app.scss";
import Spinner from "./imgs/spinner.svg";
import { Home } from "./home/index.jsx";
import { PastEditions } from "./edition/list.jsx";
import { EditionDetails } from "./edition/index.jsx";

const renderLoader = () => <img src={Spinner} alt="Loading" />;
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

  if (!isLoaded) return renderLoader();
  if (error || !config.name) {
    return renderError();
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home config={config} />
        </Route>
        <Route exact path="/edition">
          <EditionDetails config={config} />
        </Route>
        <Route exact path="/list">
          <PastEditions config={config} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
