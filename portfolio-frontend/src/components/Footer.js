import React from "react"
import SocialLinks from "../constants/socialLinks"
import {
  FooterWrap,
} from "../elements"

const Footer = () => {
  return (
    <FooterWrap>
      <div>
        <SocialLinks styleClass="footer-links" linksStyle="footer"></SocialLinks>
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>Mike Portfolio</span> | all rights reserved
        </h4>
      </div>
    </FooterWrap>
  )
}

export default Footer
