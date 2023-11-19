import React from 'react';
import { PageContainer } from '@/components/shared/AppStyles/AppStyles';
import GameContainer from '@/containers/GameContainer/GameContainer';


const HomePage = () => {
  return (
    <PageContainer>
     <GameContainer />
    </PageContainer>
  );
};

export default HomePage;
