import React, {useContext, useEffect} from 'react';
import s from './AppLayout.module.scss';

import {IAppLayoutProps} from './IAppLayout';
import {StoresContext} from '../../stores/RootStore';
import {observer} from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';

const AppLayout: React.FC<IAppLayoutProps> = observer(({children}) => {
  const ratesStore = useContext(StoresContext).ratesStore;
  const {rates, filteredRates, isNotFound} = ratesStore;

  useEffect(() => {
    document.getElementById('loading-screen')!.style.display = 'none';
  }, []);

  return (
    <div className={s.layout}>
      <header className={s.header}>Crypto Currency Rates</header>
      {children}
      <footer className={s.footer}>
        <span>TOTAL: {isNotFound ? 0 : filteredRates.length || rates.length}</span>
      </footer>
    </div>
  );
});

export default AppLayout;
