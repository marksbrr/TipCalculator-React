import { useEffect, useState } from 'react';
import './App.scss';
import Bill from './components/bill/bill';
import Button from './components/button/button';
import PeopleInput from './components/number of people/peopleinput';
import TotalsReset from './components/totals + reset/totals-reset';

const tipPercent = ['5', '10', '15', '25', '50'];

const App = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const numOfPeopleBorder = document.getElementById('people-input-border');

  const getPercentage = (value: number) => {
    if (!billAmount && !numberOfPeople && numOfPeopleBorder !== null) {
      numOfPeopleBorder.style.border = '2px solid red';
    } else {
      // @ts-ignore: Object is possibly 'null'.
      numOfPeopleBorder.style.border = '2px solid hsl(172, 67%, 45%)';
    }
    return setPercentage(value);
  };

  const tipPerPerson = () => {
    const res = (((billAmount * percentage) / 100) / numberOfPeople).toFixed(2);
    if (billAmount > 1 && !numberOfPeople && numOfPeopleBorder !== null) {
      numOfPeopleBorder.style.border = '2px solid red';
      return null;
    }
    setTip(+res);
  };

  const totalAmount = () => {
    const res = ((billAmount / numberOfPeople) + tip).toFixed(2);
    setTotal(+res);
  };

  useEffect(() => {
    setPercentage(percentage);
    tipPerPerson();
    totalAmount();
  }, [percentage, tip, total]);

  return (
    <section className="section">
      <div className="header-text-wrapper">
        <p className="header-text">SPLI</p>
        <p className="header-text">TTER</p>
      </div>
      <div className="container">
        <div className="wrapper">
          <p className="input-header">Bill</p>
          <Bill
            billAmount={billAmount}
            setBillAmount={setBillAmount}
          />
          <p className="input-header">Select Tip %</p>
          <div className="button-wrapper">
            {tipPercent.map((name) => (
              <Button
                key={name}
                name={name}
                onClick={() => {
                  getPercentage(+name);
                  tipPerPerson();
                  totalAmount();
                }}
              />
            ))}
            <input
              className="custom-input"
              type="number"
              placeholder="Custom"
              value={!customTip ? 'Custom' : customTip}
              onChange={(e) => {
                setCustomTip(+e.target.value);
              }}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  setPercentage(customTip);
                }
              }}
            />
          </div>
          <div className="people-input-wrapper">
            <p className="input-header">Number of People</p>
            {percentage && !numberOfPeople ? <p className="input-header-error">Can`t be zero</p> : ''}
          </div>
          <PeopleInput
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
          />
        </div>
        <TotalsReset
          tip={tip}
          total={total}
        />
      </div>
    </section>
  );
};

export default App;
