import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Routerfile from './Routing/Routerfile'
const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <Routerfile/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default App