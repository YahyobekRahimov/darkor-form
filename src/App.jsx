import './App.scss'
import Success from './components/Success/Success';
import VocationForm from './components/VocationForm/VocationForm'

function App() {
  return (
    <main className='main'>
      <div className='container form__container'>
        <VocationForm/> 
        <Success />
      </div>
    </main>
  )
}

export default App
