import './NumberInput.scss';
import Asterisk from '../../VocationForm/asterisk/Asteriks';

export default function NumberInput(props) {
  const {id, label, placeholder, handleChange, isRequired} = props;
  return (
    <label className='number-label' htmlFor={id}>
      <span>
        {label}
        {isRequired ? Asterisk() : ''}
      </span>
      <input
      className='number-input' 
      type="number" 
      placeholder={placeholder} 
      onChange={() => handleChange(event)}
      required={isRequired}
       />
    </label>
  )
}