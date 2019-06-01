import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import retext from "retext";
import emoji from "retext-emoji";
import IActivity from "../../../interfaces/IActivity";
import Flex from "../../../styles/Flex";
import { Text } from "../../../styles/Text";
import BeatSaberIcon from "../../Icons/BeatSaberIcon";
import { Activity, ActivityIcon, ActivityLink } from "./ActivityStyles";

const iconMap: any = {
  beatSaber: () => <BeatSaberIcon />,
  github: () => <FontAwesomeIcon size="2x" icon={faGithub} />,
  unknown: () => <FontAwesomeIcon size="2x" icon={faQuestionCircle} />,
  youtube: () => <FontAwesomeIcon size="2x" icon={faYoutube} />
};

const ActivityComponent = (props: IActivity) => {
  return (
    <Activity>
      <Flex marginVertical={0.5} align={"center"} content={"flex-start"}>
        <ActivityIcon>
          {iconMap[props.origin]() || iconMap.unknown()}
        </ActivityIcon>
        <Flex vertical marginLeft={0.3} align={"flex-start"} content={"center"}>
          <Text>
            {retext()
              .use(emoji, { convert: "encode" })
              .processSync(props.content)
              .toString()}
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

export default ActivityComponent;
