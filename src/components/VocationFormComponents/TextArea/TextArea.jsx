import './TextArea.scss';
import Asterisk from '../../VocationForm/asterisk/Asteriks';

export default function TextArea(props) {
  const {id, label, placeholder, handleChange, isRequired} = props;
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
        onChange={() => handleChange(event)}
        required={isRequired}
        >{placeholder}</textarea>
    </label>
  )
}
