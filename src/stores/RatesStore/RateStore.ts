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
  isSearching: boolean = false;
  isSorting: boolean = false;
  isDesc: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRates() {
    try {
      this.isLoading = true;
      this.error = '';
      this.rates = await API.rates.getRates();
      this.rates.sort((a, b) => a.baseCurrency.localeCompare(b.baseCurrency));
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

  setIsSearching(value: boolean) {
    this.isSearching = value;
  }

  setIsSorting(value: boolean) {
    this.isSorting = value;
  }

  setSearchText(value: string) {
    this.searchText = value;
  }

  changeSort() {
    this.isDesc = !this.isDesc;

    const comparator = (a: RateDetail, b: RateDetail) => {
      const ac = a.baseCurrency;
      const bc = b.baseCurrency;
      return this.isDesc ? bc.localeCompare(ac) : ac.localeCompare(bc);
    };

    this.rates.sort(comparator);
    this.filteredRates.sort(comparator);
  }

  get isEmpty(): Boolean {
    return Boolean(this.searchText && !this.filteredRates.length);
  }
}
