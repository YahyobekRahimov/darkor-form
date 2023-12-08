import Asterisk from "../../VocationForm/asterisk/Asteriks";
import "./SelectOption.scss";

export default function SelectOption(props) {
  const {options, id, name} = props;
  let mappedOptions = options.map((option, index) => {
    return <option key={index} value={option.value}>{option.title}</option>
  })
  return (
    <>
      <label htmlFor={id} className="select-label">
        <span>{name} <Asterisk /></span>
        <select className='choose' name="choose" id={id}>
          {mappedOptions}
        </select>
      </label>
    </>
  )
}
