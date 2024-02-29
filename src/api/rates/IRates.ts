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

export interface IRatesRepository {
  getRates: () => Promise<IGetRates>;
}
