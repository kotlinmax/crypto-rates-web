import React from 'react';

import './RateInfoPage.css';
import {useLocation, useParams} from 'react-router-dom';

const RateInfoPage: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  return <div> RateListPage </div>;
};

export default RateInfoPage;
