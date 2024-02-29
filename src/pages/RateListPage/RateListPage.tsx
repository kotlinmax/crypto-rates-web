import React, {useContext, useEffect} from 'react';

import s from './RateListPage.module.scss';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import {StoresContext} from '../../stores/RootStore';

const RateListPage: React.FC = observer(() => {
  const {ratesStore} = useContext(StoresContext);

  useEffect(() => {
    ratesStore.fetchRates();
  }, [ratesStore]);

  if (ratesStore.isLoading) return <div>Loading...</div>;
  if (ratesStore.error) return <div>Error: {ratesStore.error}</div>;

  return (
    <div>
      <pre>{JSON.stringify(ratesStore.rates, null, 2)}</pre>
    </div>
  );
});

export default RateListPage;
