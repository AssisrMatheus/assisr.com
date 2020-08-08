import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export default createGlobalStyle`
  html, #root, #__next, body {
    transition: background-color 70ms ease-out, color 70ms ease-out;
    overflow-x: hidden;
    ${tw`bg-background`}
    ${tw`text-paragraph`}
    /* ${tw`font-body`} */

    &.dark-mode {
      --primary: #C72241;
      /* --secondary: ; */
      --background: #24292D;
      --background-inverted: #E9ECEE;

      --paragraph: #D7DADC;
      --elevation: #1A1A1B;
    }

    &.light-mode {
      --primary: #C72241;
      /* --secondary: ; */
      --background: #E9ECEE;
      --background-inverted: #24292D;

      --paragraph: #161D2E;
      --elevation: #FFF;
    }
  }
`;
