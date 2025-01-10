import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/services' element={<Services />} />
    </Routes>
  )
}

export default App
