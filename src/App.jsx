import { useState } from 'react'
import './App.css'

export default function App() {
  let [counter, setCounter] = useState(0)
  function incrementHandler() {
    setCounter(counter+1);
  }
  function decrementHandler() {
    setCounter(counter-1);
  }
  function resetHandler() {
    setCounter(0);
  }
  return (
    <>
    <h1>Hello World!</h1>
         <h1>{counter}</h1>
         <button onClick={incrementHandler}>Increment</button>
         <button onClick={decrementHandler}>Decrement</button>
         <button onClick={resetHandler}>Reset</button>
    </>
  )
}
