import { FC } from 'react';
import './totals-reset.scss';

interface TotalResetProps {
  tip: number;
  total: number;
}

const TotalsReset:FC <TotalResetProps> = ({ tip, total }) => {
  const pageReset = () => {
    window.location.reload();
  };
  return (
    <div className="window">
      <div className="tip-container">
        <div className="tip-wrapper">
          <span className="window-first-text">Tip Amount</span>
          <p className="window-secondary-text"> / person</p>
        </div>
        <p className="window-third-text">{!tip ? '$0.00' : `$${tip}`}</p>
      </div>
      <div className="total-container">
        <div className="total-wrapper">
          <span className="window-first-text">Total</span>
          <p className="window-secondary-text"> / person</p>
        </div>
        <p className="window-third-text">{!total ? '$0.00' : `$${total}`}</p>
      </div>
      <div className="reset-wrapper">
        <button
          onClick={pageReset}
          className="reset-button"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default TotalsReset;
