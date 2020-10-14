import styled from "styled-components"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { ProjectImage } from "./ImageElements"


export const ProjectWrap = styled.article`
    display: grid;
    margin-bottom: 4rem;
    
    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
    }

    @media screen and (min-width: 992px) {
        grid-column: 1 / span 8;
        grid-row: 1 / 1;
        height: 30rem;
        border-radius: var(--radius);
        box-shadow: var(--dark-shadow);
    }

    &:hover div::after {
        opacity: 0;
    }

    &:nth-of-type(even) div {
        grid-column: 5 / -1;
        grid-row: 1 / 1;
    }

    &:nth-of-type(odd) div {
        grid-column: 2 / span 7;
        grid-row: 1 / 1;
        text-align: left;
    }

    @media screen and (min-width: 992px) {

        grid-template-columns: repeat(12, 1fr);
        align-items: center;

        :nth-of-type(even) img {
            grid-column: 5 / -1;
            grid-row: 1 / 1;
        }

        :nth-of-type(even) .div {
            grid-column: 2 / span 7;
            grid-row: 1 / 1;
            text-align: left;
        }

    }

`

//My styled icons, lock up if there is a better way..
export const GithubIcon = styled(FaGithubSquare)`
    color: ${props => props.theme.color.primary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: ${props => props.theme.transition};

    :hover {
            color: ${props => props.theme.color.primary1};
        }

`
export const ShareIcon = styled(FaShareSquare)`
    color: ${props => props.theme.color.primary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: ${props => props.theme.transition};

    :hover {
            color: ${props => props.theme.color.primary1};
        }

`


//for testing not in use
export const ProjectIcon = {
    color: "#2caeba",
    fontsize: "1.25rem",
    marginright: "0.5rem",
    transition: "all 0.3s linear"
    // :hover {
    //     color: var(--clr-primary-1);
    // }
    //color: ${props => props.theme.color.primary5}'
};
//testing not in use


export const ProjectNumber = styled.span`
    display: inline-block;
    font-size: 1.25rem;
    color: ${props => props.theme.color.primary5};
    margin-bottom: 0.75rem;
`

export const ProjectStack = styled.div`
    margin-bottom: 1rem;

    span {
        display: inline-block;
        background: ${props => props.theme.color.grey9};
        color: ${props => props.theme.color.grey5};
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: ${props => props.theme.radius};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
    }
`

export const ProjectInfo = styled.div`
    background: ${props => props.theme.color.white};
    padding: 1rem 2rem;
    border-bottom-left-radius: ${props => props.theme.radius};
    border-bottom-right-radius: ${props => props.theme.radius};

    h3 {
        font-weight: 500;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }

    @media screen and (min-width: 992px) {
        border-radius: ${props => props.theme.radius};
        box-shadow: ${props => props.theme.shadows.dark};
    }
`