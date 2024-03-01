import RatesAPI from './rates/RatesAPI';

class API {
  rates = new RatesAPI();
}

const api = new API();

export default api;
