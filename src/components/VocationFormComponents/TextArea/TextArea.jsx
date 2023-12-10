import './TextArea.scss';
import Asterisk from '../../VocationForm/asterisk/Asteriks';

export default function TextArea(props) {
  const {id, label, placeholder, handleChange, isRequired, name, errorText} = props;
  return (
    <label className='text-label' htmlFor={id}>
      <span>
        {label}
        {isRequired ? Asterisk() : ''}
      </span>
       <textarea
       className='textarea-description'
        id={id} 
        cols="30" 
        rows="7"
        name={name}
        onChange={handleChange}
        required={isRequired}
        placeholder={placeholder}
        style={errorText.length ? {border: '1px solid red'} : {}}
        ></textarea>
        <span style={{color: 'red'}}>{errorText}</span>
    </label>
  )
}
