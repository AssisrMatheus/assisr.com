import React, { Component } from "react";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  DescriptionSocial,
  DescriptionStyles,
  DescriptionText,
  SocialLink
} from "./DescriptionStyles";

interface ISocialContainerProps {
  name: string;
  url: string;
  icon: string;
}

interface IDescriptionComponentProps {
  description: string;
  social: ISocialContainerProps[];
}

const SocialContainer = (props: ISocialContainerProps) => (
  <SocialLink href={props.url} target="_blank">
    <FontAwesomeIcon icon={fab[props.icon]} />
  </SocialLink>
);

const DescriptionComponent = (props: IDescriptionComponentProps) => (
  <DescriptionStyles>
    <DescriptionText>{props.description}</DescriptionText>
    <DescriptionSocial>
      {props.social.map(social => (
        <SocialContainer key={social.name} {...social} />
      ))}
    </DescriptionSocial>
  </DescriptionStyles>
);

export default DescriptionComponent;
