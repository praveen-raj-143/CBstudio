import React, { useState } from 'react'
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
            <p>WEDNESDAY, MARCH 13 2024</p>
            <button className='morebtn' onClick={morecontent}>VIEW GALLERY</button>
            <div className='contenttextt'>
            <p>Please click the following Button to watch live. <Link className='live' to="https://drive.google.com/drive/folders/1HxkdukxLs1ZoC4xfjQELHPLhN9wzhif3?usp=sharing"><button className='livebtn'>live</button></Link></p>
            <p>Click here to watch <Link className='live' to="https://drive.google.com/drive/folders/1HxkdukxLs1ZoC4xfjQELHPLhN9wzhif3?usp=sharing"><span>Live Photos</span></Link></p>
            </div>
            </div>
        </div>
        {click ? "" : <Morepics/>}
    </div>
  )
}

export default Content