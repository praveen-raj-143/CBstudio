import { useState } from 'react'
import React from 'react'
import './Content.css'
import Morepics from './Morepics/Morepics'
import { Link } from 'react-router-dom'

const Content = () => {
    const [click, setClick]=useState(true);

    const morecontent=()=>{
        setClick(!click)
    }
  return (
    <div className='contentmain'>
        <div className='contentimg'>
            <div className='contenttext'>
            <h1>Vamsi & Meghana</h1>
            <p className='subtitle'>WEDNESDAY, MARCH 13 2024</p>
            <div className='contimg'>
              
            </div>
            <div className='contenttextt'>
            <p>Please click the following Button to watch live. <Link className='live' to="https://drive.google.com/drive/folders/1HxkdukxLs1ZoC4xfjQELHPLhN9wzhif3?usp=sharing"><button className='livebtn'>Live</button></Link></p>
            <p><Link className='live' to="https://drive.google.com/drive/folders/1HxkdukxLs1ZoC4xfjQELHPLhN9wzhif3?usp=sharing">Click here to watch <span>Live Photos</span></Link></p>
            {/* <div className='threepics'>
              <div className='threepicschild childone'></div>
              <div className='threepicschild childtwo'></div>
              <div className='threepicschild childthree'></div>
            </div> */}
            <button className='morebtn' onClick={morecontent}>VIEW GALLERY</button>
            </div>
            
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {click ? "" : <Morepics/>}
    </div>
  )
}

export default Content