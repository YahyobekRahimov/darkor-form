import { useEffect } from 'react';
import Asterisk from '../../VocationForm/asterisk/Asteriks';
import './TextInput.scss';

export default function TextInput(props) {
  const {id, label, placeholder, handleChange, isRequired, name, errorText} = props;
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
        onChange={handleChange}
        required={isRequired}
        name={name}
        style={errorText.length ? {border: '1px solid red'} : {}}
       />
       <span style={{color: 'red'}}>{errorText}</span>
    </label>
  )
}
