import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./app.scss";

import { Home } from "./home/index.jsx";

const renderLoader = () => <p>Loading</p>;
const renderError = () => <p>Something went wrong</p>;

function App() {
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
    <Suspense fallback={renderLoader()}>
      <div>
        <Home config={config} />
      </div>
    </Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
