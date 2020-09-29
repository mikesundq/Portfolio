import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({data}) => {

  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return  (
  <Layout>
    <Hero/>
    <Services/>
    <Jobs/>
    <Projects  projects={projects} title="projekt i fokus" showLink />
  </Layout>
  )
}
// ...GatsbyImageSharpFluid


export const query = graphql`
{
  allStrapiProjects(filter: {featured: {eq: true}}) {
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