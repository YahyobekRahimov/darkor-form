import "./Success.scss";
import SuccessImage from '../../images/success.svg?react';

export default function Success() {
  return (
    <div className="success-wrapper">
        <SuccessImage className='svg' />
        <button className="another-vacancy-form">Boshqa vakansiya yaratish</button>
    </div>
  )
}
