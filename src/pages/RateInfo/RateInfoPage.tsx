import React from 'react';
import s from './RateInfoPage.module.scss';
import NotFoundPage from '../NotFound/NotFoundPage';

import {useLocation, useNavigate} from 'react-router-dom';
import {RateInfoPageProps} from './IRateInfoPage';

const RateInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state: RateInfoPageProps = location.state;

  if (!state) return <NotFoundPage />;

  const {baseCurrency, targetCurrency, bid, ask, diff24h, rate} = state;

  const copyToClipboard = () => {
    const dataToCopy = `
      ${baseCurrency.toUpperCase()} / ${targetCurrency.toUpperCase()}
      RATE: ${rate.toFixed(6)}
      24H DIFF: ${diff24h.toFixed(6)}
      ASK: ${ask.toFixed(6)}
      BID: ${bid.toFixed(6)}
    `;

    navigator.clipboard
      .writeText(dataToCopy)
      .then(() => alert('Data copied to clipboard!'))
      .catch(e => alert(`Failed to copy data: ${e}`));
  };

  return (
    <div className={s.rateInfo}>
      <span className={s.title}>
        1 {baseCurrency.toUpperCase()} = {rate.toFixed(6)} {targetCurrency.toUpperCase()}
      </span>

      <button
        className={`${s.circle} ${s.rotate} ${diff24h >= 0 ? 'positive' : 'negative'}`}
        onClick={copyToClipboard}
        title='Copy to clipboard'
        aria-label='Copy to clipboard'
      >
        <span>RATE {rate.toFixed(6)}</span>
        <span>24H DIFF {diff24h.toFixed(6)}</span>
        <span>ASK {ask.toFixed(6)}</span>
        <span>BID {bid.toFixed(6)}</span>
      </button>

      <button onClick={() => navigate(-1)} className={s.backButton} title='Go back' aria-label='Go Back'>
        Go Back
      </button>
    </div>
  );
};

export default RateInfoPage;
