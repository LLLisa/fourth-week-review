import React from 'react';
import { Schools, Users, UserDetail, EditSchool } from '../components';

const views = [
  { path: 'users', element: <Users /> },
  { path: 'users/:id', element: <UserDetail /> },
  { path: 'schools', element: <Schools />, children: [EditSchool] },
];

export default views;
