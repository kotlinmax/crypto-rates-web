import React from 'react';
import s from './RateItem.module.scss';

import {RateItemProps} from './IRateItem';
import {useNavigate} from 'react-router-dom';

const RateItem: React.FC<RateItemProps> = props => {
  const {baseCurrency, targetCurrency, rate, diff24h} = props;
  const navigate = useNavigate();
  const url = `/rates/${baseCurrency}-${targetCurrency}`;

  // prettier-ignore
  return (
    <button 
      className={s.rateItem}  
      aria-label='Open info rate' 
      title='Open info rate'
      onClick={() => navigate(url, {state: props})}
    >
      <div className={s.header}>
        <span>{baseCurrency.toUpperCase()}</span>/<span>{targetCurrency.toUpperCase()}</span>
      </div>
      <div className={s.body}>
        <span>Rate: {rate.toFixed(6)}</span>
        <span className={diff24h >= 0 ? 'positive' : 'negative'}>
          24h Change: {(diff24h).toFixed(6)}
        </span>
      </div>
    </button>
  );
};

export default React.memo(RateItem);
