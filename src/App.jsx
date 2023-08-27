import React from "react"
import Home from "./Home"
import About from "./About"
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route  } from "react-router-dom"
import Layout from "./components/Layout"
import Projects from "./Projects"
import Contact from "./Contact"

function App() {
  
  const router =  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
      <Route index element= {<Home/>}/>
      <Route path="about" element = {<About/>}/>
      <Route path="projects" element = {<Projects/>}/>
      <Route path="contact" element = {<Contact/>}/>
    </Route>
  ))
  return (

    <RouterProvider router={router}/>
  )
}

export default App
