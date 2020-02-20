import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div id="app" aria-label="app--testing" className="app">
      Welcome to React!
    </div>
  );
};

render(<App />, document.getElementById("root"));
