import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Welcome from '../views/Welcome';
import Weather from '../views/Weather';
import MainRoute from '../views/MainRoute';

const router = createBrowserRouter([
  {
    element: <MainRoute />,
    children: [
      {
        path: '/',
        element: <Navigate to="/welcome" />,
      },
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/weather',
        element: <Weather />,
      },
    ],
  },
]);

export default router;
