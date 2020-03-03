import React from "react";
import Main from "layouts/Main";
import Weather from "components/Weather";

import { Terminal } from "components/Icons";

export default () => {
  return (
    <Main>
      <h1>Weather</h1>
      <Weather />
      <Terminal maxWidth="50px" />
    </Main>
  );
};
