import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../redux/reducers";

// Components
import HeaderComponent from "./HeaderComponent";

interface IHeaderContainerProps {
  theme: AppState["theme"]["theme"];
}

const HeaderContainer = (props: IHeaderContainerProps) => (
  <HeaderComponent theme={props.theme} />
);

const mapStateToProps = (state: AppState) => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps)(React.memo(HeaderContainer));
