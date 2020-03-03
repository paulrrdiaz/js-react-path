import React from "react";
import { Router } from "@reach/router";

import Home from "views/Home";
import Calculator from "views/Calculator";
import Weather from "views/Weather";
import HOC from "views/HOC";

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Calculator path="/calculator" />
      <Weather path="/weather" />
      <HOC path="/hoc" />
    </Router>
  );
};
