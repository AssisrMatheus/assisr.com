import React from 'react';
import { useAppTheme } from '../../Providers/AppThemeProvider';

const ThemeSwitcher: React.FC = () => {
  const { isDark, toggle } = useAppTheme();
  return (
    <button
      type="button"
      className="text-2xl transform transition-transform duration-75 ease-out hover:scale-125 focus:outline-none"
      onClick={toggle}
    >
      {isDark ? <>🌛</> : <>🌞</>}
    </button>
  );
};

export default ThemeSwitcher;
