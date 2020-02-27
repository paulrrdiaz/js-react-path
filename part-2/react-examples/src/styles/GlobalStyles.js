import { css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
import emotionReset from "emotion-reset";

const Globals = css`
  /* stylelint-disable */
  ${emotionNormalize}
  ${emotionReset}


  :root {
    --white: 255, 255, 255; /* #ffffff */
    --black: 0, 0, 0; /* #000000 */
    --grey: 76, 86, 106; /* #4C566A */
    --grey-1: 51, 51, 51;
    --grey-2: 216, 216, 216;
    --grey-3: 236, 236, 236;
    --snow: 236, 239, 244; /* #ECEFF4 */
    --blue: 94, 129, 172; /* #5E81AC */
    --skyblue: 129, 161, 193; /* #81A1C1 */
    --red: 231, 76, 60;
    --green: 39, 174, 96;
    --yellow: 241, 196, 15;
    --fontTitle: "Montserrat", Arial, Helvetica, sans-serif;
    --fontNormal: "Roboto", Arial, Helvetica, sans-serif;
    --fontCode: "Fira Code", Arial, Helvetica, sans-serif;
  }

  ::-moz-selection {
    background-color: rgba(var(--grey), 0.5);
    color: rgb(var(--snow));
  }
  ::selection {
    background-color: rgba(var(--grey), 0.5);
    color: rgb(var(--snow));
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: normal;
  }

  body {
    background-color: rgb(var(--white));
    color: rgb(var(--grey));
    cursor: default;
    font-family: var(--fontNormal);
  }

  a {
    color: inherit;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    outline: 0;
    padding: 0;
  }

  .app--wrapper {
    margin: 0 auto;
    max-width: 1024px;
    position: relative;
    width: 90%;
    z-index: 1;
  }

  .app--particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  /* stylelint-enable */
`;

export default Globals;
