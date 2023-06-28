import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isLoggedIn, isAdmin, ...rest }) => {
  if (isLoggedIn && isAdmin) {
    return <Route {...rest} element={Element} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
