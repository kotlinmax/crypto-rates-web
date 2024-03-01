import React, {useContext, useEffect, useTransition} from 'react';
import {observer} from 'mobx-react-lite';
import {StoresContext} from '../../stores/RootStore';
import {debounce} from 'lodash';

import s from './RateListPage.module.scss';
import RateItemList from './RateItemList/RateItemList';
import LoaderErrorLayout from '../../layouts/LoaderError/LoaderErrorLayout';

const RateListPage: React.FC = observer(() => {
  const ratesStore = useContext(StoresContext).ratesStore;
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!ratesStore.rates.length) {
      ratesStore.fetchRates();
    }
  }, []);

  const debouncedSearch = debounce((text: string) => {
    startTransition(() => {
      ratesStore.setFilteredRates(text);
      ratesStore.setIsSearch(false);
    });
  }, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ratesStore.setIsSearch(true);
    ratesStore.setSearchText(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <main className={s.rateItemList}>
      <input
        className={s.inputSearch}
        type='text'
        value={ratesStore.searchText}
        onChange={handleSearchChange}
        placeholder='Search by currency'
      />
      {isPending || ratesStore.isSearch || ratesStore.isEmpty ? (
        <div className={s.info}> {isPending || ratesStore.isSearch ? 'Searching currency' : 'Not found rates'}</div>
      ) : (
        <LoaderErrorLayout isLoading={ratesStore.isLoading} error={ratesStore.error}>
          <RateItemList rates={ratesStore.filteredRates.length ? ratesStore.filteredRates : ratesStore.rates} />
        </LoaderErrorLayout>
      )}
    </main>
  );
});

export default RateListPage;
