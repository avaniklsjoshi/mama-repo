import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.body.backgroundColor} !important;
    background-image: url(${(props) => props.theme.body.url});
    color: ${(props) => props.theme.body.textColor};
  }
`;
