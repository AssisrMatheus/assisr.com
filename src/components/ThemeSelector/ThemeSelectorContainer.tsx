import React from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { doChangeTheme } from "../../redux/modules/theme/actionCreators";
import { AppState } from "../../redux/reducers";

// Styles
import ThemeSelectorStyles, { Controller } from "./ThemeSelectorStyles";

interface IThemeSelectorContainerProps {
  theme: AppState["theme"]["theme"];
  doChangeTheme: typeof doChangeTheme;
}

const ThemeSelectorContainer = (props: IThemeSelectorContainerProps) => (
  <ThemeSelectorStyles onClick={() => props.doChangeTheme("nes")}>
    <Controller />
  </ThemeSelectorStyles>
);

const mapStateToProps = (state: AppState) => ({
  theme: state.theme.theme
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      doChangeTheme
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSelectorContainer);
