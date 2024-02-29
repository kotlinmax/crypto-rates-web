import React from 'react';

import './RateListPage.css';
import {Link} from 'react-router-dom';

const RateListPage: React.FC = () => {
  return (
    <section>
      <Link to={'rates/eth'} state={{test: 'test'}}>
        Test
      </Link>
    </section>
  );
};

export default RateListPage;