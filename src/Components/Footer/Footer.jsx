import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import fb from './socialmedia/facebook.png'
import insta from './socialmedia/instagram.png'
import linkedin from './socialmedia/linkedin.png'
import twitter from './socialmedia/twitter.png'
const Footer = () => {
  return (
    <div className='mainfoot' >
      <div className='footer'>
      <div className='footcont'>
        <h2>Connect with us</h2>
        <div>
          <a href="https://www.facebook.com/home"><img src={fb} alt="notfound" /></a>
          <a href="https://www.linkedin.com/feed/"><img src={linkedin} alt="not found" /></a>
          <a href="https://www.instagram.com/__praveen.raj__"><img src={insta} alt="not found" /></a>
          <a href="https://twitter.com/"><img src={twitter} alt="not found" /></a>
        </div>
      </div>
      <div>
        <h4>CB Photography</h4>
        <p><Link to='/aboutus' className='footlink'>About Us</Link></p>
        <p><Link to='/contactus' className='footlink'>Contact Us</Link></p>
        <p>Terms&Conditions</p>
        <p>Our Blog</p>
      </div>
      </div>
      <hr />
      <p>@2024 CB Photography - “The earth is art, the photographer is only a witness.”</p>
    </div>
  )
}

export default Footer