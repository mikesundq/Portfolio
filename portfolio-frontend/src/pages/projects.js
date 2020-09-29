import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="project-page">
        <Projects projects={projects} title="Alla projekt" />
      </section>
    </Layout>
  )
}

export default ProjectsPage


export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        title
        github
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`