import React from "react";
import { FormattedMessage } from "react-intl";
import { AppState } from "../../redux/reducers";
import Flex from "../../styles/Flex";
import { Text } from "../../styles/Text";
import IActivity from "./../../interfaces/IActivity";
import Container from "./../../styles/Container";
import ActivityComponent from "./Activity/ActivityComponent";
import { ActivityListStyles } from "./ActivityListStyles";

interface IActivityListComponent {
  activityList: IActivity[];
  fetching: boolean;
  theme: AppState["theme"]["theme"];
}

const ActivityListComponent = (props: IActivityListComponent) => (
  <ActivityListStyles>
    <Container>
      {props.theme === "nes" ? (
        <>
          <p className="title">
            <FormattedMessage
              id="activity"
              description="Activities header title"
            />
          </p>
          <p>
            <FormattedMessage
              id="activityFetchSubtitle"
              description="Activities subtitle"
            />
          </p>
        </>
      ) : (
        <Flex marginBottom align={"baseline"}>
          <Text title light italic>
            <FormattedMessage
              id="activity"
              description="Activities header title"
            />
          </Text>
          <Text marginLeft={0.4} light>
            <FormattedMessage
              id="activityFetchSubtitle"
              description="Activities subtitle"
            />
          </Text>
        </Flex>
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
  </ActivityListStyles>
);

export default ActivityListComponent;
