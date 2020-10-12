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

export const JobButton = styled.button`
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: ${props => props.theme.spacing};
    margin: 0 0.5rem;
    transition: ${props => props.theme.transition};
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    

    &:hover {
        color: ${props => props.theme.color.primary5};
        box-shadow: 0 2px ${props => props.theme.color.primary5};
    }

    @media screen and (min-width: 992px) {
        margin-bottom: 1rem;
        &:hover {
            box-shadow: -2px 0 ${props => props.theme.color.primary5};
        }
    }
`
/*
.active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }

@media screen and (min-width: 992px) {
    box-shadow: -2px 0 var(--clr-primary-5);

*/