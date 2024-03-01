import React from 'react';
import RatesStore from './RatesStore/RatesStore';

class RootStore {
  ratesStore: RatesStore;
  constructor() {
    this.ratesStore = new RatesStore();
  }
}

export const rootStore = new RootStore();
export const StoresContext = React.createContext(rootStore);
