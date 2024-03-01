export interface RateInfoPageProps {
  baseCurrency: string;
  targetCurrency: string;
  rate: number;
  ask: number;
  bid: number;
  diff24h: number;
}
