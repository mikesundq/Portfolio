import styled from "styled-components"
import Image from "gatsby-image"

export const ProjectWrap = styled.article`
    display: grid;
    margin-bottom: 4rem;
    
    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
    }

    @media screen and (min-width: 992px) {
        grid-column: 1 / span 8;
        grid-row: 1 / 1;
        height: 30rem;
        border-radius: var(--radius);
        box-shadow: var(--dark-shadow);
    }

`

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


// &:hover{
//     opacity: 0;
// }
// &:nth-of-type(even) {

// }