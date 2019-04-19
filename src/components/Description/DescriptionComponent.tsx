import React, { Component } from "react";
import {
  DescriptionSocial,
  DescriptionStyles,
  DescriptionText,
  SocialImage,
  SocialLink
} from "./DescriptionStyles";

interface ISocialContainerProps {
  name: string;
  url: string;
  image: string;
}

interface IDescriptionComponentProps {
  description: string;
  social: ISocialContainerProps[];
}

const SocialContainer = (props: ISocialContainerProps) => (
  <SocialLink href={props.url} target="_blank">
    <SocialImage src={props.image} />
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
