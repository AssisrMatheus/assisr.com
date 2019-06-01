import styled from "styled-components";
import helpers from "./../helpers";

interface IFlex {
  vertical?: boolean;
  content?: "center" | "flex-start" | "flex-end";
  align?: "center" | "flex-start" | "flex-end";
}

const Flex = styled.div<IFlex | any>`
  display: flex;
  flex-direction: ${props => (props.vertical ? "column" : "row")};
  align-items: ${props => (props.align ? props.align : "initial")};
  justify-content: ${props => (props.content ? props.content : "initial")};
  ${helpers}
`;

export default Flex;
