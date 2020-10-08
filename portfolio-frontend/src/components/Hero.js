import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
//import elements
import {HeroWrapper, Underline} from "../elements/HeroElements"

const query = graphql`
  {
    file(relativePath: { eq: "mike1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <HeroWrapper>
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>Soy Mike</h1>
            <Underline/>
            <h4>Studerande på TUC yrkeshögskola</h4>
            -I’m currently working on my own Portfolio site
            <br />
            -Tjästeledigt butiksbiträde
            <br />
            -Blivande systemutvecklare 
            <br />
            -Snackar lite spanska
            <br />
            -Kör båge
            <br />
            -Kontakta mig genom denna länk 
            <br />
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </HeroWrapper>
  )
}
export default Hero
