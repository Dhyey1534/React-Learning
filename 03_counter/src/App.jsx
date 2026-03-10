import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    if(count >= 10) {
      alert('Count cannot be greater than 10')
      return
    }
    setCount(count + 1)
  }
  function handleDecrement() {
    if(count <= 0) {
      alert('Count cannot be less than 0')
      return
    }
    setCount(count - 1)
  }
  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
