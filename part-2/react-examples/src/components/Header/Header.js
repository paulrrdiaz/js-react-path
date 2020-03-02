import React from "react";
import { Link } from "@reach/router";
import { css, Global } from "@emotion/core";
import { headerStyles } from "styles/headerStyles";

export default () => {
  return (
    <>
      <Global
        styles={css`
          ${headerStyles}
        `}
      />
      <nav className="menuBar">
        <div className="logo">
          <Link to="/">
            Home{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="menuCon"></div>
      </nav>
    </>
  );
};
