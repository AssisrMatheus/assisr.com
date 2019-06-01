import styled from "styled-components";
import helpers from "./../helpers";

interface IText {
  italic?: boolean;
  bold?: boolean;
  uppercase?: boolean;
  light?: boolean;
  title?: boolean;
}

const Text = styled.div<IText | any>`  
  font-size: 1.1em;
  ${props => props.italic && "font-style: italic;"}
  ${props => props.bold && "font-weight: 600;"}
  ${props => props.light && "font-weight: 300;"}
  ${props => props.uppercase && "text-transform: uppercase;"}
  ${props => props.title && "font-size: 2.5em;"}
  ${helpers}
`;

export { Text };
