import Asterisk from "../../VocationForm/asterisk/Asteriks";
import "./SelectOption.scss";

export default function SelectOption(props) {
  const {options, id, label, handleChange, name, errorText} = props;
  let mappedOptions = options.map((option, index) => {
    return <option key={index} value={option.value}>{option.title}</option>
  })
  mappedOptions.unshift(<option key={-1} defaultValue={true} >{label}ni tanlang </option>)
  return (
    <>
      <label htmlFor={id} className="select-label">
        <span>{label} <Asterisk /></span>
        <select 
          className='choose' 
          name={name} id={id} 
          onChange={handleChange} 
          style={errorText.length ? {border: '1px solid red'} : {}}>
          {mappedOptions}
        </select>
        <span style={{color: 'red'}}>{errorText}</span>
      </label>
    </>
  )
}
