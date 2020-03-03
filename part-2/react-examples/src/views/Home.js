import React from "react";
import Main from "layouts/Main";
import { Link } from "@reach/router";

export default () => {
  return (
    <Main>
      <h1>Pick one</h1>
      <ul>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/hoc">HOC</Link>
        </li>
      </ul>
    </Main>
  );
};
