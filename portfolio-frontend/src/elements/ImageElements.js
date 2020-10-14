import styled from "styled-components"
import Image from "gatsby-image"


//HeroImage
export const HeroImage = styled(Image)`
    
    //hide image if screen is to small
    display: none;

    @media screen and (min-width: 992px) {
        display: block;
        grid-row: 1/1;
        grid-column: 6/-1;
    }
`

//BlogImage
export const BlogImage = styled(Image)`
    
    border-top-left-radius: ${props => props.theme.radius};
    border-top-right-radius: ${props => props.theme.radius};
    height: 15rem;

    @media screen and (min-width: 576px) {
        height: 17.5rem;
    }

    @media screen and (min-width: 850px) {
        height: 13.75rem;
    }
`

//AboutImage
export const AboutImage = styled(Image)`
    margin-bottom: 2rem;
    height: 40rem;

    @media screen and (min-width: 992px) {
        grid-column: 1 / span 5;
        margin-bottom: 0;
    }
`


//ProjectImage
export const ProjectImage = styled(Image)`
    
    border-top-left-radius: ${props => props.theme.radius};
    border-top-right-radius: ${props => props.theme.radius};
    height: 19rem;
    z-index: 1;

    &:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, ${props => props.theme.color.primary5}, #222);
        opacity: 0.85;
        transition: ${props => props.theme.transition};
    }

    @media screen and (min-width: 576px) {
        height: 19rem;
    }

    @media screen and (min-width: 768px) {
        height: 22rem;
    }

    @media screen and (min-width: 992px) {
        grid-column: 1 / span 8;
        grid-row: 1 / 1;
        height: 30rem;
        border-radius: ${props => props.theme.radius};
        box-shadow: ${props => props.theme.shadows.dark};
    }

`

