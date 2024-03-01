import API from '../../api';

import {makeAutoObservable} from 'mobx';
import {RateDetail} from '../../api/rates/IRatesAPI';

export default class RatesStore {
  tag: string = 'RatesStore';
  error: string = '';
  searchText: string = '';
  rates: RateDetail[] = [];
  filteredRates: RateDetail[] = [];
  isLoading: boolean = false;
  isSearch: boolean = false;

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

  setFilteredRates(value: string) {
    this.filteredRates = this.rates.filter(rate => rate.baseCurrency.includes(value));
  }

  setIsSearch(value: boolean) {
    this.isSearch = value;
  }

  setSearchText(value: string) {
    this.searchText = value;
  }

  get isEmpty(): Boolean {
    return Boolean(this.searchText && !this.filteredRates.length);
  }
}
