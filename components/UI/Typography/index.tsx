import styled, { css } from 'styled-components';
import { getGlobalTransition } from '../GlobalStyles';

const commonTextCss = css`
  font-family: 'Hammersmith One', 'Helvetica', 'Roboto', sans-serif;
  transition: ${getGlobalTransition('color')};
  color: ${(props) => props.theme.colors.textMain};
`;

export const HeaderOne = styled.h1`
  ${commonTextCss}
`;

export const Paragraph = styled.p`
  line-height: 1.5rem;
  ${commonTextCss}
`;
