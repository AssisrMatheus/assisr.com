import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, #root, #__next {
    width: 100%;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
