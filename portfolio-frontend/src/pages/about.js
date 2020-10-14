import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
//import Title from "../components/Title"
import ReactMarkdown from "react-markdown"
import downloadFile from "../../static/MittCV.pdf"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import {
    AboutPageWrapper,
    AboutCenter,
    AboutArticle,
    AboutStack,
    AboutImage,
    CVButton,

} from "../elements"

const About = ({
    data: {
        about: { nodes },
    },
}) => {

    const { info, stack, image } = nodes[0]
    return (
        <Layout>
            <SEO title="CV" description="Mike CV" />
            <AboutPageWrapper>
                <AboutCenter>
                    <AboutImage
                        fluid={image.childImageSharp.fluid}
                        //className="about-img"
                    />
                    <AboutArticle>
                        <ReactMarkdown source={info} />
                        <AboutStack>
                            {stack.map(item => {
                                return <span key={item.id}>{item.title}</span>
                            })}
                        </AboutStack>

                        <CVButton>
                            <a href={downloadFile} download>
                                Ladda ner fullständig CV
                            </a>
                            {` `}
                        </CVButton>
                        <Link to="/contact" className="btn">
                            kontakta mig
                        </Link>
                    </AboutArticle>
                </AboutCenter>
                
            </AboutPageWrapper>
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
