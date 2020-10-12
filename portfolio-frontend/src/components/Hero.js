import React from "react"
//import Image from "gatsby-image"
//import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
//import elements
import {
  HeroWrapper,
  HeroUnderline,
  HeroCenter,
  HeroInfo,
  HeroImage,
  ContactButton,
} from "../elements"


const query = graphql`
  {
    file(relativePath: { eq: "mike-hero.png" }) {
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
      <HeroCenter>
        <HeroInfo>
          <div>
            <h1>Soy Mike</h1>
            <HeroUnderline/>
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
            <ContactButton to="/contact">
              kontakta mig
            </ContactButton>
            <SocialLinks linksStyle="hero"/>
          </div>
        </HeroInfo>
        <HeroImage fluid={fluid} />
      </HeroCenter>
    </HeroWrapper>
  )
}
export default Hero
