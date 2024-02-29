interface Rate {
  baseCurrency: string;
  targetCurrency: string;
  rate: number;
  ask: number;
  bid: number;
  diff24h: number;
}

export interface RateItemListProps {
  rates: Rate[];
}
