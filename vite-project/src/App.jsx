import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Addemployeee from './Addemployee'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <h1>Django crud app </h1>
      <Addemployeee />
    </div>
  )
}

export default App
