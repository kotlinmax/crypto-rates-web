import React from 'react';
import s from './NotFoundPage.module.scss'

const NotFoundPage: React.FC = () => {
  return (
    <div className={s.notFound}>
      <span> 404 </span>
      <span> Page not found </span>
    </div>
  );
};

export default NotFoundPage;
