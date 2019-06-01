import React from "react";

// Redux
import { connect } from "react-redux";
import HeaderContainer from "../../components/Header/HeaderContainer";
import { AppState } from "../../redux/reducers";

// Components
import ActivityListContainer from "../../components/ActivityList/ActivityListContainer";
import Page from "./../../styles/Page";

interface IAppProps {
  theme: AppState["theme"]["theme"];
}

const Home = () => (
  <Page>
    <HeaderContainer />
    <ActivityListContainer />
  </Page>
);

const mapStateToProps = (state: AppState) => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps)(Home);
