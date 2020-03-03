import React from "react";
import { Footer } from "./Footer.styles";
import Logo from "components/Logo";

export default () => {
  return (
    <Footer>
      <div className="app--wrapper">
        <Logo color="blue" isSmall />
      </div>
    </Footer>
  );
};
