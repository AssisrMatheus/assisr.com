import styled from "styled-components";

const Activity = styled.div``;

const ActivityLink = styled.a`
  color: initial;
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  svg {
    margin-right: var(--distance-value);
    font-size: 1.5em;
    path {
      fill: var(--secondary);
    }
  }
`;

const ActivityContent = styled.p`
  cursor: pointer;
  color: var(--primary-text);
`;

const ActivityLabel = styled.span``;

export { Activity, ActivityLink, ActivityLabel, ActivityContent };
