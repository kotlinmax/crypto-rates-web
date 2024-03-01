import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import RateItemList from './RateItemList';

import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

const mockRates = [
  {baseCurrency: 'btc', targetCurrency: 'usd', rate: 20000, ask: 20010, bid: 19990, diff24h: 0.05},
  {baseCurrency: 'eth', targetCurrency: 'usdt', rate: 30000, ask: 30010, bid: 29990, diff24h: 1.05},
];

describe('RateItemList', () => {
  it('renders list of rate items', () => {
    render(<RateItemList rates={mockRates} isDesc={false} />, {wrapper: BrowserRouter});

    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('Rate: 20000.000000')).toBeInTheDocument();
    expect(screen.getByText('24h Change: 0.050000')).toBeInTheDocument();

    expect(screen.getByText('ETH')).toBeInTheDocument();
    expect(screen.getByText('USDT')).toBeInTheDocument();
    expect(screen.getByText('Rate: 30000.000000')).toBeInTheDocument();
    expect(screen.getByText('24h Change: 1.050000')).toBeInTheDocument();
  });
});
