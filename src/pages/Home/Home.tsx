import React from "react";

// Redux
import { connect } from "react-redux";
import LanguageSelectorContainer from "../../components/LanguageSelector/LanguageSelectorContainer";
import { AppState } from "../../redux/reducers";

// Components
import ActivityListContainer from "../../components/ActivityList/ActivityListContainer";
import DescriptionComponent from "../../components/Description/DescriptionComponent";
import PhotoComponent from "./../../components/Photo/PhotoComponent";
import ThemeSelectorContainer from "./../../components/ThemeSelector/ThemeSelectorContainer";

// Styles
import Container from "./../../styles/Container";
import Flex from "./../../styles/Flex";
import Page from "./../../styles/Page";
import { ContentDivider } from "./HomeStyles";

// Static
import data from "./../../static/data/data.json";
import photo from "./../../static/img/photo.jpg";

interface IAppProps {
  theme: AppState["theme"]["theme"];
}

const Home = (props: IAppProps) => (
  <Page>
    <Flex align={"center"} content={"flex-end"}>
      <LanguageSelectorContainer />
      <ThemeSelectorContainer />
    </Flex>
    <Container padding>
      {props.theme === "nes" && <p className="title">Matheus Assis Rios</p>}
      <ContentDivider>
        <PhotoComponent photo={photo} />
        <DescriptionComponent
          description={data.description}
          social={data.social}
        />
      </ContentDivider>
    </Container>
    <ActivityListContainer />
  </Page>
);

const mapStateToProps = (state: AppState) => ({
  theme: state.theme.theme
});

export default connect(mapStateToProps)(Home);
