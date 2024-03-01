import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import RateInfoPage from './RateInfoPage';

import {render, screen} from '@testing-library/react';
import {Route, MemoryRouter, Routes} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    name: 'btc-usd',
  }),
  useLocation: () => ({
    params: {name: 'btc-usd'},
    state: {
      baseCurrency: 'BTC',
      targetCurrency: 'USD',
      rate: 20000,
      diff24h: -5.0,
      ask: 20010,
      bid: 19990,
    },
  }),
}));

describe('RateInfoPage', () => {
  it('renders rate information', () => {
    render(
      <MemoryRouter initialEntries={['/rates/btc-usd']}>
        <Routes>
          <Route path='/rates/:name' element={<RateInfoPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('1 BTC = 20000.000000 USD')).toBeInTheDocument();
    expect(screen.getByText('RATE 20000.000000')).toBeInTheDocument();
    expect(screen.getByText('24H DIFF -5.000000')).toBeInTheDocument();
    expect(screen.getByText('ASK 20010.000000')).toBeInTheDocument();
    expect(screen.getByText('BID 19990.000000')).toBeInTheDocument();
  });
});
