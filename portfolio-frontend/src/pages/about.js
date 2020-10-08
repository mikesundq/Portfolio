import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import downloadFile from "../../static/MittCV.pdf"
import { Link } from "gatsby"
// ...GatsbyImageSharpFluid

const About = ({
    data: {
        about: { nodes },
    },
}) => {
    //console.log(nodes)
    const { info, stack, title, image } = nodes[0]
    return (
        <Layout>
            <section className="about-page">
                <div className="section-center about-center">
                    <Image
                        fluid={image.childImageSharp.fluid}
                        className="about-img"
                    />
                    <article className="about-text">
                        {/* <Title title={title} />
                  <p>{info}</p> */}
                        <ReactMarkdown source={info} />
                        <div className="about-stack">
                            {stack.map(item => {
                                return <span key={item.id}>{item.title}</span>
                            })}
                        </div>

                        <div className="btn cv">
                            <a href={downloadFile} download>
                                Ladda ner fullständig CV
                            </a>
                            {` `}
                        </div>
                        <Link to="/contact" className="btn">
                            kontakta mig
                        </Link>
                    </article>
                </div>
                <></>
            </section>
        </Layout>
    )
}

export const query = graphql`
    {
        about: allStrapiAbout {
            nodes {
                stack {
                    id
                    title
                }
                title
                info
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
