import React from "react";

// Dependencies
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import {
  Activity,
  ActivityLabel,
  ActivityLink,
  ActivityContent
} from "./ActivityStyles";

const iconMap: any = {
  github: faGithub
};

interface IActivityComponentProps {
  content: string;
  origin: string;
  date: string;
  url: string;
}

const ActivityComponent = (props: IActivityComponentProps) => {
  // TODO: Change link to be clicked only on timestamp
  // TODO: Add emoji support on content
  return (
    <Activity>
      <ActivityLink href={props.url}>
        <FontAwesomeIcon icon={iconMap[props.origin]} />
        <ActivityContent>
          {props.content}
          <ActivityLabel> - {props.date}</ActivityLabel>
        </ActivityContent>
      </ActivityLink>
    </Activity>
  );
};

export default ActivityComponent;
