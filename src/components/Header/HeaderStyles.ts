import styled from "styled-components";
import Flex from "../../styles/Flex";
import helpers from "../../styles/helpers";

import stars from "../../static/img/starrs.webp";

const HeaderStyles = styled.div`
  position: relative;
  background-color: var(--primary-dark);
  padding-bottom: var(--distance-value);

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 2;
    filter: brightness(0.6) blur(4px);
    background: url(${stars}) center center / cover no-repeat;
  }
`;
const HeaderContent = styled.div`
  position: inherit;
  z-index: 3;
  height: 100%;
  width: 100%;
`;
const HeaderImg = styled.img`
  object-fit: contain;
  max-width: 350px;

  @media all and (max-width: 700px) {
    max-width: initial;
    width: 100%;
  }
`;
const HeaderTitle = styled.div<any>`
  font-family: NeonTubes, sans-serif;
  text-transform: uppercase;
  color: var(--primary-text);
  text-shadow: 0 0 40px var(--primary-text), 0 0 20px var(--primary-text);
  font-size: 3em;
  text-align: center;
  ${helpers}
`;
const HeaderDescription = styled.div<any>`
  flex: 2;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;

  margin-right: var(--distance-value);

  @media all and (max-width: 700px) {
    margin-right: 0;
    margin-bottom: var(--distance-value);
  }

  ${helpers}
`;
const HeaderPhoto = styled.div<any>`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: space-between;
  ${helpers}
`;
const HeaderSocial = styled(Flex)`
  > * {
    &:not(:last-child) {
      margin-right: calc(var(--distance-value) / 2);
    }
  }
  a {
    color: inherit;
  }

  ${(props: any) => (props.theme.isNes ? "justify-content: flex-end;" : "")}

  @media all (max-width: 700px) {
    justify-content: space-evenly;
  }
`;

export {
  HeaderStyles,
  HeaderSocial,
  HeaderContent,
  HeaderImg,
  HeaderTitle,
  HeaderDescription,
  HeaderPhoto
};
