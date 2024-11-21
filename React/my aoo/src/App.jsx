import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   const decreaseCount=()=>{
    setCount(count-1)
   }
   const increaseCount=()=>{
    setCount(count+1)
   }
   const reset=()=>{
    setCount(0)
   }
  return (
    <>
     <div className="increase">
      <p className='para'>{count}</p>
      <div className='flex'>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={reset}>Reset</button>

      </div>
     </div>
    </>
  )
}

export default App
