import React from "react";

// Interfaces
import IActivity from "./../../interfaces/IActivity";

// Components
import ActivityComponent from "./../Activity/ActivityComponent";

// Styles
import { ActivityTitle } from "./ActivityListStyles";

interface IActivityListComponent {
  list: IActivity[];
  fetching: boolean;
}

const ActivityListComponent = (props: IActivityListComponent) => (
  <React.Fragment>
    <ActivityTitle>Atividades</ActivityTitle>
    {props.fetching ? (
      <div>LOADING</div>
    ) : (
      props.list.map(item => (
        <ActivityComponent
          key={item.content}
          content={item.content}
          origin={item.origin}
          url={item.url}
          date={item.timestamp.fromNow()}
        />
      ))
    )}
  </React.Fragment>
);

export default ActivityListComponent;
