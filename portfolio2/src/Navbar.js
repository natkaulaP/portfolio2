import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Urszula</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style= {{listStyleType:'none'}}>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Portfolio</li> 
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar