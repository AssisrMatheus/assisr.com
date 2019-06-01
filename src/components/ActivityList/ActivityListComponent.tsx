import React from "react";

// Locales
import { FormattedMessage } from "react-intl";

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
      <p className="title">
        <FormattedMessage id="activity" description="Activities header title" />
      </p>
    ) : (
      <ActivityTitle>
        <FormattedMessage id="activity" description="Activities header title" />
      </ActivityTitle>
    )}
    {props.fetching && (
      <div>
        <FormattedMessage id="loading" />
      </div>
    )}
    {props.activityList.map((item, i) => (
      <ActivityComponent key={`${item.content}-${i}`} {...item} />
    ))}
  </Container>
);

export default ActivityListComponent;
