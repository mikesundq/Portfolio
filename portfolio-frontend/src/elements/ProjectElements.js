import styled from "styled-components"


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

    &:hover img::after {
        opacity: 0;
    }

    &:nth-of-type(even) img {
        grid-column: 5 / -1;
        grid-row: 1 / 1;
    }

    :nth-of-type(even) .project-info {
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

        :nth-of-type(even) .project-info {
            grid-column: 2 / span 7;
            grid-row: 1 / 1;
            text-align: left;
        }

    }

`

/*
export const ProjectIcon = {
    color: "#2caeba",
    fontsize: "1.25rem",
    marginright: "0.5rem",
    transition: "all 0.3s linear"
    :hover {
        color: var(--clr-primary-1);
    }
    //color: '${props => props.theme.color.primary5}'
};
*/

// &:hover{
//     opacity: 0;
// }
// &:nth-of-type(even) {

// }