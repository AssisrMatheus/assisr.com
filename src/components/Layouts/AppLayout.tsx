import React from 'react';
import { Footer } from '../UI/Footer';
import Navbar from '../UI/Navbar';

export const AppLayout: React.FC = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
