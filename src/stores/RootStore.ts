import React from 'react';
import RatesStore from './RatesStore/RateStore';

class RootStore {
  ratesStore: RatesStore;
  constructor() {
    this.ratesStore = new RatesStore();
  }
}

export const rootStore = new RootStore();
export const StoresContext = React.createContext(rootStore);
