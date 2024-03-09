import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import fb from './socialmedia/facebook.png'
import insta from './socialmedia/instagram.png'
import linkedin from './socialmedia/linkedin.png'
import twitter from './socialmedia/twitter.png'
const Footer = () => {
  return (
    <div >
      <div className='footer'>
      <div className='footcont'>
        <h2>Connect with us</h2>
        <div>
          <a href="https://www.facebook.com/"><img src={fb} alt="notfound" /></a>
          <a href="https://www.linkedin.com/feed/"><img src={linkedin} alt="not found" /></a>
          <a href="https://www.instagram.com/__praveen.raj__"><img src={insta} alt="not found" /></a>
          <a href="https://twitter.com/"><img src={twitter} alt="not found" /></a>
        </div>
      </div>
      <div>
        <h2>CB studio</h2>
        <p><Link to='/aboutus'>About Us</Link></p>
        <p><Link to='/contactus'>Contact Us</Link></p>
        <p>Terms&Conditions</p>
        <p>Our Blog</p>
      </div>
      </div>
      <hr />
      <p>@2024 CB Studio - “The earth is art, the photographer is only a witness.”</p>
    </div>
  )
}

export default Footer