import React from "react";
import { Link } from "@reach/router";

export default () => {
  return (
    <header>
      <h1>React Demos</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
