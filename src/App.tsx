import { useState } from 'react'
import './App.css'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <div>sca {count}</div>
  )
}

export default App
