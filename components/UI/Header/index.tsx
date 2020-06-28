/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useAppTheme } from '../../Providers/AppThemeProvider';
import { Container } from '../Container';
import { Flex } from '../Flex';
import { Spacing } from '../Spacing';
import { HeaderOne, Paragraph } from '../Typography';

export const Header: React.FC = () => {
  const { enable, disable } = useAppTheme();
  return (
    <Container>
      <Spacing marginTop marginBottom="sp128">
        <Flex alignItems="center" justifyContent="flex-end">
          <span>
            <span onClick={disable}>light</span>
            <span> | </span>
            <span onClick={enable}>dark</span>
          </span>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" gap>
          <div>photo of me</div>
          <div>
            <HeaderOne>Matheus Assis Rios</HeaderOne>
            <Paragraph>
              Technologist in Systems for the Internet. With work experience on
              two big companies, Thomson Reuters and Stefanini, which gave me
              not only programming experience but also helped me to work with
              bigger projects. After these experiences, I wanted to try
              something different and accepted a new challenge in a Machine
              Learning startup, helping them get things out of the way and get
              it done. This got me versatile since I had to learn lots of new
              technologies, but I learned them quickly and always like to keep
              myself up to date, something that keeps my mind fresh and always
              looking for more things to tackle.
            </Paragraph>
          </div>
        </Flex>
      </Spacing>
      {/* <Link to="/">
        <h1>{siteTitle}</h1>
        <p>{siteDescription}</p>
      </Link> */}
    </Container>
  );
};
