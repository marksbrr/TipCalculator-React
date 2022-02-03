import { FC } from 'react';
import './peopleinput.scss';

interface PeopleInputProps {
  numberOfPeople: number;
  setNumberOfPeople: (num: number) => void;
}

const PeopleInput: FC<PeopleInputProps> = ({ numberOfPeople, setNumberOfPeople }) => (
  <>
    <input
      id="people-input-border"
      className="people-input"
      placeholder="$0.00"
      value={numberOfPeople}
      onChange={(e) => setNumberOfPeople(+e.target.value)}
    />
  </>
);

export default PeopleInput;
