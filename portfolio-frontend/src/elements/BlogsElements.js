import styled from "styled-components"


export const BlogsWrap = styled.section`
    padding: 5rem 0;
`

export const BlogsCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
        width: 95vw;
    }

    @media screen and (min-width: 576px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
        column-gap: 2rem;
    }
`

export const BlogArticle = styled.article`
    display: block;
    margin-bottom: 2rem;
    background: ${props => props.theme.color.grey10};
    border-radius: ${props => props.theme.radius};
    box-shadow: ${props => props.theme.shadows.light};
    transition: ${props => props.theme.transition};

    &:hover {
        box-shadow: ${props => props.theme.shadows.dark};
        transform: scale(1.02);
    }
`
export const BlogCard = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem 1rem;

    h4 {
        color:  ${props => props.theme.color.grey1};
    }
`

export const BlogFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        margin-bottom: 0;
        font-weight: bold;
        color: ${props => props.theme.color.grey5};
    }

    p:first-of-type {
        display: inline-block;
        background: ${props => props.theme.color.grey9};
        color: ${props => props.theme.color.grey5};
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: ${props => props.theme.radius};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
    }
`

export const BlogTempletWrap = styled.section`
    background: ${props => props.theme.color.grey10};
    min-height: calc(100vh - 5rem - 9rem);
    padding: 5rem 0;

    h1, h2 {
        text-align: center;
    }

    ul {
        margin-top: 2rem;
        display: inline-block;
    }

    ul li {
        background: ${props => props.theme.color.grey9};
        color: ${props => props.theme.color.grey5};
        padding: 0.5rem 1rem;
        margin: 1rem 0;
        text-transform: uppercase;
    }

    blockquote {
        background: ${props => props.theme.color.primary9};
        border-radius: ${props => props.theme.radius};
        padding: 1rem;
        line-height: 2;
        color: ${props => props.theme.color.primary5};
        margin: 2rem 0;
    }

    pre {
        background: #222;
        color: yellow;
        overflow-x: scroll;
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
    }

    img {
        width: 15rem;
        height: 15rem;
        margin: 3rem 0;
    }
`

export const BlogTempCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
        width: 95vw;
    }
`
