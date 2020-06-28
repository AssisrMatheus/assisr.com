/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Container } from '../Container';
import Navbar from '../Navbar';
import { HeaderOne, Paragraph } from '../Typography';

export const Header: React.FC = () => {
  return (
    <>
      <Navbar />
      <header className="mb-64">
        <Container>
          <div className="flex items-center justify-between space-x-4">
            <div>photo of me</div>
            <div>
              <HeaderOne>Matheus Assis Rios</HeaderOne>
              <Paragraph>
                Technologist in Systems for the Internet. With work experience
                on two big companies, Thomson Reuters and Stefanini, which gave
                me not only programming experience but also helped me to work
                with bigger projects. After these experiences, I wanted to try
                something different and accepted a new challenge in a Machine
                Learning startup, helping them get things out of the way and get
                it done. This got me versatile since I had to learn lots of new
                technologies, but I learned them quickly and always like to keep
                myself up to date, something that keeps my mind fresh and always
                looking for more things to tackle.
              </Paragraph>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
