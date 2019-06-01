import React from "react";

// Redux
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { doChangeLanguage } from "../../redux/modules/theme/actionCreators";
import { AppState } from "../../redux/reducers";

// Styles
import ThemeSelectorStyles from "./../ThemeSelector/ThemeSelectorStyles";

interface IThemeSelectorContainerProps {
  language: AppState["theme"]["language"];
  doChangeLanguage: typeof doChangeLanguage;
}

const LanguageSelectorContainer = (props: IThemeSelectorContainerProps) => (
  <ThemeSelectorStyles onClick={() => props.doChangeLanguage("pt")}>
    {props.language}
  </ThemeSelectorStyles>
);

const mapStateToProps = (state: AppState) => ({
  language: state.theme.language
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      doChangeLanguage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelectorContainer);
