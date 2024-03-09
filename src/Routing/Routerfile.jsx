import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Components/Body/Home/Home'
import Contactus from '../Components/Body/Contactus/Contactus'
import Aboutus from '../Components/Body/Aboutus/Aboutus'
const Routerfile = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
    </Routes>
  )
}

export default Routerfile