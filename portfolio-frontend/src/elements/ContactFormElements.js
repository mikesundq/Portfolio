import styled from "styled-components"

export const ContactFormWrap = styled.article`
    background: ${props => props.theme.color.white};
    border-radius: ${props => props.theme.radius};
    text-align: center;
    box-shadow: ${props => props.theme.shadows.light};
    transition: ${props => props.theme.transition};
    width: 90vw;
    max-width: 35rem;

    &:hover {
    box-shadow: ${props => props.theme.shadows.dark};
    }

    h3 {
        padding-top: 1.25rem;
        color: ${props => props.theme.color.grey5};
    }

`