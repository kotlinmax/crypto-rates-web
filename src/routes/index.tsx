import {createBrowserRouter} from 'react-router-dom';

import RateListPage from '../pages/RateListPage/RateListPage';
import RateInfoPage from '../pages/RateInfoPage/RateInfoPage';

export default createBrowserRouter([
  {
    path: '/',
    element: <RateListPage />,
  },
  {
    path: '/rates/:name',
    element: <RateInfoPage />,
  },
]);
