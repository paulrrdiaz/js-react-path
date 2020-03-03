import React from "react";
import { Link } from "@reach/router";

import { Header } from "./Header.styles";
import Logo from "components/Logo";

export default () => {
  return (
    <Header>
      <div className="app--wrapper">
        <Logo withTitle={true} />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  );
};
