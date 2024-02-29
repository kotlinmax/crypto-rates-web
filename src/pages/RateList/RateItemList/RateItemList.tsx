import React from 'react';
import RateItem from '../RateItem/RateItem';
import {RateItemListProps} from './IRateItemList';

const RateItemList: React.FC<RateItemListProps> = ({rates}) => {
  return (
    <>
      {rates.map((rate) => (
        <RateItem
          key={`${rate.baseCurrency}-${rate.targetCurrency}`}
          baseCurrency={rate.baseCurrency}
          targetCurrency={rate.targetCurrency}
          rate={rate.rate}
          ask={rate.ask}
          bid={rate.bid}
          diff24h={rate.diff24h}
        />
      ))}
    </>
  );
};

export default React.memo(RateItemList);
