import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const deeplink = "pangaia:/" + window.location.pathname;
  useEffect(() => {
    window.open(deeplink, "_blank");
  }, [deeplink]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a href={deeplink}>{deeplink}</a>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
