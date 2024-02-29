import API from '../../api';

import {makeAutoObservable} from 'mobx';
import {RateDetail} from '../../api/rates/IRatesAPI';

export default class RatesStore {
  tag: string = 'RatesStore';
  rates: RateDetail[] = [];
  error: string = '';
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRates() {
    try {
      this.isLoading = true;
      this.error = '';
      this.rates = await API.rates.getRates();
    } catch (error) {
      this.error = 'Failed to fetch rates';
      console.error(`[${this.tag}] fetchRates: `, error);
    } finally {
      this.isLoading = false;
    }
  }
}
