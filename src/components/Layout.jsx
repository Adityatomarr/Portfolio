import React from 'react'
import Navbar from './Navbar'
import {Outlet,useLocation} from 'react-router-dom'



const Layout = () => {
  const location = useLocation().pathname;
  // console.log(location)
  return (
    <div className={location ==='/' ? "home-image layout" : "layout"}>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout