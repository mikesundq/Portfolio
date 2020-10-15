import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaStackOverflow,
  FaGithubSquare,
} from "react-icons/fa"
import { SocialLinksWrap } from "../elements"

const data = [
  {
    id: 1,
    icon: <FaStackOverflow></FaStackOverflow>,
    url: "https://stackoverflow.com/users/14450218/",
  },
  {
    id: 2,
    icon: <FaLinkedin></FaLinkedin>,
    url: "https://www.linkedin.com/in/mike-sundqvist/",
  },
  {
    id: 3,
    icon: <FaGithubSquare></FaGithubSquare>,
    url: "https://github.com/mikesundq",
  },
  {
    id: 5,
    icon: <FaTwitterSquare></FaTwitterSquare>,
    url: "https://twitter.com/MikeSundqvist",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url}>
        {link.icon}
      </a>
    </li>
  )
})

export default ({ linksStyle }) => {
  return (
    <SocialLinksWrap linksStyle={linksStyle} >{links}</SocialLinksWrap>
  )
}

/*
export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
*/
