import { Link } from 'gatsby';
import React from 'react';

const Header: React.FC<{ siteTitle: string; siteDescription: string }> = ({
  siteTitle,
  siteDescription
}) => (
  <Link to="/">
    <h1>{siteTitle}</h1>
    <p>{siteDescription}</p>
  </Link>
);

export default Header;
