import React from "react";
import { css, Global } from "@emotion/core";
import GlobalStyles from "styles/GlobalStyles";
import Router from "router";

const App = () => (
  <>
    <Global
      styles={css`
        ${GlobalStyles}
      `}
    />
    <Router />
  </>
);

export default App;
