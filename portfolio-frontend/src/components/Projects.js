import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import {
  ProjectsSection,
  ProjectsCenter,
  CenterButton,

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
        <CenterButton to="/projects">
          Alla projekt
        </CenterButton>
      )}
    </ProjectsSection>
  )
}

export default Projects