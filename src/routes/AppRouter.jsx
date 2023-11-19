import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '@/components/shared/Layout/Layout';
// import PrivateRoute from '@/routes/PrivateRoute';
import LoginPage from '@/pages/LoginPage/LoginPage';
import HomePage from '@/pages/HomePage/HomePage';
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={!!user ? <Navigate to="/" /> : <LoginPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
