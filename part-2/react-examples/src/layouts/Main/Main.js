import React, { Fragment } from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import { Main } from "./Main.styles";

export default ({ children, className }) => {
  return (
    <div className={className}>
      <Header />
      <div className="app--wrapper">
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  );
};
