import React, {useContext} from 'react';
import s from './HeaderFooterLayout.module.scss';

import {IHeaderFooterLayoutProps} from './IHeaderFooterLayout';
import {StoresContext} from '../../stores/RootStore';
import {observer} from 'mobx-react-lite';

const HeaderFooterLayout: React.FC<IHeaderFooterLayoutProps> = observer(({children}) => {
  const ratesStore = useContext(StoresContext).ratesStore;
  const {rates, filteredRates, isEmpty} = ratesStore;

  return (
    <div className={s.layout}>
      <header className={s.header}>Crypto Currency Rates App</header>
      {children}
      <footer className={s.footer}>{isEmpty ? 0 : filteredRates.length || rates.length}</footer>
    </div>
  );
});

export default HeaderFooterLayout;
