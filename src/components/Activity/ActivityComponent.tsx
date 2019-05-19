import moment from "moment";
import React from "react";
import retext from "retext";
import emoji from "retext-emoji";

// Dependencies
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IActivity from "../../interfaces/IActivity";

// Styles
import {
  Activity,
  ActivityContent,
  ActivityLabel,
  ActivityLink
} from "./ActivityStyles";

const iconMap: any = {
  github: faGithub,
  youtube: faYoutube
};

const ActivityComponent = (props: IActivity) => {
  // TODO: Change link to be clicked only on timestamp
  // TODO: Add emoji support on content
  return (
    <Activity>
      <ActivityLink href={props.url} target="_blank">
        <FontAwesomeIcon icon={iconMap[props.origin] || faQuestionCircle} />
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
