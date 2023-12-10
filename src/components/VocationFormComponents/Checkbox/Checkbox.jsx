import './Checkbox.scss';

export default function Checkbox(props) {
  const {id, title, name, handleChange} = props;
  return (
      <div className="checkbox-container">
        <input type="checkbox" id={id} name={name} onChange={handleChange} />
        <label htmlFor={id}>
          <span>Kelishiladi</span>
        </label>
      </div>
  )
}
