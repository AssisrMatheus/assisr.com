import color from 'color';
import styled from 'styled-components';
import { getGlobalTransition } from '../../../styles/globalStyles';

export const PostTeaserContainer = styled.div`
  padding: ${(props) => props.theme.spacing.sp16};
  transition: ${getGlobalTransition('border-color')},
    ${getGlobalTransition('box-shadow')};
  border: 1px solid
    ${(props) => color(props.theme.colors.textMain).fade(0.8).rgb().toString()};
  box-shadow: 0px 0px 1px 1px
    ${(props) => color(props.theme.colors.textMain).fade(0.8).rgb().toString()};
`;
