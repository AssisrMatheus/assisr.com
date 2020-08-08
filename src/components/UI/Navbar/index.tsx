import React from 'react';
import ThemeSwitcher from '../ThemeSwitcher';
import { Container } from '../Container';
import LanguageSwitcher from '../LanguageSwitcher';

// type NavbarProps = {};

// Ref: https://tailwindcss.com/components/navigation#responsive-header
const Navbar: React.FC = () => (
  <Container>
    <nav className="flex items-center justify-end space-x-8 my-6">
      <LanguageSwitcher />
      <ThemeSwitcher />
    </nav>
  </Container>
);

export default Navbar;
