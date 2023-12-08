import Asterisk from '../../VocationForm/asterisk/Asteriks';
import './TextInput.scss';

export default function TextInput(props) {
  const {id, label, placeholder, handleChange, isRequired} = props;
  return (
    <label className='text-label' htmlFor={id}>
      <span>
        {label}
        {isRequired ? Asterisk() : ''}
      </span>
      <input
      className='text-input' 
      type="text" 
      placeholder={placeholder} 
      onChange={() => handleChange(event)}
      required={isRequired}
       />
    </label>
  )
}
