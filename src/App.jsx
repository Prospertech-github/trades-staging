import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default App
