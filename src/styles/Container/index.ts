import styled from "styled-components";
import helpers from "./../helpers";

const container = styled.div<any>``;

const Container = styled(container).attrs(props => ({
  className: props.theme.isNes ? "nes-container is-dark with-title" : ""
}))`
  max-width: 1070px;
  margin: 0 auto !important;
  ${helpers}
`;

export default Container;
