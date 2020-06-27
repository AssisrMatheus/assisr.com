import styled from 'styled-components';
import { SpacingEnum } from '../../styles/theme';
import responsiveMediaQuery from '../../utils/responsiveMediaQuery';

type GridProps = {
  /**
   * Add a space between elements
   * */
  gap?: SpacingEnum;
};

/**
 * A default css grid
 */
const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;

  grid-column-gap: ${(props) => props.gap || props.theme.spacing.sp24};
  grid-row-gap: ${(props) => props.gap || props.theme.spacing.sp24};

  ${responsiveMediaQuery('tablet')} {
    grid-column-gap: ${(props) => props.gap || props.theme.spacing.sp32};
    grid-row-gap: ${(props) => props.gap || props.theme.spacing.sp32};
  }
`;

export default Grid;
