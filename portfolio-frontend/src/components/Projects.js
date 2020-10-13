import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import {
  ProjectsSection,
  ProjectsCenter,

} from "../elements"

const Projects = ({ projects, title, showLink }) => {
  return (
    <ProjectsSection>
      <Title title={title} />
      <ProjectsCenter>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </ProjectsCenter>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Alla projekt
        </Link>
      )}
    </ProjectsSection>
  )
}

export default Projects