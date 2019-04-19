import styled from "styled-components";

// Component wrapper
const DescriptionStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Paragraph that displays the description
const DescriptionText = styled.p``;

// Wrapper for social
const DescriptionSocial = styled.div`
  max-height: calc(var(--distance-value) * 3);
  display: flex;
`;

// Clickable link with child image
const SocialLink = styled.a`
  display: block;
  &:not(:last-child) {
    margin-right: var(--distance-value);
  }
`;

// Icon to be displayed
const SocialImage = styled.img`
  object-fit: contain;
  max-height: calc(var(--distance-value) * 3);
`;

export {
  DescriptionStyles,
  DescriptionText,
  DescriptionSocial,
  SocialLink,
  SocialImage
};
