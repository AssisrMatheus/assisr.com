import styled from "styled-components";

const Activity = styled.div``;

const ActivityLink = styled.a`
  text-decoration: none;
`;

const ActivityIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    max-width: 32px;
    max-height: 32px;

    path {
      width: 32px;
      height: 32px;
      max-width: 32px;
      max-height: 32px;
    }
  }
`;

export { Activity, ActivityLink, ActivityIcon };
