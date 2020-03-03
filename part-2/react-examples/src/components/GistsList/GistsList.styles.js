import styled from "@emotion/styled";

export const Item = styled("li")`
  border: 1px solid rgb(var(--red));
  border-radius: 5px;
  padding: 5px 10px;
  display: block;

  & + & {
    margin-top: 10px;
  }

  h3 {
    font-size: 20px;
  }
`;
