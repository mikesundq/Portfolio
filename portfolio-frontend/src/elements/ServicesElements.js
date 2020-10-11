import styled from "styled-components"

export const ServicesSection = styled.section`

    background: ${props => props.theme.color.grey10};
    padding: 5rem 0;
`

export const ServicesCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;

    @media screen and (min-width: 992px) {
    width: 95vw;
    grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 676px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
    }

`

export const Service = styled.article`
    background: ${props => props.theme.color.white};
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: ${props => props.theme.radius};
    text-align: center;
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};

    p {
        -webkit-transition: ${props => props.theme.transition};
        transition: ${props => props.theme.transition};
    }
`