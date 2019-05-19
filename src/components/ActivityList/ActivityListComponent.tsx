import React from "react";

// Interfaces
import IActivity from "./../../interfaces/IActivity";

// Components
import ActivityComponent from "./../Activity/ActivityComponent";

// Styles
import { ActivityTitle } from "./ActivityListStyles";

interface IActivityListComponent {
  activityList: IActivity[];
  fetching: boolean;
}

const ActivityListComponent = (props: IActivityListComponent) => (
  <React.Fragment>
    <ActivityTitle>Atividades</ActivityTitle>
    {props.fetching && <div>LOADING</div>}
    {props.activityList.map(item => (
      <ActivityComponent key={item.content} {...item} />
    ))}
  </React.Fragment>
);

export default ActivityListComponent;
