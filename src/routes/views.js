import React from 'react';
import Schools from '../components/Schools';
import Users from '../components/Users';
import UserDetail from '../components/UserDetail';

const views = [
  { path: 'users', element: <Users /> },
  { path: 'users/:id', element: <UserDetail /> },
  { path: 'schools', element: <Schools /> },
];

export default views;
