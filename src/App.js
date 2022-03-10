import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("location >>> ", window.location);
  console.log("location.search >>> ", window.location.search);

  const params = new URLSearchParams(window.location.search);

  let url = params.get("url");

  console.log("params.get('url') >>> ", url);

  const deeplink = "pangaia://" + url;
  console.log("deeplink", deeplink);
  useEffect(() => {
    window.open(deeplink, "_blank");
  }, [deeplink]);
  return (
    <div className="App">
      <p>{deeplink}</p>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href={deeplink}>{deeplink}</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
