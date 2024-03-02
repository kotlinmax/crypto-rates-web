import React from 'react';
import RateItem from '../RateItem/RateItem';
import s from './RateItemList.module.scss';

import {RateItemListProps, RenderRowProps} from './IRateItemList';
import {FixedSizeList} from 'react-window';

const LIST_HEIGHT = window.innerHeight - 159;

const RateItemList: React.FC<RateItemListProps> = ({rates}) => {
  return (
    <FixedSizeList className={s.noScrollbar} height={LIST_HEIGHT} itemCount={rates.length} itemSize={90} width={'100%'}>
      {({index, style}: RenderRowProps) => {
        const rate = rates[index];
        return (
          <div style={{...style}} key={index}>
            <RateItem
              baseCurrency={rate.baseCurrency}
              targetCurrency={rate.targetCurrency}
              rate={rate.rate}
              ask={rate.ask}
              bid={rate.bid}
              diff24h={rate.diff24h}
            />
          </div>
        );
      }}
    </FixedSizeList>
  );
};

export default React.memo(RateItemList);
