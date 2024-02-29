import {makeAutoObservable} from 'mobx';
import {IGetRates} from '../../api/rates/IRates';

import ratesRepository from '../../api/rates/Rates';

export default class RatesStore {
  rates: IGetRates | null = null;
  error: string = '';
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRates() {
    try {
      this.isLoading = true;
      this.error = '';
      this.rates = await ratesRepository.getRates();
    } catch (error) {
      this.error = 'Failed to fetch rates';
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }
}
