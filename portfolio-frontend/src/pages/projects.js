import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="CV" description="Mike CV" />
      <section>
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