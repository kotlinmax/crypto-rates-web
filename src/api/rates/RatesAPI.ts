import {IGetRates} from './IRatesAPI';
import axios from 'axios';
import transformRatesData from './utils/transformRatesData';

class RatesAPI {
  rateAPI = axios.create({
    baseURL: 'https://app.youhodler.com/api/v3/rates/', // TODO env
  });

  async getRates() {
    const response = await this.rateAPI.get<IGetRates>('extended');
    const transformedData = transformRatesData(response.data);
    return transformedData;
  }
}

export default RatesAPI;
