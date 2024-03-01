import './styles/normalize.scss';
import './styles/reset.scss';
import './index.scss';

import React, {Suspense, lazy} from 'react';

import {StoresContext, rootStore} from './stores/RootStore';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Loader from './components/Loader/Loader';
import HomePage from './pages/Home/HomePage';
import ErrorBoundary from './layouts/ErrorBoundary/ErrorBoundary';
import HeaderFooterLayout from './layouts/HeaderFooter/HeaderFooterLayout';

const RateListPage = lazy(() => import('./pages/RateList/RateListPage'));
const RateInfoPage = lazy(() => import('./pages/RateInfo/RateInfoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));

const root = createRoot(document.getElementById('root')!);

// TODO filter search sort
// TODO test

root.render(
  <React.StrictMode>
    <StoresContext.Provider value={rootStore}>
      <BrowserRouter>
        <ErrorBoundary>
          <HeaderFooterLayout>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/rates' element={<RateListPage />} />
                <Route path='/rates/:name' element={<RateInfoPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </HeaderFooterLayout>
        </ErrorBoundary>
      </BrowserRouter>
    </StoresContext.Provider>
  </React.StrictMode>
);
