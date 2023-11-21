import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTheme, storeTheme } from '@/lib/common/Theme';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
    const initialTheme = getTheme();
  const [theme, setTheme] = useState(initialTheme ||'default');

  const themes = {
    default: {
      primaryBgColor: '#028dce',
      secondaryBgColor: '#49c8ff',
      borderColor: '#000000',
      textColor: '#000000',
      buttonBgColor: '#4CAF50',
    },
    dark: {
      primaryBgColor: '#000',
      secondaryBgColor: '#202021',
      borderColor: '#000',
      textColor: '#fff',
      buttonBgColor: '#4CAF50',
    },
    light: {
      primaryBgColor: '#fff',
      secondaryBgColor: '#dfdfdf',
      borderColor: '#000',
      textColor: '#000',
      buttonBgColor: '#4CAF50',
    },
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'default' ? 'dark' : prevTheme === 'dark' ? 'light' : 'default';
    });
  };

  useEffect(() => {
    storeTheme(theme);
  }, [theme]);

  const currentTheme = themes[theme];
  const value = { theme, currentTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={currentTheme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useThemeContext };
