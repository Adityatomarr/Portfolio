import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div>
      <button className='mobile-nav-toggle' aria-controls='primary-navigation' aria-expanded='false '><span className='sr-only'>Menu</span></button>
      <nav>
        <ul id="primary-navigation" className="primary-navigation flex underline-indicators">
          <li className='text-white fs-500 ff-sans-cond letter-spacing-3'>
            <NavLink to="/" className={({isActive})=> isActive? "active" : "" } ><span>00</span>Home</NavLink>
          </li>
          <li className='text-white fs-500 ff-sans-cond letter-spacing-2'>
            <NavLink to="about" className={({isActive})=> isActive? "active" : "" } ><span>01</span>About</NavLink>
          </li>
          <li className='text-white fs-500 ff-sans-cond letter-spacing-2'>
            <NavLink to="/projects" className={({isActive})=> isActive? "active" : "" } ><span>02</span>Projects</NavLink>
          </li>
          <li className='text-white fs-500 ff-sans-cond letter-spacing-2'>
            <NavLink to="/contact" className={({isActive})=> isActive? "active" : "" } ><span>03</span>Contact</NavLink>
          </li>
      </ul>
      </nav>
      
    </div>
    
  )
}

export default Navbar