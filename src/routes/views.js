import React from 'react';
import { Schools, Users, UserDetail } from '../components';

const views = [
  { path: 'users', element: <Users /> },
  {
    path: 'users/:id',
    element: <UserDetail />,
    loader: ({ params }) => params,
  },
  { path: 'schools', element: <Schools /> },
];

export default views;
