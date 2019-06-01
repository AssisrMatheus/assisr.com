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
    --secondary-text: var(--secondary);
    
    --tertiary: #1E1F26;
    
    --quaternary: #DCDCDC;

    --distance-value: 32px;

    * {
      //transition: all 150ms ease-in-out;
    }    
  }
  
  html, #root, .app {
    width: 100%;
    height: 100%
  }
  
  a {
    transition: color 70ms ease-in-out;
    color: var(--primary-text);
    &:hover {
      color: var(--secondary-text);
    }
  }
`;

export default GlobalStyle;
