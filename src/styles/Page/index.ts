import styled, { css } from "styled-components";

const normal = css`
  font-family: "Rubik", sans-serif;
  cursor: auto !important;

  a {
    cursor: pointer !important;
    &:hover {
      text-decoration: none !important;
    }
  }
`;

const nes = css`
  font-family: "Press Start 2P", "Rubik", "Times New Roman", Times, serif;
`;

const Page = styled.div.attrs(props => ({
  className: props.theme.isNes ? "nes-container is-dark with-title" : ""
}))`
  background-color: var(--primary);
  color: var(--primary-text);

  ${(props: any) => (props.theme.isNes ? nes : normal)}
`;

export default Page;
