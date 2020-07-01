import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export default createGlobalStyle`
  html, #root, #__next, body {
    transition: background-color 70ms ease-out, color 70ms ease-out;
    overflow-x: hidden;
    ${tw`bg-background`}
    ${tw`text-textMain`}
    /* ${tw`font-body`} */

    &.dark-mode {
      /* --primary: ; */
      /* --secondary: ; */
      --background: #24292D;
      --background-inverted: #E9ECEE;
      --text-main: #161D2E;
      --text-lighter: #6C7280;
      --text-lightest: #91949c;
      --text-on-inverted: #24292D;
    }

    &.light-mode {
      /* --primary: ; */
      /* --secondary: ; */
      --background: #E9ECEE;
      --background-inverted: #24292D;
      --text-main: #161D2E;
      --text-lighter: #6C7280;
      --text-lightest: #91949c;
      --text-on-inverted: #FAFBFD;
    }
  }
`;
