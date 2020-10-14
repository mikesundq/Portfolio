import styled from "styled-components"

export const BlogPageWrapper = styled.section`
    background: ${props => props.theme.color.grey10};
    min-height: calc(100vh - 5rem - 9rem);

    article {
        background: ${props => props.theme.color.white};
    }
`

export const ErrorPageWrapper = styled.main`
    background: ${props => props.theme.color.grey10};
    min-height: calc(100vh - 5rem - 9rem);

    display: grid;
    place-items: center;
    background: ${props => props.theme.color.primary10};
    text-align: center;

    h1 {
        text-transform: uppercase;
        color: ${props => props.theme.color.primary1};
        margin-bottom: 2rem;
    }
`
export const ContactPageWrapper = styled.section`
    background: ${props => props.theme.color.grey10};
    min-height: calc(100vh - 5rem - 9rem);

    display: grid;
    place-items: center;
    padding: 5rem 0;
`