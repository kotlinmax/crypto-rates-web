import React, {Suspense, lazy} from 'react';
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary';

import {StoresContext, rootStore} from './stores/RootStore';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './styles/normalize.scss';
import './styles/reset.scss';
import './index.scss';

// TODO react-window
// TODO test

const RateListPage = lazy(() => import('./pages/RateList/RateListPage'));
const RateInfoPage = lazy(() => import('./pages/RateInfo/RateInfoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <StoresContext.Provider value={rootStore}>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<RateListPage />} />
              <Route path='/rates/:name' element={<RateInfoPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </StoresContext.Provider>
  </React.StrictMode>
);
