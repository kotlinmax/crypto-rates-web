import React, {useContext} from 'react';
import s from './HeaderFooterLayout.module.scss';

import {IHeaderFooterLayoutProps} from './IHeaderFooterLayout';
import {StoresContext} from '../../stores/RootStore';
import {observer} from 'mobx-react-lite';
import {Link, useNavigate} from 'react-router-dom';

const HeaderFooterLayout: React.FC<IHeaderFooterLayoutProps> = observer(({children}) => {
  const ratesStore = useContext(StoresContext).ratesStore;
  const {rates, filteredRates, isEmpty} = ratesStore;
  const navigate = useNavigate();

  return (
    <div className={s.layout}>
      <header className={s.header}>Crypto Currency Rates App</header>
      {children}
      <footer className={s.footer}>
        <span>Total: {isEmpty ? 0 : filteredRates.length || rates.length}</span>
        <button onClick={() => navigate(-1)} className={s.backButton}>
          Back
        </button>
      </footer>
    </div>
  );
});

export default HeaderFooterLayout;
