import { createGlobalStyle, css } from 'styled-components';

export const getGlobalTransition = (property: string) =>
  css`
    ${property} 70ms ease-out
  `;

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap'); */

  html, #root, #__next, body {
    transition: ${getGlobalTransition('background-color')};
    background-color: ${(props) => props.theme.colors.background};
    overflow-x: hidden;
  }

  /* * {
    font-family: 'Hammersmith One', sans-serif;
  } */
`;
