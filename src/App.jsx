import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import Button from './uiComponents/Button/Button';
import ContactForm from './uiComponents/ContactForm/ContactForm';
import ContactHeader from './uiComponents/ContactHeader/ContactHeader';
import Navigation from "./uiComponents/Navigation/Navigation";


function App() {
  const [count, setCount] = useState(0)
  
  return (
  <div className='container'>
    <Navigation />
    <ContactHeader />
    <ContactForm />
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
  </div> 
  )
}

export default App;
