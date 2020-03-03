import React from "react";
import { ReactSVG } from "react-svg";
import styled from "@emotion/styled";
import isNumber from "lodash/isNumber";

const getPixelsIfIsNecessary = property => (isNumber(property) ? `${property}px` : property);

export default (props, src) => {
  const { maxWidth, color } = props;
  const validProps = ["className", "id", "href"];
  const propsKeys = Object.keys(props);
  const StyledSVG = styled(ReactSVG)`
    min-height: 5px;
    min-width: 5px;
    max-width: ${getPixelsIfIsNecessary(maxWidth) || "none"};

    svg {
      width: 100%;
      height: 100%;

      path {
        fill: ${color ? `rgb(var(--${color}))` : null};
      }
    }
  `;

  return <StyledSVG {...props} src={src} />;
};
