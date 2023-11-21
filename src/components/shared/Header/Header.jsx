import React from 'react';
import { HStack } from '@/components/shared/AppStyles/AppStyles';
import AuthStatus from '@/components/custom/AuthStatus/AuthStatus';
import { Heading2, StyledHeader } from '@/components/base/Typography/Typography';
import { Button } from '@/components/base/FormButtons/FormButtons';
import { useThemeContext } from '@/contexts/ThemeContext';
import darkThemeLogo from '/dark-theme-logo.svg';
import lightThemeLogo from '/public/light-theme-logo.svg';
import defaultThemeLogo from '/public/default-theme-logo.svg';

const Header = () => {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <StyledHeader>
      <HStack.fullFlex style={{ height: '60px', alignItems: 'center' }}>
        <HStack.rowg1 style={{ alignItems: 'center' }}>
          <Heading2>Quiz Game</Heading2>
        </HStack.rowg1>
        <HStack.rowg1>
          <Button onClick={toggleTheme}>
            <img style={{height: '12px'}} src={theme === "default" ? darkThemeLogo : theme === "dark" ? lightThemeLogo : defaultThemeLogo} alt="" />
          </Button>
          <AuthStatus />
        </HStack.rowg1>
      </HStack.fullFlex>
    </StyledHeader>
  );
};

export default Header;
