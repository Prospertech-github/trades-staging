import { useState } from 'react'
import './App.css'
import Contact  from './pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Contact />
    </>
  );
}

export default App;
