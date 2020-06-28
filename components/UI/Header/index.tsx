/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useAppTheme } from '../../Providers/AppThemeProvider';
import { Container } from '../Container';

export const Header: React.FC = () => {
  const { enable, disable } = useAppTheme();
  return (
    <Container>
      <div className="mt-6 mb-64">
        <div className="flex items-center justify-end">
          <span>
            <span onClick={disable}>light</span>
            <span> | </span>
            <span onClick={enable}>dark</span>
          </span>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div>photo of me</div>
          <div>
            <h1 className="font-body">Matheus Assis Rios</h1>
            <p className="font-body">
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
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
