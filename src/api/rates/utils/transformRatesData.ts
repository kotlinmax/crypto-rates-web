import {IGetRates, RateDetail} from '../IRatesAPI';

function transformRatesData(rates: IGetRates): RateDetail[] {
  const transformed = [];
  const USD = 'usd'
  
  for (const baseCurrency in rates) {
    const target = rates[baseCurrency][USD];
    if (target) {
      transformed.push({
        baseCurrency, 
        targetCurrency: USD,
        rate: Number(target.rate),
        ask: Number(target.ask),
        bid: Number(target.bid),
        diff24h: Number(target.diff24h),
      });
    }
  }
  return transformed;
}

export default transformRatesData;
