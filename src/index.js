import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import store from './store';
import menu from './routes';
import { Menu } from './components';

// const router = createBrowserRouter([menu]);

ReactDOM.render(
  <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
    <Router>
      <Menu />
    </Router>
  </Provider>,
  document.querySelector('#root')
);
