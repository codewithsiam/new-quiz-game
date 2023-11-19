import React from 'react';
import { HStack } from '@/components/shared/AppStyles/AppStyles';
import AuthStatus from '@/components/custom/AuthStatus/AuthStatus';
import { Heading3 } from '@/components/base/Typography/Typography';

const Header = () => {
  return (
    <header style={{ padding: '0.5rem 2rem', backgroundColor: '#CCE2FF' }}>
      <HStack.fullFlex style={{ height: '60px', alignItems: 'center' }}>
        <HStack.rowg1 style={{ alignItems: 'center' }}>
          <Heading3>Quiz Game</Heading3>
        </HStack.rowg1>
        <HStack.rowg1>
          <AuthStatus />
        </HStack.rowg1>
      </HStack.fullFlex>
    </header>
  );
};

export default Header;
