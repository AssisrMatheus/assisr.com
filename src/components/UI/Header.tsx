import { Link } from 'gatsby';
import React from 'react';
import { useAppTheme } from '../wrappers/AppTheme';
import Container from './Container';

const Header: React.FC<{ siteTitle: string; siteDescription: string }> = ({
  siteTitle,
  siteDescription
}) => {
  const { setTheme } = useAppTheme();
  return (
    <Container>
      <Link to="/">
        <h1>{siteTitle}</h1>
        <p>{siteDescription}</p>
      </Link>
      <span>
        <span onClick={() => setTheme('light')}>light</span>
        <span> | </span>
        <span onClick={() => setTheme('dark')}>dark</span>
      </span>
    </Container>
  );
};

export default Header;
