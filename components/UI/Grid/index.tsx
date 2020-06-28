import styled from 'styled-components';
import responsiveMediaQuery from '../../../utils/responsiveMediaQuery';
import { SpacingEnum } from '../../Providers/AppThemeProvider';

type GridProps = {
  /**
   * Add a space between elements
   * */
  gap?: SpacingEnum;
};

/**
 * A default css grid
 */
export const Grid = styled.div<GridProps>`
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
