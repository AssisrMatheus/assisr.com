import { createGlobalStyle } from 'styled-components';

export const getGlobalTransition = (property: string) =>
  `
    ${property} 70ms ease-out
  `;

export default createGlobalStyle`
  html, #root, #__next, body {
    transition: ${getGlobalTransition('background-color')};
    overflow-x: hidden;
    background-color: ${(props) => props.theme.colors.background};

    &.dark-mode {
      /* --primary: ; */
      /* --secondary: ; */
      --background: #24292D;
      --background-inverted: #E9ECEE;
      --text-main: #FAFBFD;
      --text-lighter: #5B5F68;
      --text-on-inverted: #24292D;
    }

    &.light-mode {
      /* --primary: ; */
      /* --secondary: ; */
      --background: #E9ECEE;
      --background-inverted: #24292D;
      --text-main: #24292D;
      --text-lighter: #5B5F68;
      --text-on-inverted: #FAFBFD;
    }
  }
`;
