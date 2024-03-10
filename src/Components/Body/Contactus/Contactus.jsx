import React from 'react'
import './Contactus.css'
// import Map from './Map'
const Contactus = () => {
  return (
    <div>
      <div className='contactimg'>
        <br /><br /><br /> <br /> <br />
        <h1 className='contactimgtext'>Contact us</h1>
      </div>
      <div className='contactcontainer'>
        <div className='containeritem contactform'>
          <h2 className='contactformhead'>Bussiness Enquiry? Catch up for tea?</h2>
          <input   type="text" placeholder='Name*' className='contactinpt'/><br />
          <input type="text" placeholder='Email*' className='contactinptmail'/>
          <input  type="number" placeholder='Phone*' className='contactinptmail'/><br />
          <input   type="text" placeholder='Please enter your query here...*' className='contactinpt'/><br />
          <div className='contactbtnparent'>
          <button className='contactbtn' >SUBMIT</button>
          </div>
        </div>
        <div className='containeritem contactparent'>
          <div className='contactchild'>
            <h2>Address</h2>
            <p>CB studio opp. to Lake view extension, Dammaiguda, kapra, medchal-malkajgiri, Hyderabad.</p>
            <div className='adresscontainer'>
              <div className='adressitem'>
                <img src="https://ongrid.in/images/businessInquiries.svg" alt="not found" /> <p>630 490 8756</p>
              </div>
              <div className='adressitem'>
                <img src="https://ongrid.in/images/businessInquiries.svg" alt="not found" /> <p> Business Inquiries - cbphotopactory@gmail.com</p>
              </div>
              
            </div>
          </div>
          <div className='contactchild mapbox'>
            {/* <Map/> */}
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Contactus