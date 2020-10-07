import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import downloadFile from "../../static/MittCV.pdf"
import { Link } from "gatsby"
// ...GatsbyImageSharpFluid

const About = ({ data }) => {
    //console.log(data)

    const { info, stack, title, image } = data.allStrapiAbout.nodes[0]

    console.log(image.childImageSharp.fluid)

    // return (
    //   <h1>about page</h1>
    // )
    return (
        <Layout>
            <div className="section-center about-center">
                <image
                    fluid={image.childImageSharp.fluid}
                    className="about-img"
                />
                <ReactMarkdown source={info} />
                <div className="about-stack">
                    {stack.map(item => {
                        return <span key={item.id}>{item.title}</span>
                    })}
                </div>
                <div className="btn cv">
                    <a href={downloadFile} download>
                        Ladda ner fullständigt CV
                    </a>
                    {/* {``} */}
                </div>
                <Link to="/contact" className="btn">
                    kontakta mig
                </Link>
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
        allStrapiAbout {
            nodes {
                title
                info
                stack {
                    title
                    id
                }
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default About
