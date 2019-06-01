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

const Page = styled.div`
  color: var(--primary-text);
  height: 100%;
  width: 100%;

  background-color: var(--tertiary);
  min-height: 100vh;
  min-width: 98vw;

  ${(props: any) => (props.theme.isNes ? nes : normal)}
`;

export default Page;
