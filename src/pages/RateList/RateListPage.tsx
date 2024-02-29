import React, {useContext, useEffect} from 'react';

import s from './RateListPage.module.scss';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {StoresContext} from '../../stores/RootStore';
import RateItemList from './RateItemList/RateItemList';
import LoadingErrorLayout from '../../layouts/LoadingError/LoadingErrorLayout';

const RateListPage: React.FC = observer(() => {
  const ratesStore = useContext(StoresContext).ratesStore;

  useEffect(() => {
    if (!ratesStore.rates.length) {
      ratesStore.fetchRates();
    }
  }, []);

  return (
    <main className={s.rateItemList}>
      <LoadingErrorLayout isLoading={ratesStore.isLoading} error={ratesStore.error}>
        <RateItemList rates={ratesStore.rates} />
      </LoadingErrorLayout>
    </main>
  );
});

export default RateListPage;
