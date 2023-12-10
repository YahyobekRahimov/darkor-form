import './SubmitButton.scss';

export default function SubmitButton(props) {
  const {handleSubmit} = props;
  return (
    <button type='button' onClick={handleSubmit} className='Submit-button'>
        Davom etish
    </button>
  )
}
