// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App';
import Quiz from './components/Quiz';
// import Result from './components/Result';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/quiz',
    element: <Quiz />
  },
  // {
  //   path: '/result',
  //   element: <Result />
  // },
    {
    path: '/About',
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
