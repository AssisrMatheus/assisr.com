import br from "flag-icon-css/flags/4x3/br.svg";
import us from "flag-icon-css/flags/4x3/us.svg";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { doChangeLanguage } from "../../redux/modules/theme/actionCreators";
import { AppState } from "../../redux/reducers";
import ThemeSelectorStyles from "./../ThemeSelector/ThemeSelectorStyles";

interface IThemeSelectorContainerProps {
  language: AppState["theme"]["language"];
  doChangeLanguage: typeof doChangeLanguage;
}

const LanguageSelectorContainer = (props: IThemeSelectorContainerProps) => (
  <ThemeSelectorStyles onClick={() => props.doChangeLanguage("pt")}>
    {props.language === "pt" ? (
      <img alt={"brazil-flag"} src={br} />
    ) : (
      <img alt={"us-flag"} src={us} />
    )}
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
