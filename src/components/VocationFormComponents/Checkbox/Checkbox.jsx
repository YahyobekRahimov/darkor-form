import './Checkbox.scss';

export default function Checkbox(props) {
  const {id, title} = props;
  return (
      <div className="checkbox-container">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>
          <span>Kelishiladi</span>
        </label>
      </div>
  )
}
