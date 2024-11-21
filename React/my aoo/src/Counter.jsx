import { useEffect, useState } from 'react'
import './App.css'
const Counter=()=>{
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
   const double=()=>{
    setCount(count*2)
   }
   const half=()=>{
    setCount(count/2)
   }
   const square=()=>{
    setCount(count*count)
   }
  useEffect(()=>{
     setCount(count)
  },[count])
    return (

        <div className="">
      <p className='para'>{count}</p>
      <div className='flex'>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
      <button onClick={square}>Square</button>




      </div>
     </div>
    )
}
export default Counter;