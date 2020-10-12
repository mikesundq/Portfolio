import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import {LogoImg, NavbarWrapper, NavCenter, NavHeader, ToggleButton} from "../elements"

const Navbar = ({ toggleSidebar, isOpen }) => {
  return (
    <NavbarWrapper>
      <NavCenter>
        <NavHeader>
          <LogoImg src={logo} alt="logo"/>
          <ToggleButton onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </ToggleButton>
        </NavHeader>
          <PageLinks sidebar={isOpen}></PageLinks>
      </NavCenter>
    </NavbarWrapper>
  )
}
export default Navbar
