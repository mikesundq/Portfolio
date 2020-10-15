import styled from "styled-components"

export const TitleWrap = styled.div`
    margin-bottom: 4rem;
    text-align: center;


    //the underline
    div {
        width: 5rem;
        height: 0.25rem;
        margin-bottom: 1.25rem;
        background: ${props => props.theme.color.primary5};
        margin-left: auto;
        margin-right: auto;
    }
`