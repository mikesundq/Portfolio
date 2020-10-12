import styled from "styled-components"

export const JobsWrapper = styled.section`
    padding: 5rem 0;
`

export const JobsCenter = styled.div`
    width: 80vw;
    margin: 0 auto;
    max-width:  ${props => props.theme.width.max};

    @media screen and (min-width: 992px) {
        width: 90vw;
        display: grid;
        grid-template-columns: 200px 1fr;
        column-gap: 4rem;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;

    @media screen and (min-width: 992px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`