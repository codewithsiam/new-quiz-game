import React, { createContext, useContext, useEffect, useState } from 'react';
import { fakeAuthProvider } from '@/lib/utils/Auth';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isSignedIn = () => {
    if (fakeAuthProvider.hasAccess) setUser(fakeAuthProvider.hasAccess);
  };

  const signin = (newUser, callback) => {
    return fakeAuthProvider.signin(newUser, () => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  useEffect(() => {
    isSignedIn();
  }, []);

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
