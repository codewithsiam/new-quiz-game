import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/base/FormButtons/FormButtons';
import { HStack, VStack } from '@/components/shared/AppStyles/AppStyles';

const AuthStatus = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    signout(() => navigate('/'));
  };

  return (
    <HStack.rowg1>
      {user ? (
        <Button onClick={handleLogOut}>Log Out</Button>
      ) : (
        <VStack.col>
            <Button onClick={handleLogin} >
              Login
          </Button>
        </VStack.col>
      )}
    </HStack.rowg1>
  );
};

export default AuthStatus;
