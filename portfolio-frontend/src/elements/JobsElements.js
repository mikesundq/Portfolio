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
    
    color: ${props => props.isActive === "true" && "#2caeba" };
    box-shadow: ${props => props.isActive === "true" && "0 2px #2caeba" };
    //tried to use theme props but cant get it to work look at this later!
    //color: ${props => props.isActive === "true" && " props.theme.color.primary5" };

    &:hover,
    &:focus {
        color: ${props => props.theme.color.primary5};
        box-shadow: 0 2px ${props => props.theme.color.primary5};
    }

    @media screen and (min-width: 992px) {
        margin-bottom: 1rem;
        &:hover {
            box-shadow: -2px 0 ${props => props.theme.color.primary5};
        }

        //tried to use props but this will do for now..
        box-shadow: ${props => props.isActive === "true" && "-2px 0 #2caeba" };
    }
`

export const JobInfo = styled.article`
    h3 {
        font-weight: 400;
    }
    h4 {
        text-transform: uppercase;
        color: ${props => props.theme.color.grey5};
        background: ${props => props.theme.color.grey9};
        display: inline-block;
        padding: 0.375rem 0.75rem;
        border-radius: ${props => props.theme.radius};
    }
`

export const JobDate = styled.p`
    letter-spacing: ${props => props.theme.spacing};
`

export const JobDesc = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;

    p {
        margin-bottom: 0;
        color: ${props => props.theme.color.grey3};
    }
`

//exporting styles to FaAngleDoubleRight from here..
export const JobIcon = {
    color: "#2caeba",
    //color: '${props => props.theme.color.primary5}'
};
