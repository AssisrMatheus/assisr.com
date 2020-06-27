import styled, { css } from 'styled-components';
import { SpacingEnum } from '../../styles/theme';

const defaultSizing: SpacingEnum = 'sp16';

interface MarginHelperProps {
  /**
   * Set the component's margin-top css property
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  marginTop?: SpacingEnum | boolean;
  /**
   * Set the component's margin-right css property
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  marginRight?: SpacingEnum | boolean;
  /**
   * Set the component's margin-bottom css property
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  marginBottom?: SpacingEnum | boolean;
  /**
   * Set the component's margin-left css property
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  marginLeft?: SpacingEnum | boolean;
  /**
   * Set the component's margin-top AND margin-bottom css properties
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  marginVertical?: SpacingEnum | boolean;
  /**
   * Set the component's margin-left AND margin-right css properties
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  marginHorizontal?: SpacingEnum | boolean;
  /**
   * Set the component's margin css properties
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  margin?: SpacingEnum | boolean;
}

const margin = css<MarginHelperProps>`
${(props) =>
  props.margin
    ? `margin: ${
        props.margin === true
          ? props.theme.spacing[defaultSizing]
          : props.theme.spacing[props.margin]
      };`
    : ''}
${(props) =>
  props.marginTop
    ? `margin-top: ${
        props.marginTop === true
          ? props.theme.spacing[defaultSizing]
          : props.theme.spacing[props.marginTop]
      };`
    : ''}
  ${(props) =>
    props.marginRight
      ? `margin-right: ${
          props.marginRight === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.marginRight]
        };`
      : ''}
  ${(props) =>
    props.marginBottom
      ? `margin-bottom: ${
          props.marginBottom === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.marginBottom]
        };`
      : ''}
  ${(props) =>
    props.marginLeft
      ? `margin-left: ${
          props.marginLeft === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.marginLeft]
        };`
      : ''}
  ${(props) =>
    props.marginVertical
      ? `margin-top: ${
          props.marginVertical === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.marginVertical]
        };
      margin-bottom: ${
        props.marginVertical === true
          ? props.theme.spacing[defaultSizing]
          : props.theme.spacing[props.marginVertical]
      };`
      : ''}
  ${(props) =>
    props.marginHorizontal
      ? `margin-left: ${
          props.marginHorizontal === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.marginHorizontal]
        };
    margin-right: ${
      props.marginHorizontal === true
        ? props.theme.spacing[defaultSizing]
        : props.theme.spacing[props.marginHorizontal]
    };`
      : ''}
`;

interface PaddingHelperProps {
  /**
   * Set the component's padding-top css property
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  paddingTop?: SpacingEnum | boolean;
  /**
   * Set the component's padding-right css property
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  paddingRight?: SpacingEnum | boolean;
  /**
   * Set the component's padding-bottom css property
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  paddingBottom?: SpacingEnum | boolean;
  /**
   * Set the component's padding-left css property
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  paddingLeft?: SpacingEnum | boolean;
  /**
   * Set the component's padding-top AND padding-bottom css properties
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  paddingVertical?: SpacingEnum | boolean;
  /**
   * Set the component's padding-left AND padding-right css properties
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  paddingHorizontal?: SpacingEnum | boolean;
  /**
   * Set the component's padding css properties
   * If a boolean is given instead of a SpacingName. Defaults to "default"
   * */
  padding?: SpacingEnum | boolean;
}

const padding = css<PaddingHelperProps>`
${(props) =>
  props.padding
    ? `padding: ${
        props.padding === true
          ? props.theme.spacing[defaultSizing]
          : props.theme.spacing[props.padding]
      };`
    : ''}
  ${(props) =>
    props.paddingTop
      ? `padding-top: ${
          props.paddingTop === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.paddingTop]
        };`
      : ''}
  ${(props) =>
    props.paddingRight
      ? `padding-right: ${
          props.paddingRight === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.paddingRight]
        };`
      : ''}
  ${(props) =>
    props.paddingBottom
      ? `padding-bottom: ${
          props.paddingBottom === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.paddingBottom]
        };`
      : ''}
  ${(props) =>
    props.paddingLeft
      ? `padding-left: ${
          props.paddingLeft === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.paddingLeft]
        };`
      : ''}
  ${(props) =>
    props.paddingVertical
      ? `padding-top: ${
          props.paddingVertical === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.paddingVertical]
        };
        padding-bottom: ${
          props.paddingVertical === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.paddingVertical]
        };`
      : ''}
  ${(props) =>
    props.paddingHorizontal
      ? `padding-left: ${
          props.paddingHorizontal === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.paddingHorizontal]
        };
        padding-right: ${
          props.paddingHorizontal === true
            ? props.theme.spacing[defaultSizing]
            : props.theme.spacing[props.paddingHorizontal]
        };`
      : ''}
`;

type HelperProps = MarginHelperProps &
  PaddingHelperProps & {
    /**
     * Set the component's margin css property to "0".
     * Overriding any set or existing margin.
     * */
    noMargin?: boolean;
    /**
     * Set the component's padding css property to "0".
     * Overriding any set or existing padding.
     * */
    noPadding?: boolean;
    /**
     * Set the component's width to 100%;
     * */
    fullWidth?: boolean;
    /**
     * Set the component's height to 100%;
     * */
    fullHeight?: boolean;
    /**
     * Whether or not the component should be a "inline-block" component
     * */
    inline?: boolean;
  };

const helpers = css<HelperProps>`
  ${(props) => (props.noMargin ? `margin: 0;` : '')}
  ${margin}

  ${(props) => (props.noPadding ? `padding: 0;` : '')}
  ${padding}

  ${(props) => (props.fullWidth ? `width: 100%;` : '')}
  ${(props) => (props.fullHeight ? `height: 100%;` : '')}

  ${(props) => (props.inline ? 'display: inline-block;' : '')};
`;

/**
 * A div that helps you add padding or margin to components or itself(via override property)
 */
const Spacing = styled.div<
  HelperProps & {
    /**
     * Whether or not the margin should be added to the next first children or to the component itself
     * */
    override?: boolean;
  }
>`
  ${(props) => (props.override ? `> * {${helpers}}` : helpers)}
`;

export default Spacing;
