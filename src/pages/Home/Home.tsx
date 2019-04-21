import React from "react";

// Components
import ActivityListContainer from "../../components/ActivityList/ActivityListContainer";
import DescriptionComponent from "../../components/Description/DescriptionComponent";
import PhotoComponent from "./../../components/Photo/PhotoComponent";

// Styles
import { ContentDivider } from "./HomeStyles";

// Static
import data from "./../../static/data/data.json";
import photo from "./../../static/img/photo.jpg";

const Home = () => (
  <React.Fragment>
    <ContentDivider>
      <PhotoComponent photo={photo} />
      <DescriptionComponent
        description={data.description}
        social={data.social}
      />
    </ContentDivider>
    <ActivityListContainer />
  </React.Fragment>
);

export default Home;
