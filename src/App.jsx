import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] =useState('')

  let bmical=(e)=>{
    e.preventDefault();
    if(weight==0 || height==0){
      alert('Please enter a valid height and weight')
    }else{
      let bmi=(weight/(height*height)*703);
      setBmi(bmi.toFixed(1));
    }
    if(bmi<25){
      setMessage('You are underweight');
    }else if(bmi>=25 && bmi<30){
      setMessage("you are healthy");
    }else{
      setMessage('you are overweight');
    }
  }

  let reload=()=>{
    window.location.reload();
  }
  return (
    <>
      <div className='box'>
      
        <div className='form-box'>
        <div className='header'>
        <h1>BMI Calculator</h1>
        </div>
        <form onSubmit={bmical}>
            <div className='name-weight'>
            <label className='weight'>Weight (kg)</label>
              <input value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder='Weight'/>
            </div>
           
            <div className='name-height'>
            <label className='height'>Height (ft) </label>
              <input value={height} onChange={(e)=>setHeight(e.target.value)} placeholder='Height'/>
            </div>
            <div>
              <button className='btn-submit' type='submit'>Submit</button>
              <button className='btn-reload' onClick={reload} type='submit'>Reload</button>
            </div>
            
            <div>
              <h2 className='message'>The BMI is : {bmi}</h2>
              <p>{message}</p>
            </div>
            </form>
            
      </div>
      </div>
    </>
  )
}

export default App
