import React from 'react'

import "./Navbar.css"
import Logos from '../../Assets/Logo.png'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Navbar = () => {
  return (
    <div>

      <div className='container-fluid bg-primary topnav'>
        <div className='container'>
          <div className='contents row'>
            <div className='col-md-7'>
              <i className='fa fa-phone text-theme-colored'> 234 0945 575 565</i>&nbsp;&nbsp;
              <i className='fa fa-clock-o text-theme-colored'> Mon-Fri 8:00 to 2:00</i>&nbsp;&nbsp;
              <i className='fa fa-envelope-o text-theme-colored'> contact@yourdomain.com</i>
            </div>
            <div className='col-md-5'>
              <i className='fa fa-facebook'></i>
              <i className='fa fa-google-plus'></i>
              <i className='fa fa-instagram'></i>
              <i className='fa fa-twitter'></i>
            </div>
          </div>
        </div>
        <p className='close'>X</p>
      </div>
      <header>
      <div className="nav navbar-fixed-top">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
              <div className="nav-title">
                  <img className="brand" src={Logos} alt="Logo" />
              </div>
          </div>
          <div className="nav-btn">
              <label for="nav-check">
                  <span></span>
                  <span></span>
                  <span></span>
              </label>
          </div>
          <div className="nav-links navigationbar">
              <li >Home</li>
              <li id="#aboutUs">About</li>
              <li>What We Do</li>
              <li>Vision/Mission</li>
              <li>Contact Us</li>
              <li>
                  <button className="btn btn-warning donate">Volunteer</button>
              </li>
          </div>
      </div>
  </header>

  <main>
  <AwesomeSlider animation="cubeAnimation">
    <div data-src="/path/to/image-0.png" />
    <div data-src="./Assets/girl2.jpeg" />
    <div data-src="/path/to/image-2.jpg" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
  </main>
        
         
      
    </div>
  )
}

export default Navbar
