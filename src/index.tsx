import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import registerSW from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

registerSW();
