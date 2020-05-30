import React from 'react';
import { Helmet } from 'react-helmet';

const App: React.FC<{ element: React.ReactNode }> = ({ element }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    {element}
  </>
);

export default App;
