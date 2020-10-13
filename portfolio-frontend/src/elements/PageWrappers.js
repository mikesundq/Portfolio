import styled from "styled-components"

export const BlogPageWrapper = styled.section`
    background: ${props => props.theme.color.grey10};
    min-height: calc(100vh - 5rem - 9rem);

    article {
        background: ${props => props.theme.color.white};
    }
`