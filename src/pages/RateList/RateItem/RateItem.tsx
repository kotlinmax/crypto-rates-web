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
    <button className={s.rateItem} onClick={() => navigate(url)}>
      <div className={s.header}>
        <span>{baseCurrency.toUpperCase()}</span>/<span>{targetCurrency.toUpperCase()}</span>
      </div>
      <div className={s.body}>
        <div>Rate: {rate.toFixed(6)}</div>
        <div className={diff24h >= 0 ? s.positive : s.negative}>
          24h Change: {(diff24h * 100).toFixed(2)}%
        </div>
      </div>
    </button>
  );
};

export default React.memo(RateItem);
