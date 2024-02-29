import React from 'react';
import s from './RateInfoPage.module.scss';

import {useLocation, useParams} from 'react-router-dom';

const RateInfoPage: React.FC = () => {
  const location = useLocation();
  console.log('location:', location);
  const params = useParams();
  console.log('params:', params);
  return <div> RateInfoPage </div>;
};

export default RateInfoPage;
