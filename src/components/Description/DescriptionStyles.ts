import styled from "styled-components";

// Component wrapper
const DescriptionStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Paragraph that displays the description
const DescriptionText = styled.p`
  margin-top: 0;
`;

// Wrapper for social
const DescriptionSocial = styled.div`
  max-height: calc(var(--distance-value) * 3);
  display: flex;
`;

// Clickable link with child image
const SocialLink = styled.a`
  display: block;
  font-size: 2em;

  path {
    fill: var(--secondary);
  }

  &:visited {
    color: initial;
  }

  &:not(:last-child) {
    margin-right: var(--distance-value);
  }
`;

export { DescriptionStyles, DescriptionText, DescriptionSocial, SocialLink };
