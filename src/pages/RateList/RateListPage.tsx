import React, {useContext, useEffect, ChangeEvent} from 'react';
import {observer} from 'mobx-react-lite';
import {StoresContext} from '../../stores/RootStore';
import {debounce} from 'lodash';

import s from './RateListPage.module.scss';
import RateItemList from './RateItemList/RateItemList';
import LoaderErrorLayout from '../../layouts/LoaderError/LoaderErrorLayout';

const RateListPage: React.FC = observer(() => {
  const store = useContext(StoresContext).ratesStore;
  const {rates, filteredRates, searchText, error} = store;
  const {isEmpty, isLoading, isSearching, isDesc, isSorting} = store;

  useEffect(() => {
    if (!store.rates.length) {
      store.fetchRates();
    }
  }, []);

  const debouncedSearch = debounce((text: string) => {
    store.setFilteredRates(text);
    store.setIsSearching(false);
  }, 300);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    store.setIsSearching(true);
    store.setSearchText(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleSortChange = () => {
    store.setIsSorting(true);
    setTimeout(() => {
      store.changeSort();
      store.setIsSorting(false);
    }, 0); // for big data (1 million)
  };

  return (
    <main className={s.rateItemList}>
      <div className={s.top}>
        <button className={s.sort} onClick={handleSortChange} title='Sort currency'>
          Sort {isDesc ? '▼' : '▲'}
        </button>
        <input
          className={s.inputSearch}
          type='text'
          value={searchText}
          onChange={handleSearchChange}
          placeholder='Search'
        />
      </div>

      {isSorting ? (
        <span className={s.info}> Sorting ...</span>
      ) : isSearching ? (
        <span className={s.info}> Searching ...</span>
      ) : isEmpty ? (
        <span className={s.info}> Not found rates.</span>
      ) : (
        <LoaderErrorLayout isLoading={isLoading} error={error}>
          <RateItemList rates={filteredRates.length ? filteredRates : rates} isDesc={isDesc} />
        </LoaderErrorLayout>
      )}
    </main>
  );
});

export default RateListPage;
