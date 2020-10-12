import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import {
  SidebarWrap,
} from "../elements"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarWrap  isOpen={isOpen}>
      <button onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div>
        <Links sidebar={isOpen}/>
        <SocialLinks  linksStyle="sidebar" />
      </div>
    </SidebarWrap>
  )
}

export default Sidebar
