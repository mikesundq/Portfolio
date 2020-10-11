import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import React from "react"


//heroWrapper
export const HeroWrapper = styled.header`
  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: ${props => props.theme.color.primary10};
  position: relative;

  @media screen and (min-width: 992px) {
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 65%;
      right: 0;
      bottom: 0;
      background:  ${props => props.theme.color.white};
    }

    h4 {
      font-size: 0.85rem;
      
    }
    
  }
`
//HeroCenter
export const HeroCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  height: 100%;
  display: grid;
  align-items: center;

   /* hide image if screen to small */
  img{
    display: none;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    width: 95vw;

    img {
      display: block;
      grid-row: 1/1;
      grid-column: 6/-1;
    }
  }

`
//HeroInfo
export const HeroInfo = styled.article`
  grid-row: 1/1;
  grid-column: 1 / span 8;
  background: ${props => props.theme.color.primary10};

  h4 {
    color: ${props => props.theme.color.grey5};
  }
  
`

//HeroImage
export const HeroImage = styled(Image)`
  
  //hide image if screen is to small
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
    /* grid doesn't work with display block */
    grid-row: 1/1;
    grid-column: 6/-1;
  }
`

//ContactButton
export const ContactButton = styled(props => <Link {...props} />)`

text-transform: uppercase;
background: ${props => props.theme.color.primary5};
color: ${props => props.theme.color.primary9};
padding: 0.375rem 0.75rem;
letter-spacing: ${props => props.theme.spacing};
display: inline-block;
font-weight: 700;
-webkit-transition: ${props => props.theme.transition};
transition: ${props => props.theme.transition};
font-size: 0.875rem;
border: 2px solid transparent;
cursor: pointer;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
border-radius: ${props => props.theme.radius};

&:hover{
  color: ${props => props.theme.color.primary1};
  background: ${props => props.theme.color.primary8};
}

`

//hero underline
export const HeroUnderline = styled.div`

  margin-bottom: 0.5rem;
  margin-left: 0;
  width: 15rem;
  height: 0.25rem;
  background: ${props => props.theme.color.primary5};

`
