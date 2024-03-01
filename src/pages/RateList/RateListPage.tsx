import React, {useContext, useEffect, useTransition, ChangeEvent, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {StoresContext} from '../../stores/RootStore';
import {debounce} from 'lodash';

import s from './RateListPage.module.scss';
import RateItemList from './RateItemList/RateItemList';
import LoaderErrorLayout from '../../layouts/LoaderError/LoaderErrorLayout';

const RateListPage: React.FC = observer(() => {
  const ratesStore = useContext(StoresContext).ratesStore;
  const {rates, filteredRates, isEmpty, isLoading, isSearch, isDesc, isSorting} = ratesStore;
  const [isPending, startSearchingTransition] = useTransition();

  useEffect(() => {
    if (!ratesStore.rates.length) {
      ratesStore.fetchRates();
    }
  }, []);

  const debouncedSearch = debounce((text: string) => {
    startSearchingTransition(() => {
      ratesStore.setFilteredRates(text);
      ratesStore.setIsSearch(false);
    });
  }, 300);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    ratesStore.setIsSearch(true);
    ratesStore.setSearchText(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleSortChange = () => {
    ratesStore.setIsSorting(true);
    // для больших данных (1 млн.) используется setTimeout, что бы операция попала в очередь макротасок
    // и компонент смог сделать ререндер для отображения Sorting... и не завис
    setTimeout(() => {
      ratesStore.changeSort();
      ratesStore.setIsSorting(false);
    });
  };

  return (
    <main className={s.rateItemList}>
      <div className={s.top}>
        <button className={s.sort} onClick={handleSortChange}>
          Sort {isDesc ? '▼' : '▲'}
        </button>
        <input
          className={s.inputSearch}
          type='text'
          value={ratesStore.searchText}
          onChange={handleSearchChange}
          placeholder='Search by currency'
        />
      </div>

      {isSorting ? (
        <span className={s.info}> Sorting...</span>
      ) : isEmpty ? (
        <span className={s.info}> Not found rates</span>
      ) : isPending || isSearch ? (
        <span className={s.info}> Searching...</span>
      ) : (
        <LoaderErrorLayout isLoading={isLoading} error={ratesStore.error}>
          <RateItemList rates={filteredRates.length ? filteredRates : rates} isDesc={isDesc} />
        </LoaderErrorLayout>
      )}
    </main>
  );
});

export default RateListPage;
