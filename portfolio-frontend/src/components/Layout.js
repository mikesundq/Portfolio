import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
//import elements..
import LayoutWrapper from "../elements/LayoutElements"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar/>
      
      {children}
      <Footer/>
    </LayoutWrapper>
  )
}

export default Layout
