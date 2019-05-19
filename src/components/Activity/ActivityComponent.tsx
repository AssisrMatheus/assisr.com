import moment from "moment";
import React from "react";
import retext from "retext";
import emoji from "retext-emoji";

// Dependencies
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IActivity from "../../interfaces/IActivity";

// Components
import BeatSaberIcon from "./../Icons/BeatSaberIcon";

// Styles
import {
  Activity,
  ActivityContent,
  ActivityIcon,
  ActivityLabel,
  ActivityLink
} from "./ActivityStyles";

const iconMap: any = {
  beatSaber: () => <BeatSaberIcon />,
  github: () => <FontAwesomeIcon icon={faGithub} />,
  unknown: () => <FontAwesomeIcon icon={faQuestionCircle} />,
  youtube: () => <FontAwesomeIcon icon={faYoutube} />
};

const ActivityComponent = (props: IActivity) => {
  // TODO: Change link to be clicked only on timestamp
  // TODO: Add emoji support on content
  return (
    <Activity>
      <ActivityLink href={props.url} target="_blank">
        <ActivityIcon>
          {iconMap[props.origin]() || iconMap.unknown()}
        </ActivityIcon>
        <ActivityContent>
          {retext()
            .use(emoji, { convert: "encode" })
            .processSync(props.content)
            .toString()}
          <ActivityLabel> - {moment(props.timestamp).fromNow()}</ActivityLabel>
        </ActivityContent>
      </ActivityLink>
    </Activity>
  );
};

export default ActivityComponent;
