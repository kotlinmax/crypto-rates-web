import {CSSProperties} from 'react';

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

export interface RenderRowProps {
  index: number;
  style: CSSProperties;
}
