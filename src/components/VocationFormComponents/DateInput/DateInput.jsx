import Asterisk from '../../VocationForm/asterisk/Asteriks';
import './DateInput.scss';

export default function DateInput(props) {
  const {id, title, isRequired, placeholder, handleChange} = props;
  return (
    <label htmlFor={id} className='date-deadline'>
      <span>
        {title}
        {isRequired ? <Asterisk /> : ''}
      </span>
      <input 
      className='date-deadline-input'
      type="date" 
      name={placeholder} 
      id={id}
      placeholder={placeholder}
      required={isRequired}
      onChange={handleChange}
       />
    </label>
  )
}
