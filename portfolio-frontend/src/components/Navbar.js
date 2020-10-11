import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import {LogoImg, NavbarWrapper, NavCenter, NavHeader, ToggleButton} from "../elements"

const Navbar = ({ toggleSidebar }) => {
  return (
    <NavbarWrapper>
      <NavCenter>
        <NavHeader>
          <LogoImg src={logo} alt="logo"/>
          <ToggleButton onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </ToggleButton>
        </NavHeader>
        <PageLinks styleClass="nav-links"></PageLinks>
      </NavCenter>
    </NavbarWrapper>
  )
}
export default Navbar
