import styled from "styled-components";
import helpers from "./../helpers";

const container = styled.div<any>``;

const Container = styled<any>(container).attrs(props => ({
  className:
    props.theme.isNes && !props.noNes ? "nes-container is-dark with-title" : ""
}))`
  max-width: 1070px;
  margin-left: auto !important;
  margin-right: auto !important;
  ${props => !props.theme.isNes && "padding: var(--distance-value);"}

  @media all and (max-width: 700px) {
    ${props =>
      props.theme.isNes && "margin: 0 var(--distance-value) !important;"}
  }

  ${helpers}
`;

export default Container;
