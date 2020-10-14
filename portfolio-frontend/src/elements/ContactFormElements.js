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

export const ContactFormGroup = styled.div`
    padding: 1rem 1.5rem;
`

export const ContactInput = styled.input`
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: ${props => props.theme.color.grey10};
    border-radius: ${props => props.theme.radius};
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.spacing};

    ::placeholder {
        font-family: ${props => props.theme.font.primary};
        color: ${props => props.theme.color.grey1};
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.spacing};
    }
`
export const ContactInputText = styled.textarea`
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: ${props => props.theme.color.grey10};
    border-radius: ${props => props.theme.radius};
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.spacing};

    ::placeholder {
        font-family: ${props => props.theme.font.primary};
        color: ${props => props.theme.color.grey1};
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.spacing};
    }
`
