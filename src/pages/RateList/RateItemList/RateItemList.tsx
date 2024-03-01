import React from 'react';
import RateItem from '../RateItem/RateItem';
import s from './RateItemList.module.scss';

import {RateItemListProps, RenderRowProps} from './IRateItemList';
import {FixedSizeList as List} from 'react-window';

const RateItemList: React.FC<RateItemListProps> = ({rates}) => {
  const headerFooterInputHeight = 180;
  return (
    <List
      height={window.innerHeight - headerFooterInputHeight}
      itemCount={rates.length}
      itemSize={90}
      width={'100%'}
      className={s.noScrollbar}
    >
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
    </List>
  );
};

export default React.memo(RateItemList);
