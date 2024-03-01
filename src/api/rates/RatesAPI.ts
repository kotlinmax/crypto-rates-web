import {IGetRates} from './IRatesAPI';
import axios from 'axios';
import transformRatesData from './utils/transformRatesData';
import config from '../../config';

class RatesAPI {
  rateAPI = axios.create({
    baseURL: `https://${config.YOUHODLER_API}/rates`,
  });

  async getRates() {
    const response = await this.rateAPI.get<IGetRates>('/extended');
    const transformedData = transformRatesData(response.data);
    return transformedData;
  }
}

export default RatesAPI;
