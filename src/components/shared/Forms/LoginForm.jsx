// Login.js
import React, { useState } from 'react';
import { SubmitButton } from '@/components/base/FormButtons/FormButtons';
import { Label } from '@/components/base/Typography/Typography';
import { FormGroup, StyledFormInput, FormTitle, LoginWrapper, StyledCard } from '@/components/base/FormInput/FormInput';
import { useAuth } from '@/contexts/AuthContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signin } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    signin({ username, password }, () => {
      () => navigate('/');
    });
  };

  return (
    <LoginWrapper>
      <StyledCard onSubmit={handleLogin}>
        <FormTitle>Login</FormTitle>

        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <StyledFormInput
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <StyledFormInput
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>

        <SubmitButton type="submit">Login</SubmitButton>
      </StyledCard>
    </LoginWrapper>
  );
};

export default LoginForm;
