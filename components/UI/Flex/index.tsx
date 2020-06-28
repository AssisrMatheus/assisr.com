import * as CSSTypes from 'csstype';
import styled from 'styled-components';
import { SpacingEnum } from '../../Providers/AppThemeProvider';

type FlexProps = {
  /**
   * Set the flex's align-items css property
   *
   * @default initial
   * */
  alignItems?: CSSTypes.AlignItemsProperty;
  /**
   * Set the flex's justify-content css property
   *
   * @default initial
   * */
  justifyContent?: CSSTypes.JustifyContentProperty;
  /**
   * Whether or not the elements should be vertically stacked.
   * Set the flex's justify-content css property to "column" if true
   * */
  vertical?: boolean;
  /**
   * Add a space between elements
   * If a boolean is given instead of a SpacingName. Defaults to "sm"
   * */
  gap?: SpacingEnum | boolean;
  /**
   * Set the width AND height to 100%;
   * */
  full?: boolean;
};

/**
 * A div with flexbox properties
 */
export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'initial')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'initial'};
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  ${(props) => (props.full ? 'width: 100%; height: 100%;' : '')}
  > * {
    &:not(:last-child) {
      ${(props) =>
        props.gap
          ? `${props.vertical ? 'margin-bottom' : 'margin-right'}: ${
              props.gap === true
                ? props.theme.spacing.sp16
                : props.theme.spacing[props.gap]
            };`
          : ''}
    }
  }
`;
