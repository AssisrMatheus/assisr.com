import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, #root, #__next, body {
    transition: background-color 70ms ease-out;
    background-color: ${props => props.theme.colors.background};
    overflow-x: hidden;
  }

  * {
    font-family: 'Hammersmith One', sans-serif;
  }
`;
