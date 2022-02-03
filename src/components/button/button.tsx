import { FC } from 'react';
import './button.scss';

interface Props {
  name: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ name, onClick }) => (

  <button
    className="button"
    onClick={onClick}
  >
    {`${name}%`}
  </button>
);

export default Button;
