import React from 'react';
import s from './Fallback.module.scss';
import Loader from '../Loader/Loader';

const Fallback = () => {
  return (
    <div className={s.wrap}>
      <div className={s.fallback}>
        <Loader />
      </div>
    </div>
  );
};

export default Fallback;
