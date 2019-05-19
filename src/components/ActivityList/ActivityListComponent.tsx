import React from "react";

//  Redux
import { AppState } from "../../redux/reducers";

// Interfaces
import IActivity from "./../../interfaces/IActivity";

// Components
import ActivityComponent from "./../Activity/ActivityComponent";

// Styles
import Container from "./../../styles/Container";
import { ActivityTitle } from "./ActivityListStyles";

interface IActivityListComponent {
  activityList: IActivity[];
  fetching: boolean;
  theme: AppState["theme"]["theme"];
}

const ActivityListComponent = (props: IActivityListComponent) => (
  <Container marginTop={2}>
    {props.theme === "nes" ? (
      <p className="title">Activity</p>
    ) : (
      <ActivityTitle>Activity</ActivityTitle>
    )}
    {props.fetching && <div>LOADING</div>}
    {props.activityList.map((item, i) => (
      <ActivityComponent key={`${item.content}-${i}`} {...item} />
    ))}
  </Container>
);

export default ActivityListComponent;
