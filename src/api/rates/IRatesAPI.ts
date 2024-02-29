export interface IGetRates {
  [key: string]: {
    [key: string]: {
      rate: number;
      ask: number;
      bid: number;
      diff24h: number;
    };
  };
}

export interface RateDetail {
  baseCurrency: string;
  targetCurrency: string;
  rate: number;
  ask: number;
  bid: number;
  diff24h: number;
}

export interface IRatesAPI {
  getRates: () => Promise<RateDetail[]>;
}
