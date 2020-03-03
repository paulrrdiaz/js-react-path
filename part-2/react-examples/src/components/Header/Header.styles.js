import styled from "@emotion/styled";

export const Header = styled("header")`
  position: fixed;
  background-color: rgb(var(--white));
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  box-shadow: 0 0 10px 1px rgba(var(--grey), 0.15);

  .app--wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderLogo = styled("");
