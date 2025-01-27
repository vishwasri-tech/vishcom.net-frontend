import React from 'react'
import './Contactus.css';
import From from './Form.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';
function Contactus() {
  return (
    <div>
      
      
      <div className='bot '>

        <div className='pen'>
          <div className='ele'>
            <h1 ><b>We’re Here For You</b></h1>
            <p  >At Vishwasri Technologies, your success is our priority. Reach out to us anytime—our team is here to guide and support.</p>
          </div>


        </div>
        <div className='got' >
          <Link to="/home" className='ten' >Home</Link>
          <Link to="/services" className='ten'>Services</Link>
          <Link to="/aboutus" className='ten'>AboutUs</Link>
          <Link to="/contactus" className='ten'>ContactUs</Link>



        </div>

      </div>
      <div>
        <From/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Contactus