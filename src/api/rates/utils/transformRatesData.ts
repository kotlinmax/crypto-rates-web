import {IGetRates, RateDetail} from '../IRatesAPI';

function transformRatesData(rates: IGetRates): RateDetail[] {
  const transformed = [];
  for (const baseCurrency in rates) {
    const targets = rates[baseCurrency];
    for (const targetCurrency in targets) {
      const detail = {
        rate: Number(targets[targetCurrency].rate),
        ask: Number(targets[targetCurrency].ask),
        bid: Number(targets[targetCurrency].bid),
        diff24h: Number(targets[targetCurrency].diff24h),
      };
      transformed.push({baseCurrency, targetCurrency, ...detail});
    }
  }
  return transformed;
}

export default transformRatesData;
