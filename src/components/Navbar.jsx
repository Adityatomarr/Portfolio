import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className="primary-navigation flex underline-indicators">
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
  )
}

export default Navbar