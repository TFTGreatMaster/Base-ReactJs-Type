import { useState } from 'react'
import { ViewA } from './views/view-a'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ViewA />
    </div>
  )
}

export default App
