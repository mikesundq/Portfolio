import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { 
  ProjectWrap,
  ProjectImage,
  ProjectInfo,
  GithubIcon,
  ShareIcon,
  ProjectNumber,
  ProjectStack,
} from "../elements"


const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      {/* if image is not supplied, instead of breaking, dont show any image */}
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      )}
      <div className="project-info">
        <ProjectNumber>0{index + 1}.</ProjectNumber>
        {/* if title is not supplied, set a defualt title */}
        <h3>{title || "Projekt"}</h3>
        <p>{description}</p>
        <ProjectStack>
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </ProjectStack>
        <div>
          <a href={github}>
            <GithubIcon/>
          </a>
          <a href={url}>
            <ShareIcon/>
          </a>
        </div>
      </div>
    </article>
  )
}

/*if you for example forget to set these fields in strapi,
so if you forget to give them values, you will get a error in your console
*/
Project.propTypes = {
  title: PropTypes.string.isRequired,
  git: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
