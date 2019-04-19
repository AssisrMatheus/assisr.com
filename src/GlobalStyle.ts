import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    --primary: #313131;
    --primary-light: #5a5a5a;
    --primary-dark: #080808;
    --primary-text: #fafafa;

    --secondary: #a52a2a;
    --secondary-light: #dc5c53;
    --secondary-dark: #6f0000;

    --distance-value: 16px;

    background-color: var(--primary);
    color: var(--primary-text);

    * {
      height: 800px;
      max-width: 1070px;
      margin: 0 auto;
      margin-top: 64px;
    }
  }
`;

export default GlobalStyle;
