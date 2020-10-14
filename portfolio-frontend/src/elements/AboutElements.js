import styled from "styled-components"

export const AboutCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    column-gap: 4rem;

    @media screen and (min-width: 992px) {
        width: 95vw;
    }
`

export const AboutArticle = styled.article`
    grid-column: 6 / -1;
    
    p {
        line-height: 2;
    }
`

export const AboutStack = styled.div`
    span {
        display: inline-block;
        background: ${props => props.theme.color.grey9};
        color: ${props => props.theme.color.grey5};
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: ${props => props.theme.radius};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
        margin-top: 0.5rem;
    }
    
    margin-bottom: 1rem;

`