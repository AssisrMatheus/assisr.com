import { css } from "styled-components";

export interface IHelpersProps {
  marginTop: boolean | number;
  marginRight: boolean | number;
  marginBottom: boolean | number;
  marginLeft: boolean | number;
  marginVertical: boolean | number;
  marginHorizontal: boolean | number;
  margin: boolean | number;
  paddingTop: boolean | number;
  paddingRight: boolean | number;
  paddingBottom: boolean | number;
  paddingLeft: boolean | number;
  paddingVertical: boolean | number;
  paddingHorizontal: boolean | number;
  padding: boolean | number;
}

const margin = css<IHelpersProps>`
  ${props =>
    props.marginTop
      ? `margin-top: calc(var(--distance-value) * ${
          props.marginTop === true ? 1 : props.marginTop
        }) !important;`
      : ""}

  ${props =>
    props.marginRight
      ? `margin-right: calc(var(--distance-value) * ${
          props.marginRight === true ? 1 : props.marginRight
        }) !important;`
      : ""}

  ${props =>
    props.marginBottom
      ? `margin-bottom: calc(var(--distance-value) * ${
          props.marginBottom === true ? 1 : props.marginBottom
        }) !important;`
      : ""}

  ${props =>
    props.marginLeft
      ? `margin-left: calc(var(--distance-value) * ${
          props.marginLeft === true ? 1 : props.marginLeft
        }) !important;`
      : ""}

  ${props =>
    props.marginVertical
      ? `margin-top: calc(var(--distance-value) * ${
          props.marginVertical === true ? 1 : props.marginVertical
        }) !important;
        margin-bottom: calc(var(--distance-value) * ${
          props.marginVertical === true ? 1 : props.marginVertical
        }) !important;`
      : ""}

  ${props =>
    props.marginHorizontal
      ? `margin-left: calc(var(--distance-value) * ${
          props.marginHorizontal === true ? 1 : props.marginHorizontal
        }) !important;
        margin-right: calc(var(--distance-value) * ${
          props.marginHorizontal === true ? 1 : props.marginHorizontal
        }) !important;`
      : ""}
  ${props =>
    props.margin
      ? `margin: calc(var(--distance-value) * ${
          props.margin === true ? 1 : props.margin
        }) !important;`
      : ""}
`;

const padding = css<IHelpersProps>`
  ${props =>
    props.paddingTop
      ? `padding-top: calc(var(--distance-value) * ${
          props.paddingTop === true ? 1 : props.paddingTop
        }) !important;`
      : ""}

  ${props =>
    props.paddingRight
      ? `padding-right: calc(var(--distance-value) * ${
          props.paddingRight === true ? 1 : props.paddingRight
        }) !important;`
      : ""}

  ${props =>
    props.paddingBottom
      ? `padding-bottom: calc(var(--distance-value) * ${
          props.paddingBottom === true ? 1 : props.paddingBottom
        }) !important;`
      : ""}

  ${props =>
    props.paddingLeft
      ? `padding-left: calc(var(--distance-value) * ${
          props.paddingLeft === true ? 1 : props.paddingLeft
        }) !important;`
      : ""}

  ${props =>
    props.paddingVertical
      ? `padding-top: calc(var(--distance-value) * ${
          props.paddingVertical === true ? 1 : props.paddingVertical
        });
        padding-bottom: calc(var(--distance-value) * ${
          props.paddingVertical === true ? 1 : props.paddingVertical
        }) !important;`
      : ""}

  ${props =>
    props.paddingHorizontal
      ? `padding-left: calc(var(--distance-value) * ${
          props.paddingHorizontal === true ? 1 : props.paddingHorizontal
        }) !important;
        padding-right: calc(var(--distance-value) * ${
          props.paddingHorizontal === true ? 1 : props.paddingHorizontal
        }) !important;`
      : ""}
  ${props =>
    props.padding
      ? `padding: calc(var(--distance-value) * ${
          props.padding === true ? 1 : props.padding
        }) !important;`
      : ""}
`;

const helpers = css<IHelpersProps>`
  ${(props: any) => (props.noMargin ? `margin: 0 !important;` : "")}
  ${margin}

  ${(props: any) => (props.noPadding ? `padding: 0 !important;` : "")}
  ${padding}
`;

export default helpers;
