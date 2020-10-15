import styled from "styled-components"

export const ServicesSection = styled.section`
    background: ${props => props.theme.color.grey10};
    padding: 5rem 0;
`

export const ServicesCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
        width: 95vw;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 676px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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

    //this is for underline in title
    div {
        width: 3rem;
        height: 0.12rem;
        -webkit-transition: ${props => props.theme.transition};
        transition: ${props => props.theme.transition};
    }

    &:hover{
        background: ${props => props.theme.color.primary5};
        color: ${props => props.theme.color.primary9};

        p {
            color: ${props => props.theme.color.primary9};
        }

        //this is for underline
        div {
            background: ${props => props.theme.color.primary9};

        }
    }
`


export const ServiceUnderline = styled.div`
    width: 3rem;
    height: 0.12rem;
    margin-bottom: 1.25rem;
    background: ${props => props.theme.color.primary5};
    margin-left: auto;
    margin-right: auto;
    -webkit-transition: ${props => props.theme.transition};
    transition: ${props => props.theme.transition};
`