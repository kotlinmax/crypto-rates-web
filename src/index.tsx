import './styles/normalize.scss';
import './styles/reset.scss';
import './styles/mixins.scss';
import './index.scss';

import React, {Suspense, lazy} from 'react';

import {StoresContext, rootStore} from './stores/RootStore';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import ErrorBoundary from './layouts/ErrorBoundary/ErrorBoundary';
import AppLayout from './layouts/AppLayout/AppLayout';
import Fallback from './components/Fallback/Fallback';

const RateListPage = lazy(() => import('./pages/RateList/RateListPage'));
const RateInfoPage = lazy(() => import('./pages/RateInfo/RateInfoPage'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <StoresContext.Provider value={rootStore}>
      <BrowserRouter>
        <ErrorBoundary>
          <AppLayout>
            <Suspense fallback={<Fallback />}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/rates' element={<RateListPage />} />
                <Route path='/rates/:name' element={<RateInfoPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </AppLayout>
        </ErrorBoundary>
      </BrowserRouter>
    </StoresContext.Provider>
  </React.StrictMode>
);
