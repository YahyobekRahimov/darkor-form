import Asterisk from '../../VocationForm/asterisk/Asteriks';
import './DateInput.scss';

export default function DateInput(props) {
  const {id, title, isRequired, placeholder, handleChange, errorText, name} = props;
  return (
    <label htmlFor={id} className='date-deadline'>
      <span>
        {title}
        {isRequired ? <Asterisk /> : ''}
      </span>
      <input 
        className='date-deadline-input'
        type="date" 
        name={name} 
        id={id}
        placeholder={placeholder}
        required={isRequired}
        onChange={handleChange}
        style={errorText.length ? {border: '1px solid red'} : {}}
       />
       <span style={{color: 'red'}}>{errorText}</span>
    </label>
  )
}
