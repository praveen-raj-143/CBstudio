import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='brand'>
            <div className='logo'></div>
            <h1 className='title'>Studio</h1>
        </div>
        <div className='navitems'>
            <ul>
                <li><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Home</NavLink></li>
                <li><NavLink to='/contactus' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>Contact Us</NavLink></li>
                {/* <li><NavLink to='/aboutus' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>About Us</NavLink></li> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar