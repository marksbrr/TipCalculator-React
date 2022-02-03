import { FC } from 'react';
import './bill.scss';

interface BillProps {
  billAmount: number;
  setBillAmount: (num: number) => void;
}

const Bill: FC<BillProps> = ({ billAmount, setBillAmount }) => (
  <>
    <input
      type="number"
      className="bill-input"
      placeholder="$0.00"
      value={billAmount}
      onChange={(e) => setBillAmount(+e.target.value)}
    />
  </>
);

export default Bill;
