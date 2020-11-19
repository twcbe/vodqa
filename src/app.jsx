import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./app.css";

import { Home } from "./home/index.jsx";

const renderLoader = () => <p>Loading</p>;
const renderError = () => <p>Something went wrong</p>;

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [config, setConfig] = useState([]);

  useEffect(() => {
    fetch("./app.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setConfig(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return renderError();
  } else if (!isLoaded) {
    return renderLoader();
  } else {
    return (
      <Suspense fallback={renderLoader()}>
        <div>
          <Home name={config.name} />
        </div>
      </Suspense>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
