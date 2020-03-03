import React from "react";
import { Logo } from "components/Icons";
import { LogoWrapper, LogoTitle } from "./Logo.styles";

export default ({ isSmall, withTitle, color }) => {
  return (
    <LogoWrapper>
      <Logo className="app--title" color={color || "green"} maxWidth={isSmall ? 20 : 40} />
      {withTitle && <LogoTitle>My awesome logo</LogoTitle>}
    </LogoWrapper>
  );
};
