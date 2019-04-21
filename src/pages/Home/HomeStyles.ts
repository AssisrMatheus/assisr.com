import styled from "styled-components";

const ContentDivider = styled.div`
  display: flex;

  & :first-child {
    margin-right: var(--distance-value);
  }

  > :not(:first-child) {
    margin-left: var(--distance-value);
  }
`;

export { ContentDivider };
