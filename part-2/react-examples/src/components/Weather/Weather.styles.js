import styled from "@emotion/styled";

const breakPoints = {
  huge: 1200,
  large: 1024,
  medium: 768,
  small: 480,
};

const media = n => {
  const breakPointsArray = Object.keys(breakPoints).map(size => [size, breakPoints[size]]);

  const [result] = breakPointsArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

export const WeatherInput = styled("input")`
  border-radius: 5px;
  border: 1px solid rgb(var(--grey));
  height: ${props => (props.big ? "80px" : "40px")};
  padding: 10px 15px;
  color: ${props => `rgb(var(--${props.color}))`};

  ${media("large")} {
    border: 1px solid rgb(var(--red));
  }

  &:focus {
    outline: 0;
  }
`;
