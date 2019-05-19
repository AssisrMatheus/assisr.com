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

    * {
      transition: all 150ms ease-in-out;
    }
  }
`;

export default GlobalStyle;
