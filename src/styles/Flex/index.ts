import styled, { css } from "styled-components";
import helpers from "./../helpers";

interface IFlex {
  vertical?: boolean;
  content?: "center" | "flex-start" | "flex-end" | "space-between" | "baseline";
  align?: "center" | "flex-start" | "flex-end" | "space-between" | "baseline";
  mobile?: boolean;
}

const mobile = css`
  @media all and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Flex = styled.div<IFlex | any>`
  display: flex;
  flex-direction: ${props => (props.vertical ? "column" : "row")};
  align-items: ${props => (props.align ? props.align : "initial")};
  justify-content: ${props => (props.content ? props.content : "initial")};
  ${props => props.mobile && mobile};
  ${helpers}
`;

export default Flex;
