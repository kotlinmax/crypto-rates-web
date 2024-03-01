import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import RateItem from './RateItem';

import {render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('RateItem', () => {
  const rateItemProps = {
    baseCurrency: 'btc',
    targetCurrency: 'usd',
    rate: 20000,
    diff24h: -0.05,
    ask: 20010,
    bid: 19990,
  };

  it('renders rate information', () => {
    render(<RateItem {...rateItemProps} />, {wrapper: BrowserRouter});

    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.getByText('Rate: 20000.000000')).toBeInTheDocument();
    expect(screen.getByText('24h Change: -0.050000')).toBeInTheDocument();
  });

  it('navigates on click', () => {
    render(<RateItem {...rateItemProps} />, {wrapper: BrowserRouter});
    fireEvent.click(screen.getByRole('button'));

    expect(mockNavigate).toHaveBeenCalledWith(`/rates/btc-usd`, {state: rateItemProps});
  });
});
