import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar/Navbar'
import FrontEnd from './components/frontend/FrontEnd'
import Footer from './components/footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <FrontEnd />
    <Footer />
    </>
  )
}

export default App
