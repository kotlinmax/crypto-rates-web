import {IGetRates, RateDetail} from '../IRatesAPI';

function transformRatesData(rates: IGetRates): RateDetail[] {
  const transformed = [];
  for (const baseCurrency in rates) {
    const targets = rates[baseCurrency];
    for (const targetCurrency in targets) {
      const detail = targets[targetCurrency];
      transformed.push({baseCurrency, targetCurrency, ...detail});
    }
  }
  return transformed;
}

export default transformRatesData;
