import React from 'react';
import router from './routes';

import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import './styles/normalize.scss';
import './styles/reset.scss';
import './index.scss';

// TODO error boundary
// TODO react-window
// TODO scss
// TODO mobx
// TODO suspends

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
