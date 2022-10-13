import React from 'react';
import Menu from '../components/Menu';
import views from './views';

const menu = {
  path: '/',
  element: <Menu />,
  children: views,
};

export default menu;
