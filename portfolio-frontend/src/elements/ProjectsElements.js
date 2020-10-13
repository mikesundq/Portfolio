import styled from "styled-components"

export const ProjectsSection = styled.section`
    padding: 5rem 0;
    background: ${props => props.theme.color.grey10};
`

export const ProjectsCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
        width: 95vw;
    }
`