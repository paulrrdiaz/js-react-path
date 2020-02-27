import React, { Fragment } from "react";
import Header from "components/Header";

export default ({ children, className }) => {
  return (
    <div className={className}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
