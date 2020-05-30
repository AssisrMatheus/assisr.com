import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, #root, #__next, body {
    background-color: ${props => props.theme.colors.background};
    overflow-x: hidden;
  }
`;
