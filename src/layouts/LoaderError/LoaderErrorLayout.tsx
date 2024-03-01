import React from 'react';
import Loader from '../../components/Loader/Loader';
import s from './LoaderErrorLayout.module.scss';

import {ILoaderErrorLayoutProps} from './ILoaderErrorLayout';

const LoaderErrorLayout: React.FC<ILoaderErrorLayoutProps> = props => {
  const {isLoading, error, children} = props;

  if (isLoading) {
    return (
      <div className={s.layout}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.layout}>
        <div>Error: {error}</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default React.memo(LoaderErrorLayout);
