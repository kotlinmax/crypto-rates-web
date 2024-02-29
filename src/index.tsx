import React, {Suspense, lazy} from 'react';
import ErrorBoundary from './pages/ErrorBoundary/ErrorBoundary';

import {StoresContext, rootStore} from './stores/RootStore';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './styles/normalize.scss';
import './styles/reset.scss';
import './index.scss';
import Loader from './components/Loader/Loader';
import HomePage from './pages/Home/HomePage';

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
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/rates' element={<RateListPage />} />
              <Route path='/rates/:name' element={<RateInfoPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </StoresContext.Provider>
  </React.StrictMode>
);
