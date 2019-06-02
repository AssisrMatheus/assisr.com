import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { FormattedMessage, InjectedIntl, injectIntl } from "react-intl";
import IActivity from "../../../interfaces/IActivity";
import Flex from "../../../styles/Flex";
import { Text } from "../../../styles/Text";
import BeatSaberIcon from "../../Icons/BeatSaberIcon";
import { Activity, ActivityIcon, ActivityLink } from "./ActivityStyles";

const iconMap: any = {
  BeatSaber: () => <BeatSaberIcon />,
  GitHub: () => <FontAwesomeIcon size="2x" icon={faGithub} />,
  Youtube: () => <FontAwesomeIcon size="2x" icon={faYoutube} />,
  unknown: () => <FontAwesomeIcon size="2x" icon={faQuestionCircle} />
};

interface IActivityComponentProps extends IActivity {
  intl?: InjectedIntl;
}

const ActivityComponent = (props: IActivityComponentProps) => {
  let content: { actionType: string };
  if (props.content && props.content.actionType) {
    content = {
      ...props.content,
      actionType: props.intl
        ? props.intl.formatMessage({
            id: `${props.origin}.${props.content.actionType}`
          })
        : props.content.actionType
    };
  } else {
    content = {
      ...props.content,
      actionType: ""
    };
  }

  return (
    <Activity>
      <Flex marginVertical={0.5} align={"center"} content={"flex-start"}>
        <ActivityIcon>
          {iconMap[props.origin]() || iconMap.unknown()}
        </ActivityIcon>
        <Flex vertical marginLeft={0.3} align={"flex-start"} content={"center"}>
          <Text>
            <FormattedMessage
              id={`${props.origin}.${props.event}`}
              values={content as any}
              description="Activity message"
            />
          </Text>
          <ActivityLink href={props.url} target="_blank">
            <Text light italic>
              {moment(props.timestamp).fromNow()}
            </Text>
          </ActivityLink>
        </Flex>
      </Flex>
    </Activity>
  );
};

export default injectIntl(ActivityComponent);
