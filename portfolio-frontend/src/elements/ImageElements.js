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
