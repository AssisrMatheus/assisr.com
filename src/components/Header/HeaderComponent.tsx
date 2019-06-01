import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AppState } from "../../redux/reducers";
import photo from "../../static/img/photo.jpg";
import Container from "../../styles/Container";
import Flex from "../../styles/Flex";
import { Text } from "../../styles/Text";
import LanguageSelectorContainer from "../LanguageSelector/LanguageSelectorContainer";
import ThemeSelectorContainer from "../ThemeSelector/ThemeSelectorContainer";
import {
  HeaderContent,
  HeaderDescription,
  HeaderImg,
  HeaderPhoto,
  HeaderSocial,
  HeaderStyles,
  HeaderTitle
} from "./HeaderStyles";

interface IHeaderComponentProps {
  theme: AppState["theme"]["theme"];
}

const Social = () => (
  <HeaderSocial marginTop align={"flex-end"} content={"space-between"}>
    <a
      href="https://github.com/assisrmatheus"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon size="2x" icon={faGithub} />
    </a>
    <a
      href="https://www.linkedin.com/in/assisrmatheus/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon size="2x" icon={faLinkedin} />
    </a>
  </HeaderSocial>
);

const Content = (props: IHeaderComponentProps) => (
  <Flex mobile align={"flex-start"} content={"space-between"}>
    <HeaderDescription>
      {props.theme !== "nes" && <HeaderTitle>Matheus Assis Rios_</HeaderTitle>}
      <div>
        Technologist in Systems for the Internet. With work experience on two
        big companies, Thomson Reuters and Stefanini, which gave me not only
        programming experience but also helped me to work with bigger projects.
        After these experiences, I wanted to try something different and
        accepted a new challenge in a Machine Learning startup, helping them get
        things out of the way and get it done. This got me versatile since I had
        to learn lots of new technologies, but I learned them quickly and always
        like to keep myself up to date, something that keeps my mind fresh and
        always looking for more things to tackle.
      </div>
      <Flex mobile content={"space-between"}>
        <Flex marginTop align={"center"}>
          <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} />
          <Text light marginLeft={0.5}>
            Juiz de fora - Minas Gerais. Brazil
          </Text>
        </Flex>
        {props.theme !== "nes" && <Social />}
      </Flex>
    </HeaderDescription>
    <HeaderPhoto>
      <HeaderImg src={photo} />
      {props.theme === "nes" && <Social />}
    </HeaderPhoto>
  </Flex>
);

const HeaderComponent = (props: IHeaderComponentProps) => (
  <HeaderStyles>
    <HeaderContent>
      <Container noPadding paddingHorizontal noNes>
        <Flex align={"center"} content={"flex-end"}>
          <LanguageSelectorContainer />
          <ThemeSelectorContainer />
        </Flex>
      </Container>
      <Container>
        {props.theme === "nes" && <p className="title">Matheus Assis Rios</p>}
        <Content theme={props.theme} />
      </Container>
    </HeaderContent>
  </HeaderStyles>
);

export default React.memo(HeaderComponent);
