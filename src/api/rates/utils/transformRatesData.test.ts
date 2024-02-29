import {IGetRates} from '../IRatesAPI';
import transformRatesData from './transformRatesData';

const mockRates: IGetRates = {
  USD: {
    EUR: {rate: 0.85, ask: 0.86, bid: 0.84, diff24h: -0.01},
    GBP: {rate: 0.75, ask: 0.76, bid: 0.74, diff24h: 0.02},
  },
};

describe('transformRatesData', () => {
  it('correctly transforms rates data into an array of rate details', () => {
    const expected = [
      {
        baseCurrency: 'USD',
        targetCurrency: 'EUR',
        rate: 0.85,
        ask: 0.86,
        bid: 0.84,
        diff24h: -0.01,
      },
      {
        baseCurrency: 'USD',
        targetCurrency: 'GBP',
        rate: 0.75,
        ask: 0.76,
        bid: 0.74,
        diff24h: 0.02,
      },
    ];

    const result = transformRatesData(mockRates);
    expect(result).toEqual(expected);
  });

  it('returns an empty array when given an empty object', () => {
    const result = transformRatesData({});
    expect(result).toEqual([]);
  });
});
