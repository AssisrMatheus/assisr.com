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
    <ActivityTitle>Activity</ActivityTitle>
    {props.fetching && <div>LOADING</div>}
    {props.activityList.map((item, i) => (
      <ActivityComponent key={`${item.content}-${i}`} {...item} />
    ))}
  </React.Fragment>
);

export default ActivityListComponent;
