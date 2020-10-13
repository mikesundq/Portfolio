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